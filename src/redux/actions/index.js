export const ADD = "ADD"
export const TOGGLE = "TOGGLE"
export const RESET = "RESET"

let nextTodoId = 0;
export const add = text => ({ type: ADD, text, id: nextTodoId++ })
export const toggle = id => ({ type: TOGGLE, id })
export const reset = () => ({ type: RESET })