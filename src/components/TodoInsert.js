import React, { Component } from 'react';

class TodoInsert extends Component {
    state = {
        input: '',
        focus: true
    }

    handleChange = (e) => {
        this.setState({
           input: e.target.value,
        });
    }

    handleClick = (e) => {
        if(this.state.input !== '') {
            this.props.onInsert(this.state.input);
            this.setState({
                input: '',
                focus: false
            });
        } else {
            alert("Input Text is Empty !");
            this.setState({
                focus: true
            });
        }

        
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') this.handleClick();
    }

    render() {
        const { input } = this.state;
        const { handleChange, handleClick, handleKeyPress } = this;

        return (
            <div className="TodoInsert input-todo">
                <input ref={input => input && input.focus()} 
                value={input} onChange={handleChange} onKeyPress={handleKeyPress}/>
                <button className="add" onClick={handleClick}>Add</button>
            </div>
        );
    }
}

export default TodoInsert;