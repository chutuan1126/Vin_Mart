import React from 'react';
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
        &:hover {
            color: #fff;
            background: #ed1c24;
        }
    }
`

function MenuBars() {
    return (
        <Bound className="list_items">
            <li className="menu_item">Thịt - Cá - Trứng</li>
            <li className="menu_item">Rau - Củ - Quả</li>
            <li className="menu_item">Gia vị</li>
            <li className="menu_item">Thực phẩm khô</li>
            <li className="menu_item">Đồ uống - Giải khát</li>
            <li className="menu_item">Sữa</li>
            <li className="menu_item">Hóa phẩm</li>
            <li className="menu_item">Chăm sóc cá nhân</li>
        </Bound>
    )
}

export default MenuBars;
