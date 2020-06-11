import React, { useState } from 'react';
// import FacebookLogin from 'react-facebook-login';

//react-redux, action
import { useDispatch } from 'react-redux';
import { signUpAdmin } from '../../Redux/Login/Login.action';

//components
import CustomInput from '../Customs/CustomInput.component';
import CustomButton from '../Customs/CustomButton.component';

function SignUp({ onClick }) {
    const dispatch = useDispatch();

    const [signUp, setSignUp] = useState({
        useName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    function onChangeEmail(e) {
        const value = e.target.value.trim();
        if (value) {
            setSignUp({ ...signUp, email: value });
        } else {
            setSignUp({ ...signUp, email: '' });
        }
    }
    function onChangePassword(e) {
        const value = e.target.value.trim();
        if (value) {
            setSignUp({ ...signUp, password: value });
        } else {
            setSignUp({ ...signUp, password: '' });
        }
    }
    function onChangeConfirmPassword(e) {
        const value = e.target.value.trim();
        if (value) {
            setSignUp({ ...signUp, confirmPassword: value });
        } else {
            setSignUp({ ...signUp, confirmPassword: '' });
        }
    }
    function onChangeUseName(e) {
        const value = e.target.value;
        if (value) {
            setSignUp({ ...signUp, useName: value });
        } else {
            setSignUp({ ...signUp, useName: '' });
        }
    }

    function handleClick() {
        dispatch(signUpAdmin({
            useName: signUp.useName,
            email: signUp.email,
            password: signUp.password,
            confirmPassword: signUp.confirmPassword
        }));
    }

    return (
        <React.Fragment>
            <div className="login_container_or">
                <span className="login_container_or_border"></span>
                <span className="login_container_or_or">Nhập thông tin tài khoản</span>
            </div>
            <CustomInput
                id="email"
                type="text"
                name="email"
                value={signUp.email}
                handleChange={onChangeEmail}
                label="Email hoặc Số điện thoại" />
            <CustomInput
                id="password"
                type="password"
                name="password"
                value={signUp.password}
                handleChange={onChangePassword}
                label="Mật khẩu" />
            <CustomInput
                id="confirm"
                type="password"
                name="confirm"
                value={signUp.confirmPassword}
                handleChange={onChangeConfirmPassword}
                label="Nhập lại mật khẩu" />
            <CustomInput
                id="name"
                type="text"
                name="name"
                value={signUp.useName}
                handleChange={onChangeUseName}
                label="Tên" />
            <span className="login_container_qmk tac">Kích hoạt tài khoản</span>
            <CustomButton handleClick={handleClick}>Tạo tài khoản</CustomButton>
            <span className="login_container_signup tar" onClick={() => onClick('login')}>Đăng nhập</span>
        </React.Fragment>
    )
}

export default SignUp;