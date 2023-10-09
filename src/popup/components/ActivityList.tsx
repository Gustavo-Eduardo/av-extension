import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ActivityItem from "./ActivityItem";

// TODO: Move this into a types file
declare type ActivityInfo = {
    activityId: string,
    title?: string,
    delivery_date?: string
    disponibility_date?: string,
}

function ActivityList(props, ref) {
    const [activities, setActivities] = useState<ActivityInfo[] | []>([])
    useImperativeHandle(ref, () => ({
        clear: () => {setActivities([])}
    }))

    useEffect(() => {
        chrome.storage.local.get().then(function (items) {
            const storageActivities = []
            for (let key in items) {
                if (key.includes("activity")) {
                    storageActivities.push(items[key]);
                }
            }
            setActivities(storageActivities)
        });
    }, [])

    return (<div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
        {activities.length ?
            activities.map((activity) => (<ActivityItem key={activity.activityId} activity={activity} />)) : <p> No hay actividades guardadas. </p>
        }

    </div>)
}

export default forwardRef(ActivityList)