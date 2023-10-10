import { ACTIVITY_TYPES } from "consts/activityConsts"
import { useState } from "react"
import { ActivityInfo } from "types/activity";
import { v4 } from "uuid"

function getActivityInfo(activityId: string, activityType: string): ActivityInfo {
    let activityTitle;
    let activityDeliveryDate; 

    if(activityType === ACTIVITY_TYPES.ASSIGNMENT) {
        const titleElement: HTMLHeadingElement | null = document.querySelector(".assignment-title h1.title")
        const dateTextSpan: HTMLSpanElement | null = document.querySelector("span.date_text")

        activityTitle = titleElement?.innerHTML
        activityDeliveryDate = dateTextSpan?.textContent?.replace(/\s+/g, " ").trim()
    } else if(activityType === ACTIVITY_TYPES.QUIZ) {
        const titleElement: HTMLHeadingElement | null = document.querySelector(".quiz-header h1#quiz_title")

        const quizDetailsElement: HTMLElement | null = document.getElementById("quiz_student_details")
        const quizDetailsElementChilds = quizDetailsElement?.children

        const dateTextSpan = quizDetailsElementChilds?.[0].querySelector(".value")
        const dateText = dateTextSpan?.textContent?.replace(/\s+/g, " ").trim()

        console.log(quizDetailsElementChilds?.[0])
        activityTitle = titleElement?.innerHTML
        activityDeliveryDate = dateText
    } else {
        // TODO: Handle error when called
        throw new Error("Not supported type " + activityType)
    }

    const info = {
        activityId,
        title: activityTitle,
        delivery_date: activityDeliveryDate,
    }

    return info
}

function SaveButton({ activityType }: { activityType: string }) {
    const [disabled, setDisabled] = useState(false)

    function handleClick() {
        const activityId = v4()
        const activityInfo = getActivityInfo(activityId, activityType)
        chrome.storage.local.set({ [`activity-${activityId}`]: activityInfo });
        setDisabled(true)
    }


    return (<button className="Button" disabled={disabled} onClick={handleClick}> Guardar </button>)

}

export default SaveButton