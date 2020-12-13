import React, { useState, useEffect, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';

import styled from 'styled-components';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';

//components
import GridProduct from './GridProduct';

//icons
import Sort from '../../assets/images/icons/sort.svg';
import Grid from '../../assets/images/icons/grid.svg';
import GridCol from '../../assets/images/icons/grid-col.svg';

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
                margin-top: 24px;
                display: flex;
                align-items: center;
                justify-content:  center;
            }
        }
    }
`

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));

function Products({ categorys }) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const location = useLocation();

    const [page, setPage] = useState(parseInt(location.pathname.split('=')[1]));
    const [data, setData] = useState(null);
    const [total, setTotal] = useState(0);

    const { ProductReducer } = useSelector(state => ({
        ProductReducer: state.ProductReducer
    }));

    function handleChange(event, value) {
        setPage(value);
    }

    useEffect(() => {
        if (!ProductReducer) return;
        if (!ProductReducer.SingleProduct) return;
        if (!ProductReducer.SingleProduct.data) return;

        setData(ProductReducer.SingleProduct.data);
        setTotal(ProductReducer.SingleProduct.total);
    }, [ProductReducer]);

    useEffect(() => {
        dispatch(getDataOfType({
            pageNumber: page,
            code: categorys.find(item => item.id === location.pathname.split('/')[2])?.code
        }));

        return () => dispatch(refreshData());
    }, [dispatch, location, page, categorys]);

    useEffect(() => {
        if (document.getElementById('product') === null) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1) {
                    document.getElementById('product').style.marginTop = "125px";
                }
                if (window.scrollY === 0) {
                    document.getElementById('product').style.marginTop = "0";
                }
            }, false);
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
                        <div className={classes.root}>
                            <Pagination
                                color='primary'
                                page={page}
                                size="large"
                                defaultPage={1}
                                onChange={handleChange}
                                count={Math.floor(total / 20) + (total / 20 !== 0 ? 1 : 0)}
                                renderItem={(item) => (
                                    <PaginationItem
                                        component={Link}
                                        to={`${location.pathname.split('=')[0]}=${item.page}`}
                                        {...item}
                                    />
                                )}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default memo(Products);
