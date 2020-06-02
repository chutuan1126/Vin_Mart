import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LazyLoad from 'react-lazyload';

//react-redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateCart, removeFromCart, addWatched } from '../../Redux/Cart/Cart.action';

//FormatMoney
import { FormatMoney } from '../../assets/helper/formatMoney';

const Bound = styled.div`
    width: ${props => props.width ? props.width : "222px"};
    height: ${props => props.width ? "362px" : "380px"};
    padding: 15px;
    transition: .5s;
    cursor: pointer;
    &>a {
        text-decoration: none;
    }
    .cart-content {
        width: 100%;
        height: auto;
        .card-image {
            position: relative;
            width: ${props => props.width ? "172px" : "192px"};
            height: ${props => props.width ? "172px" : "185px"};
            padding: 0 3.5px;
            img {
                width: ${props => props.width ? "172px" : "185px"};
                height: ${props => props.width ? "172px" : "185px"};
            }
            .card-image-promotion {
                position: absolute;
                display: flex;
                top: 0;
                left: 0;
                color: #fff;
                width: 42px;
                height: 24px;
                font-size: 12px;
                font-weight: 500;
                border-top: none;
                align-items: center;
                justify-content: center;
                border: 1px solid #fff;
                background-color: #d42333;
                border-bottom-left-radius: 5px;
                border-bottom-right-radius: 5px;
            }
        }
        .card-name {
            position: relative;
            width: 100%;
            height: 44px;
            .card-name-content {
                position: absolute;
                display: -webkit-box;
                top: 0;
                left: 0;
                z-index: 6;
                color: rgba(0, 0, 0, .87);
                width: ${props => props.width ? "172px" : "192px"};
                height: 44px;
                font-size: 14px;
                margin-top: 10px;
                line-height: 1.5;
                overflow: hidden;
                -webkit-line-clamp: 2;
                word-break: break-word;
                -webkit-box-orient: vertical;
                font-family: Roboto, sans-serif;
                &:hover ~.card-name-tooltip {
                    top: -90%;
                    opacity: .8;
                    visibility: visible;
                }
            }
            .card-name-tooltip {
                position: absolute;
                color: #fff;
                left: 50%;
                top: 0;
                height: auto;
                font-size: 12px;
                min-width: 200px;
                max-width: 232px;
                width: max-content;
                padding: 3px 7px;
                border-radius: 3px;
                text-align: center;
                background-color: #333;
                opacity: 0;
                visibility: hidden;
                transform: translateX(-50%);
                transition: 0.3s ease-in-out;
                z-index: 5;
            }
        }
        .card-price {
            color: #333;
            width: ${props => props.width ? "170px" : "192px"};
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
    .card-cart {
        display: flex;
        margin: 10px auto;
        width: ${props => props.width ? "170px" : "192px"};
        height: 36px;
        justify-content: space-between;
        outline: 1px solid rgb(237, 28, 36);
        .cart-btn-red {
            outline: none;
            border: none;
            color: #fff;
            width: ${props => props.width ? "170px" : "192px"};
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
            width: ${props => props.width ? "57px" : "61px"};;
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

function Card({ item, width }) {
    const dispatch = useDispatch();
    const [cart, setCart] = useState(0);

    const { CartReducer } = useSelector(state => ({
        CartReducer: state.CartReducer
    }));

    function clickAddToCart() {
        setCart(cart + 1);
        dispatch(addToCart(item._id));
    }
    function editToCart(action) {
        if (action === "sub") {
            if (cart === 1) {
                setCart(0);
                dispatch(removeFromCart(item._id));
            } else {
                setCart(cart - 1);
                dispatch(updateCart(item._id));
            }
        } else {
            setCart(cart + 1);
            dispatch(addToCart(item._id));
        }
    }
    function onClickAddWatched() {
        dispatch(addWatched(item._id));
    }

    useEffect(() => {
        if (!CartReducer) return;
        if (!CartReducer.Cart) return;

        if (window.location) {
            const prod = CartReducer.Cart.filter(i => i.productId._id === item._id);

            prod.length ? setCart(prod[0].quantity) : setCart(0);
        }
    }, [CartReducer, item]);

    return (
        <Bound width={width}>
            <Link to={`/product/${item._id}`}>
                <div className="cart-content" onClick={onClickAddWatched}>
                    <div className="card-image">
                        {
                            Number(item.promotion) > 0 && <span className="card-image-promotion">-{item.promotion > 1000
                                ? Math.floor(item.promotion / 1000)
                                : Math.floor(item.promotion)}{item.promotion > 1000 && "k"}</span>
                        }
                        <LazyLoad>
                            <img src={item.faceProduct} alt={item.name} />
                        </LazyLoad>
                    </div>
                    <div className="card-name">
                        <span className="card-name-content">{item.name}</span>
                        <span className="card-name-tooltip">{item.name}</span>
                    </div>
                    <div className="card-price">
                        <span className="card-price-main">{FormatMoney(item.price - item.promotion)}đ</span>
                        {item.promotion > 0 && <span className="card-price-sub">{FormatMoney(item.price)}đ</span>}
                    </div>
                </div>
            </Link>
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
