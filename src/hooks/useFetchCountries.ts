import { useEffect, useState } from "react"
import { Country } from "../interfaces/countries.interfaces"

export function useFetchCountries(url: string) {
  const [data, setData] = useState<Country[] | null>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    ;(async function () {
      try {
        setLoading(true)
        const response = await fetch(url)
        const datos = await response.json()
        setData(datos)
      } catch (err) {
        if (err) {
          setError("Ocurrio un error haciendo la consulta a la api")
        }
      } finally {
        setLoading(false)
      }
    })()
  }, [url])

  return {
    data,
    error,
    loading,
  }
}
