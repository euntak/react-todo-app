import { ADD, TOGGLE, RESET, REMOVE } from '../actions';

const todos = (state = [], action) => {

    switch (action.type) {
        case ADD:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
                    deleted: false,
                    text: action.text
                },
                ...state
            ]
        case TOGGLE:
            return state.map((todo) => {
                if(todo.id !== action.id) return todo
                return {
                    ...todo,
                    completed : !todo.completed
                }
            });
        case RESET:
            return []
        case REMOVE:
            return state.map((todo) => {
                if(todo.id !== action.id) return todo
                return {
                    ...todo,
                    deleted : !todo.deleted
                }
            });
        default:
            return state;
    }
}

export default todos;