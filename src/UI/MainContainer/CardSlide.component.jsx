import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
        position: relative;
        width: 1180px;
        height: 488px;
        padding-bottom: 20px;
        background-color: #fff;
        .btn_pre,
        .btn_next {
            position: absolute;
            top: 200px;
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
        .card_content_main_carousel {
            position: relative;
            z-index: 0;
            margin: 0 10px;
            height: 420px;
            overflow: hidden;
            ::-webkit-scrollbar {
                display: none;
            }
            &_figure {
                position: relative;
                top: 0;
                left: 0;
                display: grid;
                width: max-content;
                height: 420px;
                padding: 20px 5px;
                grid-column-gap: 10px;
                transition: .3s ease-in-out;
                grid-template-columns: ${props => props.dataSlide === 10 ? "repeat(10, 1fr)" : "repeat(5, 1fr)"};
                &.next {
                    left: -1160px;
                }
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

function CardSlide({ data, type, title, allProduct }) {
    const [dataSlide, setDataSlide] = useState(5);
    const [nextShow, setNextShow] = useState(true);

    function onPreNext(action) {
        if (action === "next") {
            dataSlide === 5 && setDataSlide(10);
            setNextShow(false);
        } else {
            setNextShow(true);
        }
    }

    return (
        <Bound dataSlide={dataSlide} nextShow={nextShow}>
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
                        : <React.Fragment>
                            {
                                nextShow === false
                                ? <span className="btn_pre" onClick={() => onPreNext('pre')}>
                                    <img src={arrow} alt="pre" />
                                </span>
                                : <span className="btn_next" onClick={() => onPreNext('next')}>
                                    <img src={arrow} alt="next" />
                                </span>
                            }
                            <div className="card_content_main_carousel">
                                <figure id="scroll" className={!nextShow ? "card_content_main_carousel_figure next" : "card_content_main_carousel_figure"}>
                                    {
                                        data && data.filter((item, index) => index < dataSlide)
                                            .map((item, index) => <Card key={index} item={item} />)
                                    }
                                </figure>
                            </div>
                        </React.Fragment>
                }
                <div className="card_content_main_btn">
                    <Link to={`/products/${type}/p=1`}><button>Xem tất cả</button></Link>
                </div>
            </div>
        </Bound>
    )
}

export default React.memo(CardSlide);
