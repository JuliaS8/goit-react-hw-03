import React from 'react'
import css from './SearchBox.module.css'

const SearchBox = () => {
    return (
        <div className={css.searchBox}>
      <label htmlFor="text">Find contact by name
            <input
            type="text"
            name="search"
            placeholder="Enter a name..."
            required
            />
            </label>
            </div>
  )
}

export default SearchBox;