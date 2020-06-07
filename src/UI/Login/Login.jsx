import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';
import styled from 'styled-components';

//react-redux, action
import { useDispatch } from 'react-redux';
import { setLoginFacebook } from '../../Redux/Location/Location.action';

//icons
import Back from '../../assets/images/icons/back.svg';
import Logo from '../../assets/images/icons/logo_red.svg';
import Phone from '../../assets/images/icons/phone.svg';
import Google from '../../assets/images/icons/G-google.svg';
import Facebook from '../../assets/images/icons/facebook.svg';

//components
import CustomInput from '../Customs/CustomInput.component';
import CustomButton from '../Customs/CustomButton.component';

const Bound = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    padding: 12px;
    align-items: center;
    background-size: 100%;
    justify-content: center;
    background-color: #f0f8ff;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg');
    .login_container {
        color: rgba(0, 0, 0, 0.87);
        position: relative;
        padding: 32px;
        width: 420px;
        height: max-content;
        line-height: 1.5;
        border-radius: 4px;
        text-align: center;
        background-color: #fff;
        font-variant: tabular-nums;
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: 0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
        &_logo {
            width: 100%;
            position: relative;
            &_back {
                position: absolute;
                display: flex;
                top: 0;
                left: 0;
                width: 35px;
                height: 30px;
                align-items: center;
                justify-content: center;
                cursor: pointer;
            }
            &>img {
                margin-bottom: 25px;
            }
            &>h1 {
                font-size: 1.5rem;
                font-weight: 500;
                line-height: 1.334;
                letter-spacing: 0em;
                margin-bottom: 36px;
                font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            }
        }
        &_signin {
            &_google, &_facebook, &_numberphone {
                position: relative;
                margin-bottom: 12px;
                display: flex;
                width: 100%;
                height: 40px;
                font-size: 15px;
                font-weight: 400;
                padding: 7px 21px;
                border-radius: 4px;
                color: rgba(0, 0, 0, 0.87);
                background-color: transparent;
                border: 1px solid rgba(0, 0, 0, 0.23);
                cursor: pointer;
                &>img {
                    margin-right: 20px;
                }
                &>span {
                    height: 24px;
                    display: flex;
                    align-items: center;
                }
                &:hover {
                    background-color: rgba(0, 0, 0, 0.04);
                }
                &_fafafacebook {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 40px;
                    border: none;
                    padding: 0 65px;
                    font-size: 15px;
                    font-weight: 400;
                    text-align: left;
                    color: rgba(0, 0, 0, 0.87);
                    background-color: transparent;
                }
            }
        }
        &_or {
            position: relative;
            margin-top: 24px;
            margin-bottom: 24px;
            height: 21px;
            display: flex;
            align-items: center;
            justify-content: center;
            &_border {
                width: 100%;
                height: 1px;
                background-color: rgba(0, 0, 0, 0.23);
            }
            &_or {
                position: absolute;
                color: grey;
                top: 50%;
                left: 50%;
                padding: 0 12px;
                font-weight: 600;
                width: max-content;
                background-color: #fff;
                transform: translate(-50%, -50%);
            }
        }
        &_input {
            width: 100%;
            height: max-content;
        }
        &_qmk {
            display: block;
            color: #20a8d8;
            width: 100%;
            text-align: right;
            font-size: 14px;
            font-weight: 400;
            line-height: 1.43;
            letter-spacing: 0.01071em;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            cursor: pointer;
            &.tac {
                text-align: center;
            }
        }
        &_signup {
            margin-bottom: 12px;
            text-align: center;
            display: block;
            color: #20a8d8;
            width: 100%;
            font-size: 16px;
            font-weight: 400;
            line-height: 1.43;
            letter-spacing: 0.01071em;
            font-family: "Roboto", "Helvetica", "Arial", sans-serif;
            cursor: pointer;
            &.tar {
                text-align: right;
            }
            &:hover {
                color: #167495;
            }
        }
    }
