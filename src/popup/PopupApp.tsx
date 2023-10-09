import { useRef } from "react";
import ActivityList from "./components/ActivityList";
import { Box, Button, Typography } from "@mui/material";

function PopupApp() {

    const activitiesRef = useRef()

    function handleClear() {
        activitiesRef.current?.clear()
        chrome.storage.local.clear()
    }

    const handleClearSelected = () => {
        activitiesRef.current?.clearSelected()
    }    

    // function goToOptions() {
    //     window.open(chrome.runtime.getURL("options/options.html"))
    // }

    return (<Box width={"500px"} margin={"3px 12px"}>
        <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} my={2}>
            <Typography variant="h5">
                Actividades guardadas
            </Typography>
            <Box>
                <Box display={"flex"} gap={2}>
                    <Button onClick={handleClearSelected} variant="outlined" sx={{ p: 1 }}> Borrar seleccionados </Button>
                    <Button onClick={handleClear} variant="contained" sx={{ p: 1 }}> Borrar todo </Button>
                </Box>
            </Box>
        </Box>
        <ActivityList ref={activitiesRef} />

    </Box>)
}

export default PopupApp