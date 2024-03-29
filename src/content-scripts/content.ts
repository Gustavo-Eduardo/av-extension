/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react"
import { createRoot } from "react-dom/client"
import SaveSection from "./components/SaveSection"
import { ACTIVITY_TYPES } from "consts/activityConsts"

const activityContainers: { [key: string]: HTMLDivElement | null } = {
    [ACTIVITY_TYPES.ASSIGNMENT]: document.querySelector(".assignment-title"),
    [ACTIVITY_TYPES.QUIZ]: document.querySelector(".quiz-header"),
}

function addSaveButton() {
    const url = window.location.href

    const regex = new RegExp(Object.keys(activityContainers).reduce((expr, key) => expr + key + "|", "").slice(0, -1))
    const [activityTypeMatch] = url.match(regex) ?? []
    const activityType = activityTypeMatch ?? ""
    const activityContainer = activityContainers[activityType]

    if (activityContainer) {
        const parentComponent = activityContainer?.parentElement

        const containerElement = document.createElement("div");
        parentComponent?.insertBefore(containerElement, activityContainer)

        const container = createRoot(containerElement)
        container.render(React.createElement(SaveSection, { activityType }))
    }
}

addSaveButton();
