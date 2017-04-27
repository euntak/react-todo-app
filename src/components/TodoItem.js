import React from 'react';
import PropTypes from 'prop-types';

const TodoItem = ({ text, deleted, completed, onToggle, onRemove }) => {

    const style = {
        cursor: 'pointer',
        textDecoration: completed ? 'line-through' : 'none',
        color: deleted ? 'red' : 'black',
        padding: '0.3rem'
    };

    return (
        <li className="TodoItem" style={style} onClick={onToggle} onDoubleClick={onRemove}>
                {text}
        </li>
    );
};

TodoItem.propTypes = {
    onRemove: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    deleted: PropTypes.bool.isRequired,
    completed: PropTypes.bool.isRequired
}

export default TodoItem;