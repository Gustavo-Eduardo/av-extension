import { useState } from "react"
import { v4 } from "uuid"

// TODO: Move this into a types file
declare type ActivityInfo = {
    activityId: string,
    title?: string,
    delivery_date?: string
    disponibility_date?: string,
}

function getActivityInfo(activityId: string): ActivityInfo {
    // TODO: This will only work for assignments    

    const titleElement: HTMLHeadingElement | null = document.querySelector(".assignment-title h1.title")
    const dateTextSpan: HTMLSpanElement | null = document.querySelector("span.date_text")

    const info = {
        activityId,
        title: titleElement?.innerHTML,
        delivery_date: dateTextSpan?.textContent?.replace(/\s+/g, " ").trim()
    }

    return info
}

function SaveButton() {
    const [disabled, setDisabled] = useState(false)

    function handleClick() {
        const activityId = v4()
        const activityInfo = getActivityInfo(activityId)
        chrome.storage.local.set({ [`activity-${activityId}`]: activityInfo });
        setDisabled(true)
    }


    return (<button className="Button" disabled={disabled} onClick={handleClick}> Guardar </button>)

}

export default SaveButton