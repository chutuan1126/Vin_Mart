import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bound = styled.ul`
    position: absolute;
    display: none;
    top: 40px;
    left: 0;
    margin: 0;
    padding: 0;
    z-index: 190;
    background-color: #fff;
    min-width: 198px;
    height: max-content;
    a {
        width: 200px;
        height: 40px;
        color: #000;
        text-decoration: none;
    }
    .menu_item {
        position: relative;
        color: #000;
        height: 40px;
        padding: 0 10px;
        font-size: 13px;
        font-weight: 500;
        list-style: none;
        min-width: 200px;
        line-height: 40px;
        background: #fff;
        &:hover::before {
            content: "";
            position: absolute;
            top: 0;
            right: -40px;
            width: 20px;
            height: 20px;
            box-sizing: border-box;
            border: 20px solid transparent;
            border-left: 20px solid #ed1c24;

        }
        &:hover,
        &:hover a {
            color: #fff;
            background: #ed1c24;
        }
    }
`

function MenuBars({ categorys }) {
    return (
        <Bound className="list_items">
            {categorys
                .filter(item => item.id !== 'all')
                .map((item, key) => (
                    <Link key={key} to={`/products/${item.id}/p=1`}><li className="menu_item">{item.title}</li></Link>
                ))}
        </Bound>
    )
}

export default MenuBars;
