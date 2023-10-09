// TODO: Move this into a types file
declare type ActivityInfo = {
    activityId: string,
    title?: string,
    delivery_date?: string
    disponibility_date?: string,
}

function ActivityItem({ activity }: { activity: ActivityInfo }) {
    return (<div style={{ border: "2px solid black", borderRadius: "10px", padding: "3px", backgroundColor: "rgba(203, 63, 119, 0.1)"}}>
        <h3> {activity.title} </h3>

        <p> <strong> Entrega: </strong> {activity.delivery_date} </p>
    </div>)
}

export default ActivityItem