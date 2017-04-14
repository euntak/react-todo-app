import React, { Component } from 'react';
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


// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         add: (text) => dispatch(add(this.state.input.value))
//     }
// }

// TodoInsert = connect(undefined, mapDispatchToProps)(TodoInsert);
TodoInsert = connect()(TodoInsert);

export default TodoInsert;

/*class TodoInsert extends Component {
    state = {
        input: '',
        focus: true
    }

    handleChange = (e) => {
        this.setState({
           input: e.target.value,
        });
    }

    // handleClick = (e) => {
    //     if(this.state.input !== '') {
    //         this.props.onInsert(this.state.input);
    //         this.setState({
    //             input: '',
    //             focus: false
    //         });
    //     } else {
    //         alert("Input Text is Empty !");
    //         this.setState({
    //             focus: true
    //         });
    //     }

        
    // }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') this.handleClick();
    }

    render() {
        const { input } = this.state;
        const { handleChange, addTodo, handleKeyPress } = this;

        return (
            <div className="TodoInsert input-todo">
                <input ref={input => input && input.focus()} 
                value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
                <button className="add" onClick={addTodo}>Add</button>
            </div>
        );
    }
}



export default TodoInsert;*/