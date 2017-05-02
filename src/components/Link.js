import React from 'react';
import oc from 'open-color';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Selector = styled.a`
    // text-decoration: none;
    cursor: pointer;
    color: ${props => props.active ? oc.violet[7] : oc.grape[4]};

    &:hover {
        color: ${oc.grape[9]};
    }
`;

const Link = ({ active, children, onClick }) => {
    // if(active) return <span>{children}</span>

    return (
        <span>
            <Selector href="#" onClick={e => {e.preventDefault(); onClick()}}>
                {children}
            </Selector>
        </span>
    );
};

Link.PropTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link;