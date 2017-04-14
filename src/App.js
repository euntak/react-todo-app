import React from 'react';

// component import
import TodoItemList from './components/TodoItemList';
import TodoInsert from './components/TodoInsert';
import TodoReset from './components/TodoReset';

const App = () => {
  return (
    <div className="root">
        <h2 className="title">Hello Todo</h2>
        <TodoReset>Reset</TodoReset>
        <TodoInsert>Insert</TodoInsert>
        <TodoItemList/>
    </div>
  );

};

export default App;