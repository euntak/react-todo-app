import React from 'react';
import { connect } from 'react-redux';
import { reset } from '../redux/actions';

const TodoReset = ({ toReset }) => {
    return (
        <button className="TodoReset reset" onClick={toReset}>
            RE:SET
        </button>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toReset: () => dispatch(reset())
    }
}

TodoReset = connect(undefined, mapDispatchToProps)(TodoReset);

export default TodoReset;