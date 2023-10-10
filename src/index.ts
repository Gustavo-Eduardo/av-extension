import fs from "node:fs/promises"
import path from "node:path"
import chokidar from "chokidar"

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

// Set up chokidar to watch the source directory
const watcher = chokidar.watch(sourceDir, {
    persistent: true,
    ignoreInitial: true,
    ignored: '**/node_modules/**',
});

watcher
    .on('add', (filePath) => {
        const relativePath = path.relative(sourceDir, filePath);
        copyFiles(filePath, path.join(destDir, relativePath));
    })
    .on('change', (filePath) => {
        const relativePath = path.relative(sourceDir, filePath);
        copyFiles(filePath, path.join(destDir, relativePath));
    })
    .on('unlink', (filePath) => {
        const relativePath = path.relative(sourceDir, filePath);
        const destFilePath = path.join(destDir, relativePath);
        fs.unlink(destFilePath).then(() => {
            console.log(`Deleted ${destFilePath}`);
        }).catch(error => {
            console.error('Error deleting file:', error);
        });
    })
    .on('error', (error) => console.error(`Watcher error: ${error}`));

console.log(`Watching ${sourceDir} for changes...`);
