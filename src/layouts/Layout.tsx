import { Outlet } from "react-router-dom"
import { Header } from "../components/Header"
import { ThemeEnum } from "../enums/ThemeEnum"
import { useThemeContext } from "../contexts/theme/ThemeContext"

export default function Layout() {
  const { theme } = useThemeContext()
  return (
    <>
      <Header />
      <main className={`main ${theme === ThemeEnum.DARK && "dark"}`}>
        <section className="main-wrapper container">
          <Outlet />
        </section>
      </main>
    </>
  )
}
