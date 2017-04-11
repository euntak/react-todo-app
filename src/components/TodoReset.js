import React from 'react';

const TodoReset = ({onClick}) => {
    return (
        <button className="TodoReset reset" onClick={onClick}>
            RE:SET
        </button>
    );
}

export default TodoReset;