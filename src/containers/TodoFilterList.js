import { connect } from 'react-redux';
import { TOGGLE, REMOVE, FILTER } from '../actions';
import TodoItemList from '../components/TodoItemList';

const filterTodos = (todos, filter) => {
    switch (filter) {
        case 'INBOX':
            return todos
        case 'COMPLETED':
            return todos.filter(f => f.completed)
        case 'REMOVED':
            return todos.filter(f => f.deleted)
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        todos: filterTodos(state.todos, state.filter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        TodoClick: (id) => {
            dispatch(TOGGLE)
        },
        TodoDoubleClick: (id) => {
            dispatch(REMOVE)
        },

    }
}

const TodoFilterList = connect(mapStateToProps, mapDispatchToProps)(TodoItemList);

export default TodoFilterList;