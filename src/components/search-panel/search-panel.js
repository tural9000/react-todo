import React, { useEffect, useState } from 'react';

import './search-panel.css';

const SearchPanel = ({onChangeSearch}) => {

  const[label, setlabel] = useState('');

  const withSearchChange = (e) =>{
    setlabel(e.target.value)
    
  }
  //  console.log(label);

  useEffect(() => {
    onChangeSearch(label)

  },[label])

  return (
    <input type="text"
              className="form-control search-input"
              placeholder="type to search" 
              onChange={withSearchChange}
              value={label}/>
  );
};

export default SearchPanel;
