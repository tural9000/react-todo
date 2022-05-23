import {useCallback, useRef, useState } from "react";

export default function useItemData(){
  const newId = useRef(1)
  const createTodoItem = (text) => {
    return{
      id: newId.current++,
      label: text,
      done: false,
      important: false
    };
    
  };

    const data = [
        createTodoItem('Drink Coffee'),
        createTodoItem('Make Awesome App'),
        createTodoItem('Have a lunch')
     ]
     
    const[todoData, setTodoData] = useState(data);
    const[filter, setFilt] = useState('all');

    const doneCount = todoData.filter(el => el.done).length;
    const todoCount = todoData.length - doneCount;

    const onDeleted = (id) => {
        const idx = todoData.findIndex(item => item.id === id)
            setTodoData( [...todoData.slice(0, idx), 
                          ...todoData.slice(idx + 1)]
            )
    };

    const addItem = (text) => {
        const newItem = createTodoItem(text)
        setTodoData( [...todoData, newItem])
    };

    const toggleProperty = (id, todoData, propName) => {
      const idx = todoData.findIndex(item => item.id === id);
        
      const oldItem = todoData[idx];
      const newItem = {...oldItem, [propName]: !oldItem[propName]};

      return[
        ...todoData.slice(0, idx),
        newItem,
        ...todoData.slice(idx + 1)
      ]
    }
    
    const onToggleDone = (id) => {
      setTodoData(toggleProperty(id, todoData, 'done'));
      
    }
    const onToggleImportant = (id) => {
     setTodoData(toggleProperty(id, todoData, 'important'));
    }
    
    const onChangeFilter = (filter) => {
      setFilt(filter)
    }

    const onChangeSearch = useCallback((text) => {
      console.log(todoData);
        if(text.length === 0)  setTodoData(todoData) 

        const search = todoData.filter(el => {
            return el.label.toLowerCase().indexOf(text.toLowerCase()) > -1
        })
        setTodoData(search)
    }, [])
    // console.log(onChangeSearch);

    const onFilter = (items, filter) => {
     
        switch(filter) {
          case 'all':
            return items
          case 'active':
            return items.filter((item) => !item.done);
          case 'done':
            return items.filter((item) => item.done);
          default:
            return items
        }
    }


    const todos = onFilter(todoData, filter)
    return {
        bind:{
          todos, onDeleted,
          onToggleDone, onToggleImportant
        },
        count: {done: doneCount, toDo: todoCount},
        addItem,
        onChangeSearch,
        onChangeFilter
    }
}

export {useItemData};