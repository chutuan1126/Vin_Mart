import React from 'react';
import styled from 'styled-components';

const Bound = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    margin-top: 8px;
    margin-bottom: 16px;
    &>label {
        position: absolute;
        color: #777;
        z-index: 0;
        top: 50%;
        left: 10.5px;
        padding: 0 5px;
        width: max-content;
        height: max-content;
        background-color: #fff;
        transform: translateY(-50%);
        transition: 300ms ease all;
    }
    &>input {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 40px;
        padding: 0 14px;
        border-radius: 4px;
        padding-top: 10.5px;
        padding-bottom: 10.5px;
        background-color: transparent;
        border: 1px solid rgba(0, 0, 0, 0.23);
        &.value ~.label {
            color: #3f51b5;
            top: 0;
            z-index: 1;
            font-size: 12px;
        }
        &:hover {
            border: 1px solid rgba(0, 0, 0, 0.87);
        }
        &:focus {
            z-index: 0;
            outline: none;
            border: 2px solid #3f51b5;
        }
        &:focus ~.label {
            color: #3f51b5;
            top: 0;
            z-index: 1;
            font-size: 12px;
        }
    }
`

const CustomInput = ({ handleChange, handleKeyUp, label, value, id, ...otherProps }) => (
    <Bound>
        <input
            className={value ? 'value' : null}
            value={value}
            onChange={handleChange}
            onKeyUp={handleKeyUp ? handleKeyUp : null}
            {...otherProps} />
        {label && <label htmlFor={id} className="label">{label}</label>}
    </Bound>
)

export default CustomInput;
