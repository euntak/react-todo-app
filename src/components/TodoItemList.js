import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import TodoItem from './TodoItem';

import '../styles/_todoitemlist.scss';

const TodoItemList = ({ todos, onToggle }) => {

    const todoList = todos.map(
        todo => (
            <TodoItem
                {...todo}
                onToggle={() => onToggle(todo.id)}
            />
    ));

    return (
        <ul className="list">
            {todoList}
        </ul>
    );
};

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: (id) => dispatch(actions.toggle(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItemList);
