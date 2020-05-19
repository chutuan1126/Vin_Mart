import React from 'react';
import styled from 'styled-components';

const Bound = styled.div`
    margin-top: 125px;
    width: 100%;
    height: max-content;
    .slide-wrapper {
        position: relative;
        margin: auto;
        width: 1180px;
        height: 400px;
        margin-top: 5px;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .arrow-left, .arrow-right {
            position: absolute;
            top: 50%;
            width: 24px;
            height: 40px;
            transform: translateY(-50%);
            background-color: rgba(0,0,0,.2);
            cursor: pointer;
            &:hover {
                background-color: rgba(0,0,0,.5);
            }
        }
        .arrow-left {
            left: 0;
            &:hover .arrow-left-icon {
                border-top: 3px solid rgba(255,255,255,.8);
                border-left: 3px solid rgba(255,255,255,.8);
            }
        }
        .arrow-right {
            right: 0;
            &:hover .arrow-right-icon {
                border-top: 3px solid rgba(255,255,255,.8);
                border-right: 3px solid rgba(255,255,255,.8);
            }
        }
        
        .arrow-left-icon, .arrow-right-icon {
            position: absolute;
            top: 50%;
            width: 15px;
            height: 15px;
            box-sizing: border-box;
        }
        .arrow-left-icon {
            left: 7px;
            transform: translateY(-50%) rotate(-45deg);
            border-top: 3px solid rgba(255,255,255,.5);
            border-left: 3px solid rgba(255,255,255,.5);
        }
        .arrow-right-icon {
            right: 7px;
            transform: translateY(-50%) rotate(45deg);
            border-top: 3px solid rgba(255,255,255,.5);
            border-right: 3px solid rgba(255,255,255,.5);
        }
    }
    .btn-slide {
        display: flex;
        margin: auto;
        width: 1180px;
        height: 55px;
        margin-top: 1px;
        background: #eaeaea;
        align-items: center;
        justify-content: center;
        border-top: 2px solid #d42333;
        span {
            white-space: initial;
            font-size: 16px;
            font-weight: 500;
            color: rgba(0,0,0,.87);
        }
    }
`

function Slide() {
    return (
        <Bound>
            <div className="slide-wrapper">
                <span className="arrow-left">
                    <i className="arrow-left-icon"></i>
                </span>
                <span className="arrow-right">
                    <i className="arrow-right-icon"></i>
                </span>
                <img src="https://storage.googleapis.com/teko-gae.appspot.com/media/image/2020/4/20/20200420_f271e38f-3649-45e1-aa2e-387943eec7fe.jpe" alt="slide images" />
            </div>
            <div className="btn-slide">
                <span>Bạn cứ ngồi yên, VinMart sẽ tới!</span>
            </div>
        </Bound >
    )
}

export default Slide;
