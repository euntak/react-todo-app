import { FILTER, Filters } from '../actions';

const { SHOW_ALL } = Filters;
const filter = (state = SHOW_ALL, action) => {
    switch(action.type) {
        case FILTER:
            return action.filter;
        default:
            return state;
    }
}

export default filter;