import React from 'react';

const TodoReset = ({onClick}) => {
    return (
        <button className="TodoReset" onClick={onClick}>
            reset
        </button>
    );
}

export default TodoReset;