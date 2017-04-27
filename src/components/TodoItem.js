import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ ...todo, onToggle, onRemove }) => {

    const style = {
        cursor: 'pointer',
        textDecoration: todo.completed ? 'line-through' : 'none',
        color: todo.deleted ? 'red' : 'black',
        padding: '0.3rem'
    };

    return (
        <li className="TodoItem" style={style} onClick={onToggle} onDoubleClick={onRemove}>
                {todo.text}
        </li>
    );
};

TodoItem.propTypes = {
    onClick: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    todo: PropTypes.object.isRequired
}

export default TodoItem;