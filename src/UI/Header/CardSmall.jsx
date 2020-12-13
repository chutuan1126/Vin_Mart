import React from 'react';
import styled from 'styled-components';

const Bound = styled.div`
    width: 108px;
    height: 100%;
    margin-right: 10px;
    cursor: pointer;
    span {
        display: flex;
        margin: auto;
        width: 80%;
        height: 60%;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }
    h4 {
        font-size: 12px;
        height: 60px;
        overflow: hidden;
        text-align: center;
        text-overflow: ellipsis;
        color: rgba(0,0,0,.87);
        font-family: Roboto,sans-serif;
        line-height: 1.5;
        font-weight: 300;
    }
`

function CardSmall({ item }) {
    return (
        <Bound>
            <span>
                <img src={item?.images[0]?.url} alt={item?.name} />
            </span>
            <h4>{item?.name}</h4>
        </Bound>
    )
}

export default CardSmall;
