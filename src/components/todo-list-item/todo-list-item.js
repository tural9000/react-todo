import React from 'react';

import './todo-list-item.css';


const TodoListItem = ({ label, done, important,onDeleted, 
                        onToggleDone, onToggleImportant}) => {
  
  let clazz = 'todo-list-item';
  if(done) clazz += ' done';
  if(important) clazz += ' important';
  
  

 

  return (
    <span className= {clazz}>
      <span className= 'todo-list-item-label'
            onClick={onToggleDone}>
        {label}
      </span>

      <button type="button" className="btn btn-outline-success btn-sm float-end" 
                            onClick={onToggleImportant}>
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn btn-outline-danger btn-sm float-end"
                            onClick={onDeleted}>
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default TodoListItem;
