import { useRef } from "react";
import ActivityList from "./components/ActivityList";
import { Box, Button, Typography } from "@mui/material";

function PopupApp() {

    const activitiesRef = useRef()

    function handleClear() {
        activitiesRef.current?.clear()
        chrome.storage.local.clear()
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
                <Button onClick={handleClear} variant="outlined" sx={{ p: 1 }}> Borrar </Button>
            </Box>
        </Box>
        <ActivityList ref={activitiesRef} />

    </Box>)
}

export default PopupApp