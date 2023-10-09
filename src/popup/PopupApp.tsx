import { useRef } from "react";
import ActivityList from "./components/ActivityList";

function PopupApp() {

    const activitiesRef = useRef()

    function handleClear() {
        activitiesRef.current?.clear()
        chrome.storage.local.clear()
    }

    return (<div style={{ width: "500px", margin: "3px 12px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems:"center" }}>
            <h1> Actividades guardadas </h1>
            <div>
                <button onClick={handleClear} style={{padding: "3px"}}> Borrar </button>
            </div>
        </div>
        <ActivityList ref={activitiesRef} />
    </div>)
}

export default PopupApp