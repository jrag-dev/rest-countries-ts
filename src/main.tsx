import { createRoot } from "react-dom/client"
import RoutesApp from "./routes/routes"
import "./index.css"
import { ThemeProvider } from "./contexts/theme/ThemeContext"

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <RoutesApp />
  </ThemeProvider>,
)
