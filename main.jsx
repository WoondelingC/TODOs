import { createRoot } from "react-dom/client"
import App from "./counter"

const root = createRoot(document.getElementById("app"))

root.render(
  <App/>
)