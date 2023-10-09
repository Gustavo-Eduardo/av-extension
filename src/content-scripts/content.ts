/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import React from "react"
import { createRoot } from "react-dom/client"
import SaveButton from "./components/SaveButton"

function addSaveButton() {
    const buttonsContainer: HTMLDivElement | null = document.querySelector(".assignment-buttons")

    if (buttonsContainer) {

        buttonsContainer.style.display = "flex"
        buttonsContainer.style.gap = "5px"

        const containerElement = document.createElement("div");
        buttonsContainer.insertBefore(containerElement, buttonsContainer.firstChild)        

        const container = createRoot(containerElement)
        container.render(React.createElement(SaveButton))
    }
}

addSaveButton();
