import React from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

import '../styles/_todoitemlist.scss';

const TodoItemList = ({ todos, onToggle, onRemove }) => {

    const todoList = todos.map(
        todo => (
            <TodoItem
                {...todo}
                key={todo.id}
                onToggle={() => onToggle(todo.id)}
                onRemove={() => onRemove(todo.id)}
            />
    ));

    return (
        <ul className="list">
            {todoList}
        </ul>
    );
};

TodoItemList.PropTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        deleted:PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default TodoItemList;
