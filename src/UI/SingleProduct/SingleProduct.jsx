import React, { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

//images, icons
import Cart_Red from '../../assets/images/icons/cart-red.svg';
import priceDesktopBg from '../../assets/images/ImageProducts/price-desktop-bg.jpg';

//react-redux, action
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProduct } from '../../Redux/Product/Product.action';
import { updateCart } from '../../Redux/Cart/Cart.action';

//FormatMoney
import { FormatMoney } from '../../assets/helper/formatMoney';

const Bound = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    .single_product {
        margin-top: 5px;
        margin: 0 auto;
        width: 1180px;
        height: max-content;
        &_title {
            color: #999;
            width: 100%;
            font-size: 13px;
            overflow: hidden;
            white-space: nowrap;
            padding: 4px 0 7px 0;
            text-overflow: ellipsis;
        }
        &_content {
            display: flex;
            width: 100%;
            height: 545px;
            padding: 15px;
            background-color: #fff;
            &_left {
                width: 40%;
                height: 100%;
                padding-right: 15px;
                &_image {
                    margin: 0 auto;
                    display: flex;
                    width: 445px;
                    height: 445px;
                    align-items: center;
                    justify-content: center;
                }
                &_card {
                    width: 455px;
                    height: 70px;
                    overflow: hidden;
                    &_slide {
                        display: grid;
                        width: 455px;
                        height: 70px;
                        grid-gap: 5px;
                        grid-template-columns: repeat(6, 1fr);
                        & .img {
                            width: 70px;
                            height: 70px;
                            cursor: pointer;
                            &:hover {
                                border: 2px solid #d42333;
                            }
                            &>img {
                                width: 100%;
                                height: 100%;
                                padding: 3px;
                            }
                        }
                    }
                }
            }
            &_right {
                display: block;
                width: 60%;
                height: 100%;
                &_one {
                    padding: 10px;
                    line-height: 1.5;
                    color: rgba(0,0,0,.87);
                    font-family: Roboto,sans-serif;
                    &>h1 {
                        width: 100%;
                        font-size: 20px;
                        font-weight: 400;
                    }
                    &>h3 {
                        color: #999;
                        font-size: 13px;
                        margin-top: 5px;
                        font-weight: 500;
                    }
                }
                &_two {
                    width: 100%;
                    height: 92px;
                    padding: 10px;
                    margin-top: 10px;
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-image: url('${priceDesktopBg}');
                    display: grid;
                    grid-row-gap: 15px;
                    grid-template-rows: 50% calc(50% - 15px);
                &>span {
                        display: grid;
                        line-height: 1.5;
                        font-family: Roboto,sans-serif;
                        grid-template-columns: 35% 65%;
                        &>h3 {
                            color: #666;
                            font-size: 13px;
                            font-weight: 500;
                        }
                        &>p {
                            color: #333;
                            font-size: 15px;
                            font-weight: bold;
                        }
                        &:nth-child(1) {
                            border-bottom: 1px solid rgba(0,0,0,.12);
                        }
                    }
                }
                &_three {
                    width: 100%;
                    height: 76px;
                    display: grid;
                    padding: 20px 10px;
                    grid-template-columns: 35% 65%;
                    border-bottom: 1px solid rgba(0,0,0,.12);
                    &>h3 {
                        color: #666;
                        font-size: 13px;
                        font-weight: 500;
                    }
                    &>span {
                        color: #333;
                        font-size: 12px;
                        font-weight: 600;
                    }
                }
                &_four {
                    display: grid;
                    width: 100%;
                    height: 72px;
                    padding: 20px 10px;
                    grid-template-columns: 35% 65%;
                    &>h3 {
                        color: #666;
                        font-size: 13px;
                        font-weight: 500;
                    }
                    &>span {
                        &>button {
                            color: #333;
                            font-size: 18px;
                            font-weight: bold;
                            outline: none;
                            height: 32px;
                            width: 32px;
                            margin: 0;
                            padding: 0;
                            min-width: 32px;
                            border: 1px solid #e8e8e8;
                            cursor: pointer;
                        }
                        &>input {
                            height: 32px;
                            width: 32px;
                            text-align: center;
                        }
                    }
                }
                &_five {
                    padding: 20px 0;
                    display: grid;
                    width: 100%;
                    height: 92px;
                    grid-template-columns: 35% 65%;
                    &>button {
                        cursor: pointer;
                        display: flex;
                        color: #fff;
                        margin: 6px;
                        border: 0;
                        height: 40px;
                        padding: 0 45px;
                        font-weight: bold;
                        align-items: center;
                        justify-content: center;
                        background-color: #d10a00;
                    }
                    &>button:nth-child(2) {
                        border: 1px solid #d10a00;
                        display: flex;
                        width: max-content;
                        height: 40px;
                        color: #d10a00;
                        font-weight: bold;
                        align-items: center;
                        justify-content: center;
                        background-color: #fff;
                        text-transform: uppercase;
                        &>img {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }
    }
`

function SingleProduct() {
    const dispatch = useDispatch();
    const location = useLocation();

    const [value, setValue] = useState(0);
    const [product, setProduct] = useState(null);
    const [imageShow, setImageShow] = useState(null);

    const { ProductReducer, CartReducer } = useSelector(state => ({
        CartReducer: state.CartReducer,
        ProductReducer: state.ProductReducer
    }));

    function onKeyUpEnter(e) {
        const val = e.target.value;
        if (e.keyCode === 13) {
            if (val <= 0) {
                setValue(0);
            } else {
                setValue(val);
            }
        }
    }

    function onChange(e, action) {
        if (action === 'sub') {
            if (value === 0) return;
            setValue(value - 1);
        } else if (action === 'add') {
            setValue(value + 1);
        } else {
            const val = e.target.value;
            setValue(val);
        }
    }

    function onClickAddToCart() {
        dispatch(updateCart(product.id, value));
    }

    useEffect(() => {
        if (!CartReducer) return;
        if (!CartReducer.Cart) return;

        const product = CartReducer.Cart.find(i => toString(i.data.id) === toString(location.pathname.split('/')[2]));
        console.log(product);
        if (product) {
            setValue(product.quantity);
        }
    }, [CartReducer, location]);

    useEffect(() => {
        if (!ProductReducer) return;
        if (!ProductReducer.DetailProduct) return;

        setProduct(ProductReducer.DetailProduct);
        setImageShow(ProductReducer.DetailProduct?.images[0]?.url);
    }, [ProductReducer]);

    useEffect(() => {
        !product && dispatch(getSingleProduct(location.pathname.split('/')[2]));
    }, [dispatch, location, product]);

    return (
        <Bound>
            <div className="single_product">
                <h3 className="single_product_title">Trang chủ 	&gt; {product?.name}</h3>
                <div className="single_product_content">
                    <div className="single_product_content_left">
                        <div className="single_product_content_left_image">
                            <img src={imageShow} width="450" alt="Single Product" />
                        </div>
                        <div className="single_product_content_left_card">
                            <div className="single_product_content_left_card_slide">
                                {product && product?.images.map((item, key) => (
                                    <span key={key} className="img" onMouseEnter={() => setImageShow(item.url)}>
                                        <img src={item.url} width="70" height="70" alt="Single Product" />
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="single_product_content_right">
                        <div className="single_product_content_right_one">
                            {product && <h1>{product?.name}</h1>}
                            <h3>SKU: {product?.sku}</h3>
                        </div>
                        <div className="single_product_content_right_two">
                            <span>
                                <h3>Giá bán lẻ</h3>
                                <p>{FormatMoney(product?.price?.sellPrice)}</p>
                            </span>
                            <span>
                                <h3>Tình trạng sản phẩm</h3>
                                <p>Còn hàng tại <b style={{ color: '#f44336' }}>Hà Nội,TP. Hồ Chí Minh</b></p>
                            </span>
                        </div>
                        <div className="single_product_content_right_three">
                            <h3>Vận chuyển</h3>
                            <span>
                                <p>Giao hàng nhanh 2h trong nội thành (đặt trước 17:00)</p>
                                <p>Chỉ giao hàng trong thành phố Hà Nội, Hồ Chí Minh</p>
                            </span>
                        </div>
                        <div className="single_product_content_right_four">
                            <h3>Chọn số lượng</h3>
                            <span>
                                <button onClick={(e) => onChange(e, 'sub')}>-</button>
                                <input type="text" name="count" onChange={onChange} onKeyUp={onKeyUpEnter} value={value} />
                                <button onClick={(e) => onChange(e, 'add')}>+</button>
                            </span>
                        </div>
                        <div className="single_product_content_right_five">
                            <button onClick={onClickAddToCart}>mua ngay</button>
                            <button onClick={onClickAddToCart}>
                                <img src={Cart_Red} alt="cart" />
                                <span>thêm vào giỏ hàng</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default memo(SingleProduct);
