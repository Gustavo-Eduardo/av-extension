import { useEffect } from "react"

function PopupApp() {

    useEffect(() => {
        chrome.storage.session.get().then(function (items) {
            const activitiesDiv = document.getElementById("list") as HTMLDivElement;
            for (let key in items) {
                const activityDiv = document.createElement("div");
                activityDiv.innerHTML = items[key];
                activitiesDiv.appendChild(activityDiv);
            }
        });
    }, [])

    return (<div>
        <h1> Actividades guardadas </h1>            
        <div id="list"/>
    </div>)
}

export default PopupApp