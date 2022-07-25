import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ul>
            {options.map(option => {
                return (
                    <li key={option}>
                        <button type="button" onClick={onLeaveFeedback}>
                            {option}
                        </button>
                    </li>
                );
            })}
        </ul>);
}

export default FeedbackOptions;
