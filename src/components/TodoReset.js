import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';

const TodoReset = ({ toReset }) => {
    return (
        <button className="TodoReset reset" onClick={toReset}>
            RE:SET
        </button>
    );
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        toReset: () => dispatch(actions.reset())
    }
}

export default connect(undefined, mapDispatchToProps)(TodoReset);