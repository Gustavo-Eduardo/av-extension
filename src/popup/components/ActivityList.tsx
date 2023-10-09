import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ActivityItem from "./ActivityItem";
import { Box, Typography } from "@mui/material";

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

    return (<Box display={"flex"} flexDirection={"column"} gap={1}>
        {activities.length ?
            activities.map((activity) => (<ActivityItem key={activity.activityId} activity={activity} />)) : <Typography> No hay actividades guardadas. </Typography>
        }

    </Box>)
}

export default forwardRef(ActivityList)