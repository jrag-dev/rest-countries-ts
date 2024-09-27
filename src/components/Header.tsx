import { useThemeContext } from "../contexts/theme/ThemeContext"
import { ThemeEnum } from "../enums/ThemeEnum"
import "./Header.css"
import { MoonOutlineIcon, MoonSolidIcon } from "./IconsComp"

export function Header() {
  const { theme, handlerTheme } = useThemeContext()

  return (
    <header className={`header ${theme === ThemeEnum.DARK && "dark"}`}>
      <div className="header-wrapper container">
        <h1>Where in the world?</h1>
        <button
          className="button-dark-theme"
          type="button"
          onClick={() => handlerTheme()}
        >
          {theme === ThemeEnum.LIGHT ? <MoonOutlineIcon /> : <MoonSolidIcon />}
          {theme}
        </button>
      </div>
    </header>
  )
}
