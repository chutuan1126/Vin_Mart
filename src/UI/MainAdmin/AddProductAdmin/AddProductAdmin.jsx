import React, { useState } from 'react';
import styled from 'styled-components';

import CustomInput from '../../Customs/CustomInput.component';

//react-redux, action
import { useDispatch } from 'react-redux';
import { addProduct } from '../../../Redux/Admin/Admin.action';

const Bound = styled.div`
    display: flex;
    width: 100%;
    margin: 10px 0;
    height: max-content;
    align-items: center;
    justify-content: center;
    .add_product {
        width: 1180px;
        height: max-content;
        padding: 20px 300px;
        background-color: #fff;
        &_title {
            margin-bottom: 50px;
        }
        &>button {
            outline: none;
            border: 1px solid blue;
            border-radius: 4px;
            color: blue;
            width: 100%;
            height: 40px;
            margin-top: 20px;
            font-weight: bold;
            background-color: transparent;
            cursor: pointer;
            &:hover { 
                color: #fff;
                background-color: blue;
            }
        }
    }
`

function AddProductAdmin() {
    const dispatch = useDispatch();

    const [value, setValue] = useState({
        name: '',
        proid: '',
        price: '',
        faceProduct: '',
        promotion: ''
    });

    function onClickAddProduct() {
        dispatch(addProduct({
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

    console.log(value);


    return (
        <Bound>
            <div className="add_product">
                <h1 className="add_product_title">Add Product</h1>
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
                <CustomInput
                    id="imageUrl"
                    type="text"
                    name="imageUrl"
                    value={value.faceProduct}
                    handleChange={onChangeImageUrl}
                    label="Edit ImageUrl" />
                <button onClick={onClickAddProduct}>Add Product</button>
            </div>
        </Bound>
    )
}

export default AddProductAdmin;
