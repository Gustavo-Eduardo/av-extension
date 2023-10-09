/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import PopupApp from "./PopupApp"

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)
root.render(<StrictMode>
    <PopupApp />
</ StrictMode>)
