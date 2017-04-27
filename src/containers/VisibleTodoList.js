import {connect} from 'react-redux'
import { toggle, remove } from '../redux/actions'
import TodoItemList from '../components/TodoItemList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_DELETED':
      return todos.filter(t => t.deleted)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed && !t.deleted)
    default:
      return 'SHOW_ALL'
  }
}

const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.filter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggle: (id) => { dispatch(toggle(id)) },
    onRemove: (id) => { dispatch(remove(id)) }
  }
}

const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoItemList)

export default VisibleTodoList