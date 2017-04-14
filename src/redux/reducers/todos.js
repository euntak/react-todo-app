import { ADD, REMOVE, TOGGLE, RESET } from '../actions';

const todo = (state = {}, action) => {
    switch (action.type) {
        case ADD:
            return {
                id : action.id,
                text : action.text,
                completed: false,
                deleted: false,
            }
        case REMOVE:
            // if(state.id !== action.id) return state
            return {
                ...state,
                deleted : true,
            }

        case TOGGLE:
            // if(state.id !== action.id) return state

            return {
                ...state,
                completed : !state.completed
            }
        default:
            return state;
    }
}

const todos = (state = [], action) => {
    

    // console.log(`state : ${state.id} action : ${action.id}`);
    
    switch (action.type) {
        case ADD:
            return [
                ...state,
                todo(undefined, action)
            ]
        case REMOVE:
            const rindex = state.map((obj) => obj.id).indexOf(action.id);
            console.log(`remove: ${rindex}`);
            return [
                ...state.slice(0, rindex),
                todo(undefined, action),
                ...state.slice(rindex + 1, state.length)
            ]
        case TOGGLE:
            // const tindex = state.map((obj) => obj.id).indexOf(action.id);
            // console.log(`toggle: ${tindex}`);
            return [
                ...state,
                todo(undefined, action)
            ] 
        case RESET:
            return []
        default:
            return state;
    }
}

export default todos;