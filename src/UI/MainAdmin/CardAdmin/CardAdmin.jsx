import React, { useState, useEffect } from 'react';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';

import CustomInput from '../../Customs/CustomInput.component';

//react-redux, action
import { useDispatch } from 'react-redux';
import { removeProduct, updateProduct } from '../../../Redux/Admin/Admin.action';

const Bound = styled.div`
    width: 222px;
    height: 380px;
    padding: 15px;
    transition: .5s;
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
            width: 192px;
            height: 44px;
            font-size: 14px;
            margin-top: 10px;
            line-height: 1.5;
            overflow: hidden;
            -webkit-line-clamp: 2;
            word-break: break-word;
            -webkit-box-orient: vertical;
            font-family: Roboto, sans-serif;
        }
    }
    .card-price {
        color: #333;
        width: ${props => props.width ? "170px" : "192px"};
        height: 70px;
        margin-top: 10px;
        vertical-align: center;
        word-break: break-word;
        .card-price-sub {
            margin-top: 5px;
            display: block;
            font-size: 12px;
            font-weight: normal;
        }
    }
    .card-btn {
        display: flex;
        width: 100%;
        height: 35px;
        align-items: center;
        justify-content: space-around;
        &>button:nth-child(1) {
            color: red;
            width: 90px;
            height: 100%;
            outline: none;
            border-radius: 4px;
            border: 1px solid red;
            background-color: transparent;
            cursor: pointer;
            &:hover {
                color: #fff;
                background-color: red;
            }
        }
        &>button:nth-child(2) {
            color: blue;
            width: 90px;
            height: 100%;
            outline: none;
            border-radius: 4px;
            border: 1px solid blue;
            background-color: transparent;
            cursor: pointer;
            &:hover {
                color: #fff;
                background-color: blue;
            }
        }
    }
    &:hover {
        box-shadow: 0 0 10px 0 hsla(0,0%,60%,.8);
    }
    .card-update {
        width: 100%;
        height: max-content;
        &>button {
            outline: none;
            border: 1px solid blue;
            border-radius: 4px;
            color: blue;
            width: 100%;
            height: 40px;
            margin-top: 20px;
            background-color: transparent;
            cursor: pointer;
            &:hover { 
                color: #fff;
                background-color: blue;
            }
        }
    }
`

function CardAdmin({ item }) {
    const dispatch = useDispatch();

    const [action, setAction] = useState(true);
    const [name, setName] = useState(null);
    const [proid, setProid] = useState(null);
    const [price, setPrice] = useState(null);
    const [imageUrl, setImageUrl] = useState(null);
    const [promotion, setPromotion] = useState(null);
    const [value, setValue] = useState({
        name: '',
        proid: '',
        price: '',
        faceProduct: '',
        promotion: ''
    });

    function onClickRemove() {
        dispatch(removeProduct(item._id));
    }

    function onClickEdit() {
        setAction(false);
    }

    function onClickUpdate() {
        setAction(true);
        dispatch(updateProduct({
            id: item._id,
            name: value.name,
            proid: value.proid,
            price: value.price,
            faceProduct: value.faceProduct,
            promotion: value.promotion
        }));
        setValue({
            name: '',
            proid: '',
            price: '',
            faceProduct: '',
            promotion: ''
        });
    }

    function onChangeImageUrl(e) {
        const val = e.target.value.trim();
        if (val) { setValue({ ...value, faceProduct: val }) }
        else { setValue({ ...value, faceProduct: '' }) }
    }
    function onChangeName(e) {
        const val = e.target.value.trim();
        if (val) { setValue({ ...value, name: val }) }
        else { setValue({ ...value, name: '' }) }
    }
    function onChangeProid(e) {
        const val = e.target.value.trim();
        if (val) { setValue({ ...value, proid: val }) }
        else { setValue({ ...value, proid: '' }) }
    }
    function onChangePrice(e) {
        const val = e.target.value.trim();
        if (val) { setValue({ ...value, price: val }) }
        else { setValue({ ...value, price: '' }) }
    }
    function onChangePromotion(e) {
        const val = e.target.value.trim();
        if (val) { setValue({ ...value, promotion: val }) }
        else { setValue({ ...value, promotion: '' }) }
    }

    useEffect(() => {
        if (!item) return;

        setName(item.name);
        setPrice(item.price);
        setProid(item.proid);
        setImageUrl(item.faceProduct);
        setPromotion(item.promotion);
    }, [item]);

    return (
        <Bound>
            {
                action
                    ? <React.Fragment>
                        <div className="cart-content">
                            <div className="card-image">
                                <LazyLoad>
                                    <img src={imageUrl} alt='faceImage' />
                                </LazyLoad>
                            </div>
                            <div className="card-name">
                                <span className="card-name-content">name: {name}</span>
                            </div>
                            <div className="card-price">
                                <span className="card-price-sub">proid: {proid}</span>
                                <span className="card-price-main">price: {price}đ</span>
                                <span className="card-price-sub">KM: {promotion}đ</span>
                            </div>
                        </div>
                        <div className="card-btn">
                            <button onClick={onClickRemove}>Remove</button>
                            <button onClick={onClickEdit}>Edit</button>
                        </div>
                    </React.Fragment>
                    : <div className="card-update">
                        <CustomInput
                            id="imageUrl"
                            type="text"
                            name="imageUrl"
                            value={value.faceProduct}
                            handleChange={onChangeImageUrl}
                            label="Edit ImageUrl" />
                        <CustomInput
                            id="name"
                            type="text"
                            name="name"
                            value={value.name}
                            handleChange={onChangeName}
                            label="Edit Name" />
                        <CustomInput
                            id="proid"
                            type="text"
                            name="proid"
                            value={value.proid}
                            handleChange={onChangeProid}
                            label="Edit Proid" />
                        <CustomInput
                            id="price"
                            type="text"
                            name="price"
                            value={value.price}
                            handleChange={onChangePrice}
                            label="Edit Price" />
                        <CustomInput
                            id="promotion"
                            type="text"
                            name="promotion"
                            value={value.promotion}
                            handleChange={onChangePromotion}
                            label="Edit Promotion" />
                        <button onClick={onClickUpdate}>Update</button>
                    </div>
            }
        </Bound>
    )
}

export default React.memo(CardAdmin);