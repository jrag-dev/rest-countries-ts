import { useThemeContext } from "../contexts/theme/ThemeContext"
import { ThemeEnum } from "../enums/ThemeEnum"
import { Country } from "../interfaces/countries.interfaces"
import "./CountryComp.css"

interface Props {
  country: Country
}

export function CountryComp({ country }: Props) {
  const { theme } = useThemeContext()
  return (
    <article className={`card-country ${theme === ThemeEnum.DARK && "dark"}`}>
      <img src={country.flags.png} alt={country.name.official || "bandera"} />
      <h3>{country.name.common}</h3>
      <div className="card-texts">
        <div className="card-text-flex">
          <span>Population:</span>
          <span>{country.population.toLocaleString()}</span>
        </div>
        <div className="card-text-flex">
          <span>Regions:</span>
          <span>{country.region}</span>
        </div>
        <div className="card-text-flex">
          <span>Capital:</span>
          <span>{country.capital}</span>
        </div>
      </div>
    </article>
  )
}
