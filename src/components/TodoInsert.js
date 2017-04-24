import React from 'react';
import { connect } from 'react-redux';
import { add } from '../redux/actions';


// import React from 'react';

const TodoInsert = ({ dispatch }) => {
    let input

    function handleChange(e) {
        if(!input.value.trim()) return;
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter') this.handleClick();
    }

    function handleClick(e) {
        if(!input.value.trim()) return;
        dispatch(add(input.value));
        input.value = '';
    }

    return (
        <div className="TodoInsert input-todo">
            <input ref={node => {input = node}}
            value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
            <button className="add" onClick={handleClick}>Add</button>
        </div>
    );
};

export default connect()(TodoInsert);