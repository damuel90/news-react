import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => {
    return (
        <nav className="nav-wrapper ligth-blue darken-3">
            <div className="brand-logo center">{title}</div>
        </nav>
    );
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;