import React, { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//icons
import Logo_Big from '../../assets/images/icons/logo_1.svg';
import Cart_icon from '../../assets/images/icons/cart.svg';
import Search from '../../assets/images/icons/search.svg';
import Support from '../../assets/images/icons/support.svg';
import Mail_Box from '../../assets/images/icons/mailbox.svg';
import Menu_Bars from '../../assets/images/icons/menu_bars.svg';
import User_Circle from '../../assets/images/icons/user-circle.svg';
import Arrow_Bottom from '../../assets/images/icons/arrow_bottom.svg';

//components
import MenuBars from './MenuBars.component';
import Modal from '../Modal/Modal';

//react-redux
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../Redux/Cart/Cart.action';

//FormatMoney
import { FormatMoney } from '../../assets/helper/formatMoney';

import Popup from '../Modal/Popup';
import CardSmall from './CardSmall';
import CardSP from './CardSP';

const Bound = styled.div`
    position: static;
    top: 0;
    width: 100%;
    height: 120px;
    z-index: 8888;
    .header_info {
        height: 80px;
        background-color: #ed1c24;
        transition: .2s ease-in-out;
        &_top {
            width: 1180px;
            height: 100%;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            &_logo {
                width: auto;
                height: 58px;
                transition: .2s ease-in-out;
                img {
                    width: auto;
                    height: 100%;
                }
            }
            &_search {
                width: 484px;
                height: 40px;
                input {
                    border: 0;
                    width: 100%;
                    height: 100%;
                    font-size: 12px;
                    border-right: 0;
                    font-family: Roboto, sans-serif;
                    background: #fff;
                    border-radius: 2px;
                    box-sizing: border-box;
                    padding: 5px 40px 5px 15px;
                    background-image: url('${Search}');
                    background-position: calc(100% - 7px) 50%;
                    background-repeat: no-repeat;
                    background-size: 36px;
                }
            }
            &_cate_sub {
                display: flex;
                width: 150px;
                height: 40px;
                cursor: pointer;
                &>img {
                    width: 40px;
                    height: 40px;
                    padding: 7px 7px;
                    border-radius: 40px;
                    object-fit: auto;
                    box-sizing: border-box;
                }
                &>span {
                    padding: 4px 0;
                    &>p {
                        display: block;
                        color: #fff;
                        font-size: 13px;
                        font-weight: bold;
                        line-height: 16px;
                    }
                }
                &>a {
                    padding: 4px 0;
                    text-decoration: none;
                    &>p {
                        display: block;
                        color: #fff;
                        font-size: 13px;
                        font-weight: bold;
                        line-height: 16px;
                        text-decoration: none;
                        box-sizing: border-box;
                    }
                }
            }
            .cart {
                display: block;
                color: #fff;
                margin: 0;
                padding: 0;
                font-size: 13px;
                line-height: 16px;
                text-decoration: none;
                box-sizing: border-box;
            }
            &_cate_sub.sub_two {
                position: relative;
                padding: 10px 0;
                box-sizing: content-box;
                &:hover .box_cart {
                    display: block;
                }
                .box_cart {
                    display: none;
                    position: absolute;
                    color: #333;
                    top: 55px;
                    left: -245px;
                    width: 320px;
                    max-height: 400px;
                    height: max-content;
                    background-color: #fff;
                    box-shadow: 0 0 10px 0 #bbb;
                    z-index: 9999;
                    ::before {
                        content: "";
                        position: absolute;
                        top: -20px;
                        right: 45px;
                        width: 0;
                        height: 0;
                        border: 10px solid transparent;
                        border-bottom: 10px solid #fff;
                    }
                    &_main {    
                        overflow: hidden;
                        overflow-y: scroll;
                        width: 100%;
                        min-height: 90px;
                        max-height: 260px;
                        height: max-content;
                        padding: 5 0;
                        ::-webkit-scrollbar {
                            width: 5px;
                        }
                        ::-webkit-scrollbar-track {
                            background: #fff; 
                        }
                        ::-webkit-scrollbar-thumb {
                            background: #d42333; 
                        }
                    }
                    &_total {
                        display: flex;
                        color: #666;
                        padding: 5px 15px;
                        font-size: 12px;
                        line-height: 1.25;
                        align-items: center;
                        justify-content: space-between;
                        font-family: Roboto, sans-serif;
                        b {
                            color: #d42333;
                        }
                    }
                    &_btn {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        button:nth-child(1) {
                            cursor: pointer;
                            display: block;
                            color: #d42333;
                            outline: none;
                            margin: 5px;
                            font-size: 13px;
                            padding: 4px 30px;
                            background-color: #fff;
                            border: 1px solid #d42333;
                        }
                        button:nth-child(2) {
                            cursor: pointer;
                            display: block;
                            outline: none;
                            border: none;
                            margin: 5px;
                            color: #fff;
                            font-size: 13px;
                            padding: 5px 30px;
                            background: #d42333;
                        }
                    }
                }
            }
        }
    }
    .header_menubars {
        position: relative;
        display: flex;
        height: 40px;
        padding: 0 2px;
        align-items: center;
        background-color: #f1f0f1;
        justify-content: space-between;
        box-shadow: 0 2px 1px -1px rgba(0, 0, 0, .25);
        &_bottom {
            display: flex;
            margin: auto;
            width: 1180px;
            align-items: center;
            justify-content: space-between;
            &_left {
                position: relative;
                &:hover .list_items {
                    display: block;
                    box-shadow: 0px 4px 40px rgba(0, 0, 0, 0.2);
                }
            }
            &_right {
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            &_left, &_right_title {
                padding: 10px;
                font-size: 12px;
                font-weight: 500;
                text-transform: none;
                display: flex;
                align-items: center;
                cursor: pointer;
                img {
                    margin-right: 7px;
                }
            }
        }
        .show_watched {
            position: absolute;
            display: flex;
            top: 40px;
            left: 0;
            right: 0;
            width: 100%;
            height: 142px;
            background: #fff;
            align-items: center;
            justify-content: center;
            box-shadow: 0 0 10px 0 #bbb;
            &_container {
                overflow: hidden;
                overflow-x: scroll;
                width: 1180px;
                height: 100%;
                ::-webkit-scrollbar {
                    display: none;
                }
                &_wrapper {
                    display: flex;
                    width: max-content;
                }
            }
        }
    }
`

function Header() {
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);
    const [login, setLogin] = useState(null);
    const [newItem, setNewItem] = useState('');
    const [isShowing, setIsShowing] = useState(true);
    const [toggleShow, setToggleShow] = useState(false);

    const { CartReducer, LocationReducer } = useSelector(state => ({
        CartReducer: state.CartReducer,
        LocationReducer: state.LocationReducer
    }));

    function onChangeSearch(e) {
        setNewItem(e.target.value.trim());
    }

    function onClickSetLocation() {
        setIsShowing(true);
    }
    function totalMoney() {
        let sum = 0;
        if (CartReducer && CartReducer.Cart) {
            for (let i = 0; i < CartReducer.Cart.length; i++) {
                sum += Number(CartReducer.Cart[i].productId.price) * Number(CartReducer.Cart[i].quantity);
            }
        };

        return sum;
    }

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch]);

    useEffect(() => {
        if (!LocationReducer) return;
        if (!LocationReducer.Location) return;

        setIsShowing(false);
        setLogin(LocationReducer.Facebook);
    }, [LocationReducer]);

    useEffect(() => {
        if (!CartReducer) return;
        if (!CartReducer.Cart) return;
        setCount(CartReducer.Cart.length);
    }, [CartReducer]);


    useEffect(() => {
        if (document.getElementById('header')) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1) {
                    document.getElementById('header').style.position = "fixed";
                }
                if (window.scrollY === 0) {
                    document.getElementById('header').style.position = "static";
                }
                if (window.scrollY >= 475) {
                    document.getElementById('img').style.height = "38px";
                    document.getElementById('navId').style.height = "50px";
                }
                if (window.scrollY <= 475) {
                    document.getElementById('img').style.height = "58px";
                    document.getElementById('navId').style.height = "80px";
                }
            });
        }
    }, []);

    return (
        <Bound id="header">
            <Modal isShowing={isShowing} content={<Popup setIsShowing={setIsShowing} />} />
            <div id="navId" className="header_info">
                <div className="header_info_top">
                    <Link id="img" className="header_info_top_logo" to="/">
                        <img src={Logo_Big} alt="Logo" />
                    </Link>
                    <span className="header_info_top_search">
                        <input
                            type="text"
                            placeholder="Nhập tên sản phẩm, mã sản phẩm, từ khóa cần tìm..."
                            onChange={onChangeSearch}
                            value={newItem} />
                    </span>
                    <div className="header_info_top_cate_sub">
                        {
                            login
                                ? <React.Fragment>
                                    <img src={login.userFace} height="40" alt="User_Circle" />
                                    <span>
                                        <p>{login.userName}</p>
                                        <p>Đăng xuất</p>
                                    </span>
                                </React.Fragment>
                                : <React.Fragment>
                                    <img src={User_Circle} height="40" alt="User_Circle" />
                                    <Link to="/login" >
                                        <p>Đăng nhập</p>
                                        <p>Đăng ký</p>
                                    </Link>
                                </React.Fragment>
                        }
                    </div>
                    <div className="header_info_top_cate_sub sub_two">
                        <img src={Cart_icon} height="40" alt="Cart" />
                        <span>
                            <span className="cart">Giỏ hàng của bạn</span>
                            <span className="cart"><b>({count}) sản phẩm</b></span>
                        </span>
                        {
                            CartReducer && CartReducer.Cart.length !== 0 && <div className="box_cart">
                                <div className="box_cart_main">
                                    {
                                        CartReducer.Cart.map((item, index) => <CardSP key={index} item={item} />)
                                    }
                                </div>
                                <div className="box_cart_total">
                                    <span>Có tổng số {CartReducer.Cart.length} sản phẩm</span>
                                    <span>Tổng tiền: <b>{FormatMoney(totalMoney())}đ</b></span>
                                </div>
                                <div className="box_cart_btn">
                                    <button>Xem chi tiết</button>
                                    <button>Thanh toán ngay</button>
                                </div>
                            </div>
                        }
                    </div>
                    <div className="header_info_top_cate_sub">
                        <span onClick={onClickSetLocation}>
                            <span className="cart">Khu vực giao hàng</span>
                            <span className="cart"><b>{LocationReducer.Location}</b></span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="header_menubars">
                <div className="header_menubars_bottom">
                    <div className="header_menubars_bottom_left">
                        <img src={Menu_Bars} width="20" height="20" alt="Menu_Bars" />Danh mục sản phẩm
                        <MenuBars />
                    </div>
                    <div className="header_menubars_bottom_right">
                        <span className="header_menubars_bottom_right_title" onClick={() => setToggleShow(!toggleShow)}>
                            <img src={Arrow_Bottom} width="16" height="16" alt="Arrow_Bottom" />Sản phẩm vừa xem</span>
                        <span className="header_menubars_bottom_right_title">
                            <img src={Mail_Box} width="20" height="20" alt="Mail_Box" />Tin Tức Vinmart</span>
                        <span className="header_menubars_bottom_right_title">
                            <img src={Support} width="20" height="20" alt="Support" />Tư vấn mua hàng</span>
                    </div>
                </div>
                {
                    toggleShow && <div className="show_watched">
                        <div className="show_watched_container">
                            <div className="show_watched_container_wrapper">
                                {
                                    <CardSmall />
                                }
                            </div>
                        </div>
                    </div>
                }
            </div>
        </Bound>
    )
}

export default memo(Header);
