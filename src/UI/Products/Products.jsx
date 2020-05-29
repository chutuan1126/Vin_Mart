import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

//components
import Card from '../MainContainer/Card.component';

//icons
import Sort from '../../assets/images/icons/sort.svg';
import Grid from '../../assets/images/icons/grid.svg';
import GridCol from '../../assets/images/icons/grid-col.svg';

//react-redux, action
import { useSelector, useDispatch } from 'react-redux';
import { getDataHome, refreshData } from '../../Redux/Product/Product.action';

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
            &_cards {
                display: grid;
                width: 100%;
                height: calc(100% - 48px);
                gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(4, 1fr);
            }
        }
    }
`

function Products() {
    const dispatch = useDispatch();

    const [data, setData] = useState([]);

    const { ProductReducer } = useSelector(state => ({
        ProductReducer: state.ProductReducer
    }));

    useEffect(() => {
        if (!ProductReducer) return;
        if (!ProductReducer.Products) return;

        setData(ProductReducer.Products);
    }, [ProductReducer]);
    console.log(ProductReducer);

    useEffect(() => {
        dispatch(getDataHome({ page: 1, pageNumber: 5 }));

        return () => dispatch(refreshData());
    }, [dispatch]);


    useEffect(() => {
        if (document.getElementById('products')) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1) {
                    document.getElementById('products').style.marginTop = "125px";
                }
                if (window.scrollY === 0) {
                    document.getElementById('products').style.marginTop = "0";
                }
            });
        }
    }, []);

    return (
        <Bound id="products">
            <div className="product_content">
                <div className="product_content_filter" height={data && data.length / 4 + 1}>

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
                    <div className="product_content_grid_cards">
                        {
                            data && data
                                .filter((item, index) => index < 20)
                                .map((item, index) => <Card key={index} width="202px" item={item} />)
                        }
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default Products;
