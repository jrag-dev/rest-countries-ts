import { SearchComp } from "../components/SearchComp"
import { SelectComp } from "../components/SelectComp"

import "./Home.css"
import { useFetchCountries } from "../hooks/useFetchCountries"
import { CountriesListComp } from "../components/CountriesListComp"
import { useFetchRegions } from "../hooks/useFetchRegions"
import { ThemeEnum } from "../enums/ThemeEnum"
import { useThemeContext } from "../contexts/theme/ThemeContext"
import { Region } from "../interfaces/countries.interfaces"
import { useState } from "react"

export default function Home() {
  const [filterRegion, setFilterRegion] = useState<Region | null>(null)
  const { theme } = useThemeContext()
  const { regions } = useFetchRegions()
  const { data, error, loading } = useFetchCountries(
    "https://restcountries.com/v3.1/all",
  )

  const handlerSelectRegion = (region: Region) => {
    setFilterRegion(region)
  }

  const handlerFilterByRegions = () => {
    console.log(filterRegion)
    return filterRegion !== null && data !== null && data.length > 0
      ? data.filter((country) => {
          return country.region === filterRegion
        })
      : data
  }

  const countriesFiltered = handlerFilterByRegions()

  return (
    <section className={`home ${theme === ThemeEnum.DARK && "dark"}`}>
      <article className="search">
        <SearchComp />
        <SelectComp
          regions={regions}
          handlerSelectRegion={handlerSelectRegion}
        />
      </article>
      <article className="countries">
        <CountriesListComp
          countries={countriesFiltered}
          error={error}
          loading={loading}
        />
      </article>
    </section>
  )
}
