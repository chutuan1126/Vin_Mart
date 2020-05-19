import React from 'react';
import styled from 'styled-components';

//components
import Card from './Card.component';

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
            margin: 0 10px;
            height: 420px;
            overflow: hidden;
            overflow-x: scroll;
            ::-webkit-scrollbar {
                display: none;
            }
            &_figure {
                display: grid;
                width: max-content;
                height: 420px;
                padding: 20px 5px;
                grid-column-gap: 10px;
                grid-template-columns: repeat(10, 1fr);
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
                        : <div className="card_content_main_carousel ">
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

export default CardSlide;
