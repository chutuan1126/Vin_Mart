import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { setLocation } from '../../Redux/Location/Location.action';

//icons
import Location from '../../assets/images/icons/location.svg';

const Bound = styled.div`
    width: 400px;
    height: 323px;
    border-radius: 2px;
    background-color: #fff;
    .popup_header {
        font-size: 16px;
        font-weight: 700;
        padding-top: 20px;
        padding-bottom: 20px;
        text-align: center;
        border-bottom: 2px solid #88bbf1;
    }
    .popup_content {
        width: 100%;
        height: max-content;
        span {
            display: flex;
            width: 100%;
            height: 160px;
            align-items: center;
            justify-content: center;
        }
        &_location {
            width: 100%;
            height: 92px;
            a {
                display: flex;
                align-items: center;
                justify-content: center;
                margin: auto;
                margin-bottom: 10px;
                color: #fff;
                width: 90%;
                padding: 6px 16px;
                border-radius: 5px;
                text-decoration: none;
                background-color: rgb(237,28,36);
                box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
            }
        }
    }
`

function Popup({ setIsShowing }) {
    const dispatch = useDispatch();

    function onClickLocation(e) {
        setIsShowing(false);
        dispatch(setLocation(e.target.textContent));
    }
    return (
        <Bound>
            <div className="popup_header">Chọn thành phố của bạn</div>
            <div className="popup_content">
                <span><img src={Location} width={180} height={95} alt="Location" /></span>
                <div className="popup_content_location">
                    <Link onClick={onClickLocation} to="/">HÀ NỘI</Link>
                    <Link onClick={onClickLocation} to="">HỒ CHÍ MINH</Link>
                </div>
            </div>
        </Bound>
    )
}

export default Popup;
