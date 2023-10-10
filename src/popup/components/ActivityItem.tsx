import { Box, Button, Card, CardActions, CardContent, Checkbox, Link, Typography } from "@mui/material"
import { ActivityInfo } from "types/activity"

function ActivityItem({ activity, selected, selectActivity }: { activity: ActivityInfo, selected: boolean, selectActivity: () => void }) {

    const handleTitleClick = () => {
        chrome.tabs.create({ url: activity.url })
    }

    return <Card elevation={5} style={{ borderTop: "1rem solid rgba(203, 63, 119, 0.4)", borderRadius: "10px" }}>
        <CardContent>
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    <Typography onClick={handleTitleClick} variant="h6" sx={(theme) => ({ ":hover": { color: theme.palette.primary.main, cursor: "pointer" } })}> {activity.title}</Typography>
                    <Typography> <strong>Entrega: </strong>  {activity.delivery_date} </Typography>
                </Box>
                <Checkbox onChange={selectActivity} checked={selected} />
            </Box>


        </CardContent>
    </Card>
}

export default ActivityItem