import { ADD, TOGGLE, RESET } from '../actions';

// const initState = [
//     {
//         text : 'Hello Todo',
//         id : 0,
//         completed : false
//     }
// ];

const todos = (state = [], action) => {

    switch (action.type) {
        case ADD:
            return [
                {
                    id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                    completed: false,
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
        default:
            return state;
    }
}

export default todos;