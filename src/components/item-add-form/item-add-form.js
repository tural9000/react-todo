import React, {  useState } from 'react';
import './item-add-form.css'

export default function ItemAddForm ({onItemAdded}){
  const [label, setLabel] = useState('');

  const onLabelChange = (e) => {
    let val = e.target.value.toUpperCase()
    setLabel(val);
  }

  const onSubmit = (e) =>{
    if(label !== '') {
      onItemAdded(label);
      setLabel('');
      e.preventDefault()  
    }
     
  }

    return(
      <form className = "d-flex mt-2"
      onSubmit={onSubmit}>
          <input className= "item-add-form form-control"
                  onChange={onLabelChange}
                  placeholder='What needs to be done'
                  value={label}/>
          <button className = "btn btn-info" >Add item</button>
      </form>
    )
}


