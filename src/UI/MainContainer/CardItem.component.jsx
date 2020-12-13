import React from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import LazyLoad from 'react-lazyload';

//react-redux
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, removeFromCart } from '../../Redux/Cart/Cart.action';

// FormatMoney
import { FormatMoney } from '../../assets/helper/formatMoney';

const Bound = styled.div`
    width: 100%;
    height: 150px;
    background-color: #fff;
    .cart_container {
        display: flex;
        width: 100%;
        height: 100%;
    }
    .cart_image {
        display: flex;
        height: 100%;
        width: 150px;
        padding: 10px;
        img {
            width: 135px;
            height: 135px;
        }
    }
    .cart_info_product {
        user-select: none;
        padding: 10px 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h3 {
            user-select: none;
            font-size: 16px;
            color: #333;
            font-weight: 500;
            word-break: break-word;
        }
        .remove_item {
            span {
                cursor: pointer;
                user-select: none;
                font-size: 13px;
                color: #f44336;
                line-height: 39px;
                padding: 5px 10px;
            }
        }
    }
    .cart_image_info {
        display: flex;
        width: 50%;
        height: 100%;
    }
    .cart_price_quantity {
        padding: 0 32px;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        .cart_price {
            padding: 5px 15px;
            font-size: 18px;
            font-weight: 500;
        }
        .cart_quantity {
            &>button {
                color: #333;
                font-size: 18px;
                font-weight: bold;
                outline: none;
                height: 32px;
                width: 32px;
                margin: 0;
                padding: 0;
                min-width: 32px;
                border: 1px solid #e8e8e8;
                cursor: pointer;
            }
            &>input {
                height: 32px;
                width: 32px;
                text-align: center;
            }
        }
    }
`

function CardItem({ item, quantity }) {
    const dispatch = useDispatch();

    function onClick() {
        dispatch(removeFromCart(item.id));
    }

    function onKeyUpEnter(e) {
        const val = e.target.value;
        const RegExp = /^[0-9]+$/g;
        const result = val.match(RegExp);
        if (!result || val < 1) return;
        if (e.keyCode === 13) {
            dispatch(updateCart(item.id, Number(val)));
        }
    }

    function onChange(e, action) {
        if (action === 'sub') {
            if (quantity === 1) return;
            dispatch(updateCart(item.id));
        } else if (action === 'add') {
            dispatch(addToCart(item));
        } else {
            const val = e.target.value;
            const RegExp = /^[0-9]+$/g;
            const result = val.match(RegExp);
            if (!result) return;
            dispatch(updateCart(item.id, Number(val)));
        }
    }

    return (
        <Bound>
            <div className='cart_container'>
                <div className='cart_image_info'>
                    <div className='cart_image'>
                        <img src={item?.images[0]?.url} alt="test" />
                    </div>
                    <div className='cart_info_product'>
                        <h3>{item?.name}</h3>
                        <div className='remove_item'>
                            <span onClick={onClick}>Xóa khỏi giỏ hàng</span>
                        </div>
                    </div>
                </div>
                <div className='cart_price_quantity'>
                    <span className='cart_price'>{FormatMoney(item?.price?.sellPrice)}đ</span>
                    <div className='cart_quantity'>
                        <button onClick={(e) => onChange(e, 'sub')}>-</button>
                        <input type="text" name="count" onChange={onChange} onKeyUp={onKeyUpEnter} value={quantity} />
                        <button onClick={(e) => onChange(e, 'add')}>+</button>
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default CardItem;
