import React from 'react';
import FilterLink from '../containers/FilterLink';
import { Filters } from '../redux/actions';

const Footer = () => {
    return (
        <div>
            <p>SHOW <FilterLink filter={Filters.SHOW_ALL}>ALL</FilterLink></p>
            <p>SHOW <FilterLink filter={Filters.SHOW_COMPLETED}>COMPLETED</FilterLink></p>
            <p>SHOW <FilterLink filter={Filters.SHOW_REMOVED}>REMOVED</FilterLink></p>
            <p>SHOW <FilterLink filter={Filters.SHOW_ACTIVE}>ACTIVE</FilterLink></p>
        </div>
    );
};

export default Footer;