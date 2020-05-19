import React, { useState } from 'react';
import styled from 'styled-components';

//react-redux
import { useDispatch } from 'react-redux';
import { addToCart, editCart, addWatched } from '../../Redux/Cart/Cart.action';

const Bound = styled.div`
    width: 222px;
    height: 380px;
    padding: 15px;
    transition: .5s;
    cursor: pointer;
    .cart-content {
        width: 100%;
        height: auto;
        .card-image {
            width: 192px;
            height: 185px;
            padding: 0 3.5px;
            img {
                width: 185px;
                height: 185px;
            }
        }
        .card-name {
            color: rgba(0, 0, 0, .87);
            width: 192px;
            height: 44px;
            font-size: 14px;
            margin-top: 10px;
            line-height: 1.5;
            vertical-align: center;
            word-break: break-word;    
            font-family: Roboto, sans-serif;
        }
        .card-price {
            color: #333;
            width: 192px;
            height: 50px;
            font-weight: bold;
            margin-top: 10px;
            vertical-align: center;
            word-break: break-word;
            .card-price-sub {
                margin-top: 5px;
                display: block;
                font-size: 12px;
                font-weight: normal;
                text-decoration: line-through;
            }
        }
    }
    .card-image {
        width: 192px;
        height: 185px;
        padding: 0 3.5px;
        img {
            width: 185px;
            height: 185px;
        }
    }
    .card-name {
        color: rgba(0, 0, 0, .87);
        width: 192px;
        height: 44px;
        font-size: 14px;
        margin-top: 10px;
        line-height: 1.5;
        vertical-align: center;
        word-break: break-word;    
        font-family: Roboto, sans-serif;
    }
    .card-price {
        color: #333;
        width: 192px;
        height: 50px;
        font-weight: bold;
        margin-top: 10px;
        vertical-align: center;
        word-break: break-word;
        .card-price-sub {
            margin-top: 5px;
            display: block;
            font-size: 12px;
            font-weight: normal;
            text-decoration: line-through;
        }
    }
    .card-cart {
        display: flex;
        width: 192px;
        height: 36px;
        justify-content: space-between;
        outline: 1px solid rgb(237, 28, 36);
        .cart-btn-red {
            outline: none;
            border: none;
            color: #fff;
            width: 192px;
            height: 36px;
            font-size: 14px;
            font-weight: 500;
            background-color: rgb(237, 28, 36);
            cursor: pointer;
        }
        .cart-btn-while {
            outline: none;
            border: none;
            color: #f44336;
            width: 61px;
            height: 100%;
            font-size: 16px;
            font-weight: bold;
            background-color: #fff;
            cursor: pointer;
        }
    }
    &:hover {
        box-shadow: 0 0 10px 0 hsla(0,0%,60%,.8);
    }
`

function Card({ item }) {
    const dispatch = useDispatch();
    const [cart, setCart] = useState(0);

    function clickAddToCart() {
        setCart(cart + 1);
        dispatch(addToCart(item.id));
    }
    function editToCart(action) {
        if (action === "sub") {
            setCart(cart - 1);
            dispatch(editCart({ amount: cart - 1, idProduct: item.id }));
        }
        else {
            setCart(cart + 1);
            dispatch(editCart({ amount: cart + 1, idProduct: item.id }));
        }
    }
    function onClickAddWatched() {
        dispatch(addWatched(item.id));
    }

    return (
        <Bound>
            <div className="cart-content" onClick={onClickAddWatched}>
                <div className="card-image">
                    <img src={item.faceProduct} alt={item.name} />
                </div>
                <div className="card-name">{item.name}</div>
                <div className="card-price">
                    <span className="card-price-main">{item.price - item.promotion}đ</span>
                    {item.promotion > 0 && <span className="card-price-sub">{item.price}đ</span>}
                </div>
            </div>
            <div className="card-cart">
                {cart !== 0 && <button className="cart-btn-while" onClick={() => editToCart("sub")}>-</button>}
                {
                    cart !== 0
                        ? <button className="cart-btn-while">{cart}</button>
                        : <button className="cart-btn-red" onClick={clickAddToCart}>THÊM VÀO GIỎ</button>
                }
                {cart !== 0 && <button className="cart-btn-while" onClick={() => editToCart("add")}>+</button>}
            </div>
        </Bound>
    )
}

export default Card;
