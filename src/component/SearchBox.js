import React from 'react'
const SearchBox = (props) => {
  return (
    <div className='col col-sm-4 search'>
      <input className='form-control' value={props.value} onChange={(event)=>props.setSearch(event.target.value)}
      placeholder="type to Search "/>
    </div>
  ) 
}

export default SearchBox