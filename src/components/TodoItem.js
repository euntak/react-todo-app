// import React, { Component } from 'react';

import React from 'react';

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

export default TodoItem;
/*
class  extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.completed !== this.props.completed;
    }

    render() {
        const { text, completed, deleted, id, onToggle, onRemove } = this.props;

        const style = {
            cursor: 'pointer',
            textDecoration: completed ? 'line-through' : 'none',
            color: deleted ? 'red' : 'black',
            padding: '0.3rem'
        };

        return (
            <li className="TodoItem" style={style}>
                {text}
            </li>
        );
    }
}
export default TodoItem;*/