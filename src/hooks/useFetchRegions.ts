import { useEffect, useState } from "react"
import { Country, Region } from "../interfaces/countries.interfaces"

export function useFetchRegions() {
  const [countries, setCountries] = useState<Country[]>([])
  const [regions, setRegions] = useState<string[]>([])

  const fetchCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data)
      })
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  useEffect(() => {
    const getRegions = () => {
      const regionsList: Record<string, Region> = {}
      countries.map((country) => {
        if (!regionsList[country.region]) {
          regionsList[country.region] = country.region
        }
      })

      setRegions(Object.values(regionsList))
    }
    getRegions()
  }, [countries])

  return { regions }
}
