import React from 'react';

const SearchField = ({searchChange}) => {
return(
    <input onChange={searchChange} type='search form-control' placeholder='Search Robot' />
)
}

export default SearchField;