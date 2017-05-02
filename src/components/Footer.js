import React from 'react';
import styled from 'styled-components';
import FilterLink from '../containers/FilterLink';
import { Filters } from '../redux/actions';

const Wrapper = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    items-align: center;

    & p {
        margin-right: 10px;
    }

`;

const Footer = () => {
    return (
        <Wrapper>
            <p><FilterLink filter={Filters.SHOW_ALL}>ALL</FilterLink></p>
            <p><FilterLink filter={Filters.SHOW_COMPLETED}>COMPLETED</FilterLink></p>
            <p><FilterLink filter={Filters.SHOW_REMOVED}>REMOVED</FilterLink></p>
            <p><FilterLink filter={Filters.SHOW_ACTIVE}>ACTIVE</FilterLink></p>
        </Wrapper>
    );
};

export default Footer;