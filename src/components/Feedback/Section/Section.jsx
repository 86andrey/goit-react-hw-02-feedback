import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const Section = ({ title, children }) => (
    <section>
        <h2>{title}</h2>
        {children}
    </section>);

export default Section;