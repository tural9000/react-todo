import React from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form'
import useItemData from '../../service/item-data';

import './app.css';

const App = () => {
  const item = useItemData();

  return (
    <div className="todo-app">
      <AppHeader {...item.count} />
      <div className="top-panel d-flex">
        <SearchPanel onChangeSearch = {item.onChangeSearch}/>
        <ItemStatusFilter onChangeFilter={item.onChangeFilter}/>
      </div>

      <TodoList {...item.bind}/>
      <ItemAddForm onItemAdded={item.addItem}/>
    </div>
  );
};

export default App;
