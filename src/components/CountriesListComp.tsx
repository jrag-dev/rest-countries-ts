import { Country } from "../interfaces/countries.interfaces"
import { CountryComp } from "./CountryComp"
import "./CountriesListComp.css"

interface Props {
  countries: Country[] | null
  error: string | null
  loading: boolean
}

export function CountriesListComp({ countries, error, loading }: Props) {
  if (error) {
    console.log(error)
  }
  return (
    <div className="countries-container">
      {loading && <div>Loading...</div>}
      {countries && (
        <div className="countries-grid">
          {countries.map((country) => {
            return <CountryComp key={country.name.official} country={country} />
          })}
        </div>
      )}
    </div>
  )
}
