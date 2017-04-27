import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const TodoReset = ({ dispatch }) => {
    return (
        <button className="TodoReset reset" onClick={() => dispatch(actions.reset())}>
            RE:SET
        </button>
    );
}

export default connect()(TodoReset);