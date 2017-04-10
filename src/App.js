import React, { Component } from 'react';
import shortId from 'shortid';

// component import
import TodoItemList from './components/TodoItemList';
import TodoInsert from './components/TodoInsert';
import TodoReset from './components/TodoReset';

// item object create
function createItem(name) {
  return {
    id : shortId.generate(),  // item unique id
    name,                     // item name
    finished: false           // toggle finish
  }
}

function findItemIndex(id, items) {
    for(let i = 0; i < items.length; i++) {
        if(items[i].id === id) return i;
    }
    return -1;
}


const defaultTodos = [
  'react start',
  'component understand',
  'props/state used',
  'lifecycle api'
].map(createItem);

class App extends Component {

  state = {
    todoItems: defaultTodos
  }

  constructor(props) {
    super(props);

    const todos = localStorage.getItem('todos');

    if(todos) {
      this.state = {
        todoItems: JSON.parse(todos)
      };
    }

  }

  // 컴포넌트가 업데이트 될때의 hook method 
  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem('todos', JSON.stringify(this.state.todoItems));
  }

  // event handler (Reset)
  handleReset = () => {
    this.setState({ // setState를 이용한 state 기본 값으로 셋팅
      todoItems: defaultTodos
    });
  }

  handleInsert = (name) => {
    this.setState({
      todoItems: [...this.state.todoItems, createItem(name)]
    });
  }

  handleToggle = (id) => {
    const { todoItems } = this.state;
    const index = findItemIndex(id, todoItems);
    const item = todoItems[index];

    this.setState({
      todoItems: [
        ...todoItems.slice(0, index),                     // todoItem 배열의 0부터 index 까지
        {
          ...item,    
          finished: !item.finished                        // finished boolean값 toggle 하고
        },
        ...todoItems.slice(index + 1, todoItems.length)   // index + 1 부터 todoItems.length 까지
      ]
    });
  }

  handleRemove = (id) => {
    const { todoItems } = this.state;
    const index = findItemIndex(id, todoItems);
    this.setState({
      todoItems : [
        ...todoItems.slice(0, index),
        ...todoItems.slice(index + 1, todoItems.length)
      ]
    });
  }
  

  render() {
    const { todoItems } = this.state; // 렌더링 할때의 todoItems stats 상태 저장
    const { handleInsert, handleToggle, handleRemove, handleReset } = this;


    return (
      <div>
          <h2>Hello Todo.</h2>
          <TodoReset onClick={handleReset}>Reset</TodoReset>
          <TodoInsert onInsert={handleInsert}>Insert</TodoInsert>
          <TodoItemList items={todoItems} onToggle={handleToggle} onRemove={handleRemove}/>
      </div>
    );
  }
}

export default App;