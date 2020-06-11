import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Bound = styled.div`
    position: static;
    display: flex;
    width: 100%;
    height: 80px;
    z-index: 8888;
    align-items: center;
    justify-content: center;
    background-color: #ed1c24;
    .header_admin {
        width: 1180px;
        height: 80px;
        transition: .2s ease-in-out;
        &>ul {
            display: flex;
            width: 100%;
            height: 100%;
            align-items: center;
            justify-content: space-around;
            &>li {
                list-style: none;
                text-transform: uppercase;
                cursor: pointer;
                &>a {
                    color: #fff;
                    font-weight: 500;
                    padding: 15px 20px;
                    text-decoration: none;
                }
            }
        }
    }
`

function HeaderAdmin() {
    return (
        <Bound>
            <div className="header_admin">
                <ul>
                    <li><Link to='/admin/products'>Products</Link></li>
                    <li><Link to='/admin/order'>Order</Link></li>
                    <li><Link to='/admin/addproduct'>Add Product</Link></li>
                    <li><Link to='/'>category 4</Link></li>
                    <li><Link to='/'>category 5</Link></li>
                </ul>
            </div>
        </Bound>
    )
}

export default HeaderAdmin;
