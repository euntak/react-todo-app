import { FILTER } from '../actions';

export default (state = 'INBOX', action) => {
    switch (action.type) {
        case FILTER:
            return action.filter
        default:
            return state
    }
}