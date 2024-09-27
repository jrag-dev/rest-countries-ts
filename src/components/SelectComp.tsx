import React, { useState } from "react"
import { ArrowDownIcon } from "./IconsComp"
import "./SelectComp.css"
import { Region } from "../interfaces/countries.interfaces"

interface Props {
  regions: Region[]
  handlerSelectRegion: (r: string) => void
}

export function SelectComp({ regions, handlerSelectRegion }: Props) {
  const [valor, setValor] = useState<string>("")

  const handlerChangeValor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const region = e.target.value
    setValor(region)
    handlerSelectRegion(region)
  }
  return (
    <div className="filter-container">
      <select
        className="filter-country"
        onChange={handlerChangeValor}
        value={valor}
      >
        <option value="">Filter by Region</option>
        {regions.map((region) => {
          return (
            <option key={region} value={region}>
              {region}
            </option>
          )
        })}
      </select>
      <ArrowDownIcon />
    </div>
  )
}
