import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import ActivityItem from "./ActivityItem";
import { Box, Typography } from "@mui/material";
import { act } from "react-dom/test-utils";
import { ActivityInfo } from "types/activity";

function ActivityList(props, ref) {
    const [activities, setActivities] = useState<ActivityInfo[] | []>([])
    const [selectedActivites, setSelectedActivities] = useState<{ [activityId: string]: boolean }>({})

    const createSelectActivityHandler = (activityId: string) => () => {
        setSelectedActivities(act => ({ ...act, [activityId]: !act[activityId] }))
    }

    const clearSelectedActivities = () => {
        setActivities(act => act.filter((a) => !selectedActivites[a.activityId]))
        Object.keys(selectedActivites).forEach(activityId => {
            chrome.storage.local.remove(`activity-${activityId}`)
        })
    }

    useImperativeHandle(ref, () => ({
        clear: () => { setActivities([]) },
        clearSelected: clearSelectedActivities,
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

    return (<Box display={"flex"} flexDirection={"column"} gap={2}>
        {activities.length ?
            activities.map((activity) => (<ActivityItem
                key={activity.activityId}
                selected={Boolean(selectedActivites[activity.activityId])}
                activity={activity}
                selectActivity={createSelectActivityHandler(activity.activityId)} />))
            : <Typography> No hay actividades guardadas. </Typography>
        }

    </Box>)
}

export default forwardRef(ActivityList)