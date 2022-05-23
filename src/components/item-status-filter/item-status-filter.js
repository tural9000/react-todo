import React, { useState } from 'react';

import './item-status-filter.css';

const ItemStatusFilter = ({onChangeFilter}) => {

  const txt = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'}
  ]
  
  const buttons = txt.map(({name, label}) => {
    // const isActive = 
   return  <button type="button" className="btn btn-outline-secondary" key={name}
                   onClick={() => onChangeFilter(name) }>{label}</button>})
  return (
    <div className="btn-group">
      {buttons}
    </div>
  );
};

export default ItemStatusFilter;
