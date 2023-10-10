import { Box, Button, Card, CardActions, CardContent, Checkbox, Typography } from "@mui/material"
import { ActivityInfo } from "types/activity"

function ActivityItem({ activity, selected, selectActivity }: { activity: ActivityInfo, selected: boolean, selectActivity: () => void }) {
    return <Card elevation={5} style={{ borderTop: "1rem solid rgba(203, 63, 119, 0.4)", borderRadius: "10px" }}>
        <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography variant="h6"> {activity.title}</Typography>
                    <Typography> <strong>Entrega: </strong>  {activity.delivery_date} </Typography>
                </Box>
                <Checkbox onChange={selectActivity} checked={selected}/>
            </Box>


        </CardContent>
    </Card>
}

export default ActivityItem