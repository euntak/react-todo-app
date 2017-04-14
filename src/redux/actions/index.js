// import shortId from 'shortid';

export const ADD = "ADD";
export const REMOVE = "REMOVE";
export const TOGGLE = "TOGGLE";
export const RESET = "RESET";
export const FILTER = "FILTER";

let num = 0;

export const add = (text) => {
    return {
        type: ADD,
        // id : shortId.generate(),  
        id: num++,
        text
    };
}

export const remove = (id) => {
    return {
        type: REMOVE,
        id
    };
}

export const toggle = (id) => {
    return {
        type: TOGGLE,
        id
    };
}

export const reset = () => {
    return {
        type: RESET
    };
}

export const visibilityFilter = (filter) => {
    return {
        type: FILTER,
        filter
    }
} 

