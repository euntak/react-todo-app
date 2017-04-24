import React from 'react';

// component import
import TodoItemList from './TodoItemList';
import TodoInsert from './TodoInsert';
import TodoReset from './TodoReset';

const App = () => {
  return (
    <div className="root">
        <h2 className="title">Hello Todo</h2>
        <TodoReset>Reset</TodoReset>
        <TodoInsert >Insert</TodoInsert>
        <TodoItemList />
    </div>
  );
};

export default App;