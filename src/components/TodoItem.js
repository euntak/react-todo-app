import React from 'react';

const TodoItem = ({ ...todo, onToggle }) => {

    const style = {
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
        padding: '0.3rem'
    };

    return (
        <li className="TodoItem" style={style} onClick={onToggle}>
                {todo.text}
        </li>
    );
};

export default TodoItem;