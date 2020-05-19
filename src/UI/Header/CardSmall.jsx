import React from 'react';
import styled from 'styled-components';

import CanhGaCP from '../../assets/images/ImageProducts/canh-ga-cp.jpg';

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

function CardSmall() {
    return (
        <Bound>
            <span>
                <img src={CanhGaCP} alt="canh-ga-cp" />
            </span>
            <h4>Dải mềm bò New Zealand 500G</h4>
        </Bound>
    )
}

export default CardSmall;
