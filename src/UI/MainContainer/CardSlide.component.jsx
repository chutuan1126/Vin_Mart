import React, { memo, useState } from 'react';
import styled from 'styled-components';

// import { useDispatch } from 'react-redux';
// import { getCateData } from '../../Redux/Product/Product.action';

//components
import Card from './Card.component';

//icons
import arrow from '../../assets/images/icons/arrow_bottom.svg';

const Bound = styled.div`
    margin: auto;
    width: 1180px;
    height: max-content;
    margin-top: 20px;
    .card_title_main {
        margin: 0;
        padding: 0;
        width: calc(100% - 10px);
        height: 43px;
        color: #f44336;
        font-size: 29px;
        font-weight: 500;
        margin-left: 10px;
    }
    .card_content_main {
        width: 1180px;
        height: 488px;
        padding-bottom: 20px;
        background-color: #fff;
        .card_content_main_carousel {
            position: relative;
            z-index: 0;
            margin: 0 10px;
            height: 420px;
            overflow: hidden;
            overflow-x: scroll;
            ::-webkit-scrollbar {
                display: none;
            }
            .btn_pre,
            .btn_next {
                position: absolute;
                top: 50%;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                background-color: #fff;
                border: 1px solid #e4e4e4;
                box-shadow: 0 0 8px #e4e4e4;
                transition: .3s ease-in-out;
                cursor: pointer;
                z-index: 2;
                &>img {
                    width: 100%;
                    height: 100%;
                }
                &:hover {
                    width: 50px;
                    height: 50px;
                    box-shadow: none;
                    border: 1px solid #000;
                }
            }
            .btn_pre {
                left: -10px;
                transform: rotate(90deg) translate(-50%, -50%);
                &:hover {
                    left: -20px;
                }
            }
            .btn_next {
                right: -10px;
                transform: rotate(-90deg) translate(50%, -50%);
                &:hover {
                    right: -20px;
                }
            }
            &_figure {
                display: grid;
                width: max-content;
                height: 420px;
                padding: 20px 5px;
                grid-column-gap: 10px;
                grid-template-columns: repeat(5, 1fr);
            }
            &_figure.no_carousel_figure {
                width: 100%;
                height: max-content;
                grid-row-gap: 10px;
                grid-template-columns: repeat(5, 1fr);
            }
        }
        .card_content_main_btn {
            display: flex;
            width: 100%;
            height: 48px;
            align-items: center;
            justify-content: center;
            button {
                cursor: pointer;
                outline: none;
                width: 200px;
                height: 38px;
                color: #bd1b1b;
                font-size: 14px;
                font-weight: 500;
                background: #fff;
                border-radius: 2px;
                border: 1px solid #bd1b1b;
            }
        }
    }
    .hAuto {
        height: auto !important;
    }
`

function CardSlide({ data, title, allProduct }) {
    const [pageCarousel, setPageCarousel] = useState(false);

    function loadSubData() {
        setPageCarousel(false);
    }
    function loadAddData() {
        setPageCarousel(true);
    }

    return (
        <Bound>
            <h1 className="card_title_main">{title}</h1>
            <div className={allProduct ? "card_content_main hAuto" : "card_content_main"}>
                {
                    allProduct
                        ? <div className="card_content_main_carousel hAuto">
                            <figure className="card_content_main_carousel_figure no_carousel_figure">
                                {
                                    data && data.filter((item, index) => index < 45)
                                        .map((item, index) => <Card key={index} item={item} />)
                                }
                            </figure>
                        </div>
                        : <div className="card_content_main_carousel">
                            <span className="btn_pre" onClick={loadSubData} page={pageCarousel ? 2 : 1}>
                                <img src={arrow} alt="arrow" />
                            </span>
                            <span className="btn_next" onClick={loadAddData} page={pageCarousel ? 2 : 1}>
                                <img src={arrow} alt="arrow" />
                            </span>
                            <figure className="card_content_main_carousel_figure">
                                {
                                    data && data.filter((item, index) => index < 10)
                                        .map((item, index) => <Card key={index} item={item} />)
                                }
                            </figure>
                        </div>
                }
                <div className="card_content_main_btn">
                    <button>Xem tất cả</button>
                </div>
            </div>
        </Bound>
    )
}

export default memo(CardSlide);
