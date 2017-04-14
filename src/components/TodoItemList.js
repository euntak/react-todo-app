import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggle, remove } from '../redux/actions';
import TodoItem from './TodoItem';
import '../styles/_todoitemlist.scss';


// import React from 'react';

const TodoItemList = ({ todos, onToggle, onRemove }) => {

    const todoList = todos.map(
        todo => (
            <TodoItem
                {...todo}
                id={todo.id}
                text={todo.text}
                deleted={todo.deleted}
                completed={todo.completed}
                onToggle={onToggle}
                onRemove={onRemove}
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
        onToggle: (id) => dispatch(toggle(id)),
        onRemove: (id) => dispatch(remove(id))
    }
}

TodoItemList = connect(mapStateToProps, mapDispatchToProps)(TodoItemList);

export default TodoItemList;

/*class TodoItemList extends Component {
    render() {
        const { todos, deleted, completed, toggle, remove, text } = this.props;
        const todoList = todos.map(
            item => (
                <TodoItem
                    text={text}
                    deleted={deleted}
                    completed={completed}
                    onToggle={toggle}
                    onRemove={remove}
                />
            )
        )
        return (
            <ul className="list">
                {todoList}
            </ul>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: state.todos,
        text: state.text,
        deleted: state.deleted,
        completed: state.completed
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onToggle: (id) => dispatch(toggle(id)),
        onRemove: (id) => dispatch(remove(id))
    }
}

TodoItemList = connect(mapStateToProps, mapDispatchToProps)(TodoItemList);*/

// export default TodoItemList;