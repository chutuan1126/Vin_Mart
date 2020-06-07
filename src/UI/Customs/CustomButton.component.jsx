import React from 'react';
import styled from 'styled-components';

const Bound = styled.div`
    &>button {
        cursor: pointer;
        text-align: center;
        margin: 24px 0;
        width: 100%;
        height: 36px;
        color: #fff;
        border: none;
        padding: 6px 16px;
        font-size: 0.875rem;
        min-width: 64px;
        font-weight: 500;
        line-height: 1.75;
        border-radius: 4px;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        background-color: #2196f3;
        font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
        &:hover {
            background-color: #1976d2;
        }
    }
`

const CustomButton = ({ children, handleClick, ...otherProps }) => (
    <Bound>
        <button onClick={handleClick} {...otherProps}>{children}</button>
    </Bound>
)

export default CustomButton;
