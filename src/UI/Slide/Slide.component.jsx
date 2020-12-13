import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const images = {
    1: require('../../assets/images/sale/sale_image_1.jpg'),
    2: require('../../assets/images/sale/sale_image_2.png'),
    3: require('../../assets/images/sale/sale_image_3.png'),
    4: require('../../assets/images/sale/sale_image_4.png'),
    5: require('../../assets/images/sale/sale_image_5.png'),
    6: require('../../assets/images/sale/sale_image_6.png'),
    7: require('../../assets/images/sale/sale_image_7.png'),
}

const Bound = styled.div`
    width: 100%;
    height: max-content;
    .slide-wrapper {
        position: relative;
        margin: auto;
        width: 1180px;
        height: 400px;
        margin-top: 5px;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .arrow-left, .arrow-right {
            position: absolute;
            z-index: 10;
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
        .slide_container {
            position: absolute;
            display: flex;
            top: 0;
            width: 100%;
            height: 100%;
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
    const [image, setImage] = useState(1);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (image >= 7 || image <= 0) setImage(1);
            else setImage(image + 1);
        }, 2000);
        return () => clearTimeout(timer);
    });

    useEffect(() => {
        if (document.getElementById('slide') === null) {
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 1) {
                    document.getElementById('slide').style.marginTop = "125px";
                }
                if (window.scrollY === 0) {
                    document.getElementById('slide').style.marginTop = "0";
                }
            });
        }
    }, []);
    
    return (
        <Bound id="slide">
            <div className="slide-wrapper">
                <span className="arrow-left">
                    <i className="arrow-left-icon"></i>
                </span>
                <span className="arrow-right">
                    <i className="arrow-right-icon"></i>
                </span>
                <div style={{ left: `-${image * 100 - 100}%`, transition: image !== 1 ? 'all 1s ease 0s' : 'none' }} className="slide_container">
                    {Object.keys(images).map((item, key) => (
                        <img key={key} src={images[item]} alt="slide images" />
                    ))}
                </div>
            </div>
            <div className="btn-slide">
                <span>Bạn cứ ngồi yên, VinMart sẽ tới!</span>
            </div>
        </Bound >
    )
}

export default Slide;
