import { Paper, Typography } from "@mui/material"
import SaveButton from "./SaveButton"


const SaveSection = ({ activityType }: { activityType: string }) => {

  return <Paper elevation={5} sx={{ display: "flex", mb: 2, width: "95%", padding: 2, alignItems: "center" }}>
    <Typography variant="h5" fontWeight={600} marginRight={2}> AV-IM </Typography>
    <SaveButton activityType={activityType} />
  </Paper>
}

export default SaveSection