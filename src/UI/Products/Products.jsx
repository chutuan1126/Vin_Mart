import React, { useState, useEffect, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';

//components
import GridProduct from './GridProduct';

//icons
import Sort from '../../assets/images/icons/sort.svg';
import Grid from '../../assets/images/icons/grid.svg';
import GridCol from '../../assets/images/icons/grid-col.svg';
import arrow_bottom from '../../assets/images/icons/arrow_bottom.svg';


//react-redux, action
import { useSelector, useDispatch } from 'react-redux';
import { getDataOfType, refreshData } from '../../Redux/Product/Product.action';

const Bound = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    .product_content {
        margin-top: 5px;
        display: flex;
        width: 1180px;
        height: max-content;
        &_filter {
            width: 24%;
            min-height: 100%;
            height: ${props => props.height >= 5 ? "1900" : props.height * 410}px;
            background-color: #fff;
            border-right: 1px solid rgba(0, 0, 0, .12);
        }
        &_grid {
            width: 76%;
            min-height: 410px;
            height: max-content;
            background-color: #fff;
            &_header {
                display: flex;
                width: 100%;
                height: 48px;
                padding: 0 15px;
                justify-content: space-between;
                border-bottom: 1px solid rgba(0, 0, 0, .12);
                &_sort {
                    margin-left: 30px;
                    display: flex;
                    height: 100%;
                    padding: 0 20px;
                    width: max-content;
                    align-items: center;
                    cursor: pointer;
                    &>span {
                        display: flex;
                        width: 20px;
                        height: 20px;
                        font-size: 12px;
                        font-weight: 500;
                        align-items: center;
                        justify-content: center;
                        text-transform: uppercase;
                    }
                }
                &_icons {
                    display: flex;
                    width: auto;
                    height: 100%;
                    align-items: center;
                    &>span {
                        display: flex;
                        width: 37px;
                        height: 33px;
                        align-items: center;
                        justify-content: center;
                        cursor: pointer;
                    }
                }
            }
            &_panigation {
                margin-bottom: 20px;
                margin-top: 50px;
                display: flex;
                align-items: center;
                justify-content:  center;
                a {
                    text-decoration: none;
                }
                button {
                    cursor: pointer;
                    outline: none;
                    border: none;
                    display: flex;
                    align-items: center;
                    justify-content:  center;
                    background-color: transparent;
                }
                .opacity {
                    opacity: .3;
                }
                .left {
                    margin-right: 5px;
                    border-radius: 25px;
                    transform: rotate(90deg);
                    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                }
                .right {
                    margin-left: 5px;
                    border-radius: 25px;
                    transform: rotate(-90deg);
                    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                }
                & .panigation {
                    display: flex;
                    align-items: center;
                    justify-content:  center;
                    margin: 0 7px;
                    width: 34px;
                    height: 34px;
                    color: #000;
                    padding: 0 5px;
                    font-size: 14px;
                    border-radius: 34px;
                    background-color: #fff;
                    box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
                    &.active {
                        color: #fff;
                        border-color: #2d3877;
                        background-color: #2d3877;
                    }
                }
            }
        }
    }
`

function Products(props) {
    const dispatch = useDispatch();
    const location = useLocation();

    const [data, setData] = useState([]);
    const [total, setTotal] = useState([]);
    const [local, setLocal] = useState(null);
    const [pageNumber, setPageNumber] = useState(location.pathname.split('=')[1]);

    const { ProductReducer } = useSelector(state => ({
        ProductReducer: state.ProductReducer
    }));

    function onClickPageNumber(action) {
        if (action === "pre") {
            setPageNumber(Number(pageNumber) - 1);
        }
        if (action === "next") {
            setPageNumber(Number(pageNumber) + 1);
        }
    }

    useEffect(() => {
        if (window.onload) {
            window.scrollTo(0, 0);
        }
        return () => {
            window.scrollTo(0, 0);
            setPageNumber(location.pathname.split('=')[1]);
        }
    });

    useEffect(() => {
        if (!ProductReducer) return;
        if (!ProductReducer.Products) return;

        setData(ProductReducer.Products.data);
        setTotal(ProductReducer.Products.total);
    }, [ProductReducer]);

    useEffect(() => {

        dispatch(getDataOfType({ type: location.pathname.split('/')[2], pageNumber: pageNumber }));

        setLocal(location.pathname.split('/')[2]);
        return () => dispatch(refreshData());
    }, [dispatch, location, pageNumber]);

    useEffect(() => {
        if (document.getElementById('product')) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1) {
                    document.getElementById('product').style.marginTop = "125px";
                }
                if (window.scrollY === 0) {
                    document.getElementById('product').style.marginTop = "0";
                }
            });
        }
    }, []);

    return (
        <Bound id="product">
            <div className="product_content">
                <div className="product_content_filter" height={data && total / 4 + 1}>

                </div>
                <div className="product_content_grid">
                    <div className="product_content_grid_header">
                        <div className="product_content_grid_header_sort">
                            <span>Giá</span>
                            <span><img width="8" height="8" src={Sort} alt="sort" /></span>
                        </div>
                        <div className="product_content_grid_header_icons">
                            <span><img width="14" height="14" src={GridCol} alt="grid" /></span>
                            <span><img width="14" height="16" src={Grid} alt="grid" /></span>
                        </div>
                    </div>
                    {
                        data && <GridProduct data={data} />
                    }
                    <div className="product_content_grid_panigation">
                        {
                            pageNumber > 1
                                ? <Link to={`${location.pathname.split('=')[0]}=${Number(pageNumber) - 1}`}>
                                    <button onClick={() => onClickPageNumber('pre')}><img className="left" src={arrow_bottom} width="25" height="25" alt="left" /></button>
                                </Link>
                                : <button><img className="left opacity" src={arrow_bottom} width="25" height="25" alt="left" /></button>
                        }
                        {
                            data && data
                                .filter((item, index) => index < (total % 20 === 0 ? (Math.floor(total / 20)) : (Math.floor(total / 20) + 1)))
                                .map((item, index) => <Link key={index} to={`/products/${local}/p=${index + 1}`}>
                                    <button
                                        className={Number(pageNumber) === (index + 1) ? "panigation active" : "panigation"}
                                        onClick={() => setPageNumber(index + 1)}>{index + 1}
                                    </button>
                                </Link>)
                        }
                        {
                            pageNumber < (total % 20 === 0 ? (Math.floor(total / 20)) : (Math.floor(total / 20) + 1))
                                ? <Link to={`${location.pathname.split('=')[0]}=${Number(pageNumber) + 1}`}>
                                    <button onClick={() => onClickPageNumber('next')}><img className="right" src={arrow_bottom} width="25" height="25" alt="right" /></button>
                                </Link>
                                : <button><img className="right opacity" src={arrow_bottom} width="25" height="25" alt="right" /></button>
                        }
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default memo(Products);
