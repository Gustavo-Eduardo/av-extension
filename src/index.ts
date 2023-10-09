import fs from "node:fs/promises"
import path from "node:path"

const sourceDir = path.join(__dirname, 'public');
const destDir = "../dist";

async function copyFiles(source: string, destination:string ) {
    try {
        // Ensure the destination directory exists
        await fs.mkdir(destination, { recursive: true });
        
        // Read the source directory
        const itemsToCopy = await fs.readdir(source, { withFileTypes: true });
        
        // Process each item
        await Promise.all(itemsToCopy.map(async (item) => {
            const oldPath = path.join(source, item.name);
            const newPath = path.join(destination, item.name);
            
            if (item.isDirectory()) {
                // If item is a directory, recurse
                await copyFiles(oldPath, newPath);
            } else {
                // If item is a file, copy it
                await fs.copyFile(oldPath, newPath);
                console.log(`Copied ${oldPath} to ${newPath}`);
            }
        }));
        
    } catch (error) {
        console.error('Error copying files:', error);
    }
}

copyFiles(sourceDir, destDir);
