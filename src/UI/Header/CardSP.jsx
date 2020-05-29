import React from 'react';
import styled from 'styled-components';

//FormatMoney
import { FormatMoney } from '../../assets/helper/formatMoney';

const Bound = styled.div`
    display: flex;
    width: 100%;
    height: 65px;
    padding: 5px 0;
    .card_img {
        width: 65px;
        height: 50px;
        padding: 0 10px;
        object-fit: cover;
    }
    .card_content {
        width: 100%;
        height: 100%;
        &_top {
            color: #333;
            text-align: left;
            font-size: 12px;
        }
        &_bottom {
            padding: 10px 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            span:nth-child(1) {
                font-size: 12px;
                font-weight: 500;
                text-align: left;
            }
            span:nth-child(2) {
                color: #d42333;
                padding: 0 15px;
                font-size: 13px;
                font-weight: 500;
                text-align: right;
            }
        }
    }
`

function CardSP({ item }) {
    return (
        <Bound>
            <img className="card_img" src={item.productId.faceProduct} alt="canh-ga-cp" />
            <div className="card_content">
                <span className="card_content_top">{item.productId.name}</span>
                <div className="card_content_bottom">
                    <span>x{item.quantity}</span>
                    <span>{FormatMoney(item.productId.price)}đ</span>
                </div>
            </div>
        </Bound>
    )
}

export default CardSP;
