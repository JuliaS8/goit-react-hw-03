import React from 'react'
import css from './SearchBox.module.css'

const SearchBox = ({value, onFilter}) => {
    return (
    <div className={css.searchBox}>
      <label htmlFor="text">Find contact by name:</label>
            <input
            type="text"
                value={value}
                onChange={e => onFilter(e.target.value)}
            placeholder="Enter a name..."
            required
                
            />
            
            </div>
  )
}

export default SearchBox;