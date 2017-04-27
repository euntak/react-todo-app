import React from 'react';

// component import
import VisibleTodoList from '../containers/VisibleTodoList';
import TodoInsert from './TodoInsert';
import TodoReset from './TodoReset';
import Footer from './Footer';

const App = () => {
  return (
    <div className="root">
        <h2 className="title">Hello Todo</h2>
        <TodoReset>Reset</TodoReset>
        <TodoInsert >Insert</TodoInsert>
        <VisibleTodoList />
        <Footer />
    </div>
  );
};

export default App;