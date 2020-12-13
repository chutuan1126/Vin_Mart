import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import makeStyles from '@material-ui/core/styles/makeStyles';

//components
import CardItem from '../MainContainer/CardItem.component';

//react-redux, action
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../Redux/Cart/Cart.action';
import { refreshData } from '../../Redux/Product/Product.action';

// FormatMoney
import { FormatMoney } from '../../assets/helper/formatMoney';

const Bound = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    min-height: calc(100vh - 120px);
    .wrapper {
        display: flex;
        width: 1180px;
        height: auto;
        justify-content: center;
    }
    .container_list {
        width: 75%;
        height: 100%;
        margin: 10px;
        &_top {
            margin-bottom: 10px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            a {
                text-decoration: none;
            }
        }
        &_cart {
            width: 100%;
            &>div {
                margin-bottom: 10px;
            }
        }
    }
    .container_payment {
        display: flex;
        width: 25%;
        height: 100%;
        margin: 5px;
        justify-content: center;
        &_detail {
            padding: 20px 15px;
            width: 100%;
            height: max-content;
            background-color: #fff;
            &_one {
                display: flex;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 15px;
                color: rgba(0, 0, 0, .87);
                font-family: Roboto,sans-serif;
                justify-content: space-between;

            }
            &_two {
                display: flex;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 15px;
                color: rgba(0, 0, 0, .87);
                font-family: Roboto,sans-serif;
                justify-content: space-between;
                
            }
            &_three {
                margin-bottom: 15px;
                input {
                    width: 100%;
                    padding: 10px;
                    font-size: 14px;
                    background: #fff;
                    text-align: center;
                    border-radius: 3px;
                    border: 1px solid #8f8f8f;
                    text-transform: uppercase;
                }
            }
            &_four {
                display: flex;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 15px;
                color: rgba(0, 0, 0, .87);
                font-family: Roboto,sans-serif;
                justify-content: space-between;
                
            }
            &_five {
                display: flex;
                font-size: 14px;
                font-weight: 500;
                line-height: 1.5;
                margin-bottom: 15px;
                color: rgba(0, 0, 0, .87);
                font-family: Roboto,sans-serif;
                justify-content: space-between;
            }
            &_six {
                font-size: 13px;
                font-style: italic;
                font-weight: lighter;
                margin-bottom: 15px;
                text-align: right;
            }
            &_seven>a {
                text-decoration: none;
            }
        }
    }
`
const useStyles = makeStyles(() => ({
    styleButton: {
        backgroundColor: 'rgb(212, 35, 51)',
        color: '#fff',
        width: '100%',
        fontSize: 16,
        padding: '5px 0',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Roboto,sans-serif',
        '&:hover': {
            backgroundColor: 'rgba(212, 35, 51, .8)',
        }
    },
    buyContinue: {
        backgroundColor: 'rgb(212, 35, 51)',
        color: '#fff',
        fontSize: 16,
        padding: '5px 20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Roboto,sans-serif',
        '&:hover': {
            backgroundColor: 'rgba(212, 35, 51, .8)',
        }
    },
    clearCart: {
        backgroundColor: 'rgb(170, 170, 170)',
        color: '#fff',
        fontSize: 16,
        padding: '5px 20px',
        textAlign: 'center',
        textTransform: 'uppercase',
        fontFamily: 'Roboto,sans-serif',
        '&:hover': {
            backgroundColor: 'rgba(170, 170, 170, .8)',
        }
    }
}));

function CartPage({ categorys }) {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [value, setValue] = useState('');
    const [carts, setCarts] = useState(null);

    const { CartReducer } = useSelector(state => ({
        CartReducer: state.CartReducer
    }));

    function onClick() {
        dispatch(clearCart());
    }

    function onChange(e) {
        const val = e.target.value;
        setValue(val);
    }

    function totalMoney() {
        let sum = 0;
        if (carts) {
            for (let i = 0; i < carts.length; i++) {
                sum += Number(carts[i].data.price?.sellPrice) * Number(carts[i]?.quantity);
            }
        };

        return sum;
    }

    useEffect(() => {
        if (!CartReducer) return;
        if (!CartReducer.Cart) return;
        setCarts(CartReducer.Cart);
    }, [CartReducer]);

    useEffect(() => {
        return () => dispatch(refreshData());
    }, [dispatch]);

    useEffect(() => {
        if (document.getElementById('cart') === null) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1) {
                    document.getElementById('cart').style.marginTop = "125px";
                }
                if (window.scrollY === 0) {
                    document.getElementById('cart').style.marginTop = "0";
                }
            }, false);
        }
    }, []);

    return (
        <Bound id='cart'>
            <div className='wrapper'>
                <div className='container_list'>
                    <div className='container_list_top'>
                        <Link to='/'>
                            <Button className={classes.buyContinue} variant="contained">tiếp tục mua hàng</Button>
                        </Link>
                        <Button className={classes.clearCart} onClick={onClick} variant="contained">xóa giỏ hàng</Button>
                    </div>
                    <div className='container_list_cart'>
                        {carts?.map((item, key) => (
                            <CardItem key={key} item={item?.data} quantity={item?.quantity} />
                        ))}
                    </div>
                </div>
                <div className='container_payment'>
                    <div className='container_payment_detail'>
                        <div className='container_payment_detail_one'>
                            <span>Tạm tính:</span>
                            <span>{FormatMoney(totalMoney())}đ</span>
                        </div>
                        <div className='container_payment_detail_two'>
                            <span>Khuyến mãi + Chiết Khấu 1%:</span>
                            <span>{-FormatMoney(Math.round(totalMoney() * 10) / 1000)}đ</span>
                        </div>
                        <div className='container_payment_detail_three'>
                            <input type='text' onChange={onChange} value={value} placeholder='NHẬP MÃ GIẢM GIÁ TẠI ĐÂY' />
                        </div>
                        <div className='container_payment_detail_four'>
                            <span>Phí vận chuyển:</span>
                            <span>28.000đ</span>
                        </div>
                        <div className='container_payment_detail_five'>
                            <span>Thành tiền:</span>
                            <span>{FormatMoney(totalMoney() - (Math.round(totalMoney() * 10) / 1000) + 28000)}đ</span>
                        </div>
                        <div className='container_payment_detail_six'>
                            <span>(Đã bao gồm VAT)</span>
                        </div>
                        <div className='container_payment_detail_seven'>
                            <Link to='/login'>
                                <Button className={classes.styleButton} variant="contained">THANH TOÁN</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default React.memo(CartPage);