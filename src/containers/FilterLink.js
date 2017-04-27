import { connect } from 'react-redux';
import { filter } from '../redux/actions';
import Link from '../components/Link';

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(filter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps, 
    mapDispatchToProps
)(Link);

export default FilterLink;