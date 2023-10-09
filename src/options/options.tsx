/// <reference lib="dom" />
/// <reference lib="dom.iterable" />

import { createRoot } from "react-dom/client"
import { StrictMode } from "react"

import OptionsApp from "./OptionsApp"

const rootElement = document.getElementById("root") as HTMLElement
const root = createRoot(rootElement)
root.render(<StrictMode>
    <OptionsApp />
</ StrictMode>)
