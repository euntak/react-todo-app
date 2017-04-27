export const ADD = "ADD"
export const TOGGLE = "TOGGLE"
export const RESET = "RESET"
export const REMOVE = "REMOVE"
export const FILTER = "FILTER"

export const Filters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_REMOVED: 'SHOW_REMOVED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

let nextTodoId = 0;
export const add = text => ({ type: ADD, text, id: nextTodoId++ })
export const toggle = id => ({ type: TOGGLE, id })
export const reset = () => ({ type: RESET })
export const remove = id => ({ type: REMOVE, id })
export const filter = filter => ({ type: FILTER, filter })