import { SearchIcon } from "./IconsComp";

import "./SearchComp.css"

export function SearchComp() {

  return (
    <form className="search-form">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for a country..."
        className="input-search"
      />
      <SearchIcon/>
    </form>
  )
}