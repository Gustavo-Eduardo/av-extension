import { Box, Typography } from "@mui/material"

// TODO: Move this into a types file
declare type ActivityInfo = {
    activityId: string,
    title?: string,
    delivery_date?: string
    disponibility_date?: string,
}

function ActivityItem({ activity }: { activity: ActivityInfo }) {
    return (<Box style={{ border: "2px solid black", borderRadius: "10px", padding: "3px", backgroundColor: "rgba(203, 63, 119, 0.1)" }}>
        <Typography variant="h6"> {activity.title} </Typography>

        <Typography> <strong> Entrega: </strong> {activity.delivery_date} </Typography>
    </Box>)
}

export default ActivityItem