`

function Login() {
    const dispatch = useDispatch();

    const [status, setStatus] = useState('login');
    const [login, setLogin] = useState({
        email: '',
        password: ''
    });

    function onClick(action) {
        setStatus(action);
    }

    function onChangeEmail(e) {
        const value = e.target.value.trim();
        if (value) {
            setLogin({
                ...login,
                email: value
            });
        } else {
            setLogin({
                ...login,
                email: ''
            });
        }
    }

    function onChangePassword(e) {
        const value = e.target.value.trim();
        if (value) {
            setLogin({
                ...login,
                password: value
            });
        } else {
            setLogin({
                ...login,
                password: ''
            });
        }
    }

    function handleKeyUp(e) {
        if (e.keyCode === 13) {
            dispatch(setLoginFacebook(login));
        }
    }
    function onClickSubmit() {
        dispatch(setLoginFacebook(login));
    }

    return (
        <Bound>
            <div className="login_container">
                <div className="login_container_logo">
                    {
                        status === "phone"
                        && <span className="login_container_logo_back" onClick={() => setStatus('login')}>
                            <img src={Back} width="24" height="24" alt="back" />
                        </span>
                    }
                    <img src={Logo} height="72" alt="Logo" />
                    <h1>{status === "register" ? "Tạo tài khoản" : "Đăng nhập"}</h1>
                </div>
                {
                    status === "login"
                        ? <React.Fragment>
                            <div className="login_container_signin">
                                <button className="login_container_signin_google">
                                    <img src={Google} width="24" height="24" alt="google" />
                                    <span>Đăng nhập với Google</span>
                                </button>
                                <button className="login_container_signin_facebook">
                                    <img src={Facebook} width="24" height="24" alt="facebook" />
                                    <span>Đăng nhập với Facebook</span>
                                </button>
                                <button className="login_container_signin_numberphone" onClick={() => onClick('phone')}>
                                    <img src={Phone} width="24" height="24" alt="phone" />
                                    <span>Đăng nhập với Số điện thoại</span>
                                </button>
                            </div>
                            <div className="login_container_or">
                                <span className="login_container_or_border"></span>
                                <span className="login_container_or_or">Hoặc</span>
                            </div>
                            <div className="login_container_input">
                                <CustomInput
                                    id="usename"
                                    type="text"
                                    name="usename"
                                    value={login.email}
                                    handleChange={onChangeEmail}
                                    label="Email hoặc Số điện thoại" />
                                <CustomInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    label="Mật khẩu"
                                    value={login.password}
                                    handleKeyUp={handleKeyUp}
                                    handleChange={onChangePassword} />
                            </div>
                            <span className="login_container_qmk">Quên mật khẩu ?</span>
                            <CustomButton type="button" handleClick={onClickSubmit}>Đăng nhập</CustomButton>
                            <span className="login_container_signup" onClick={() => onClick('register')}>Tạo tài khoản</span>
                        </React.Fragment>
                        : status === "register"
                            ? <React.Fragment>
                                <div className="login_container_or">
                                    <span className="login_container_or_border"></span>
                                    <span className="login_container_or_or">Nhập thông tin tài khoản</span>
                                </div>
                                <CustomInput id="email" type="text" name="email" label="Email hoặc Số điện thoại" />
                                <CustomInput id="password" type="password" name="password" label="Mật khẩu" />
                                <CustomInput id="confirm" type="password" name="confirm" label="Nhập lại mật khẩu" />
                                <CustomInput id="name" type="text" name="name" label="Tên" />
                                <span className="login_container_qmk tac">Kích hoạt tài khoản</span>
                                <CustomButton>Tạo tài khoản</CustomButton>
                                <span className="login_container_signup tar" onClick={() => onClick('login')}>Đăng nhập</span>
                            </React.Fragment>
                            : status === "phone"
                                ? <React.Fragment>
                                    <div className="login_container_or">
                                        <span className="login_container_or_border"></span>
                                        <span className="login_container_or_or">Nhập thông tin tài khoản</span>
                                    </div>
                                    <CustomInput id="number" type="number" name="number" label="Số điện thoại" />
                                    <CustomButton>Gửi mã xác nhận</CustomButton>
                                </React.Fragment>
                                : null
                }
            </div>
        </Bound>
    )
}

export default Login;


    //<FacebookLogin
    //    cssClass="login_container_signin_facebook_fafafacebook"
    //    appId="4456374524388618"
    //    autoLoad={true}
    //    icon={Facebook}
    //    language="vi_VN"
    //   fields="name,email,picture"
    //    callback={responseFacebook} />

    // const responseFacebook = (response) => {
    //     setLogin(response);
    // }

    // useEffect(() => {
    //     login && dispatch(setLoginFacebook(login));
    // });

    // useEffect(() => {
    //     window.fbAsyncInit = function () {
    //         window.FB.init({
    //             appId: '4456374524388618',
    //             cookie: true,
    //             xfbml: true,
    //             version: 'v7.0'
    //         });
    //         window.FB.getLoginStatus(function(response) {
    //             console.log(response);
    //         });
    //     };
    // });

    // useEffect(() => {
    //     (function (d, s, id) {
    //         var js, fjs = d.getElementsByTagName(s)[0];
    //         if (d.getElementById(id)) { return; }
    //         js = d.createElement(s); js.id = id;
    //         js.src = "https://connect.facebook.net/en_US/sdk.js";
    //         fjs.parentNode.insertBefore(js, fjs);
    //     }(document, 'script', 'facebook-jssdk'));
    // });
