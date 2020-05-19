import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

//icons
import logo1 from '../../assets/images/icons/logo_1.svg';
import logoSaleNoti from '../../assets/images/icons/logoSaleNoti.png';

//images
import FooterTopOne from '../../assets/images/ImageProducts/footer-top-one.png';
import FooterTopTwo from '../../assets/images/ImageProducts/footer-top-two.png';
import FooterTopFour from '../../assets/images/ImageProducts/footer-top-four.png';
import FooterTopThree from '../../assets/images/ImageProducts/footer-top-three.png';

const Bound = styled.footer`
    width: 100%;
    height: 615px;
    .footer_top {
        display: flex;
        width: 100%;
        height: 208px;
        align-items: center;
        justify-content: center;
        background: #f8f9fa;
        border-top: 3px solid #d42333;
        &_cate {
            display: flex;
            width: 1180px;
            height: 208px;
            align-items: center;
            justify-content: space-around;
            &_image {
                padding: 40px 0;
                display: block;
                width: 295px;
                height: 208px;
                text-align: center;
                margin-top: auto;
                margin-bottom: auto;
                img {
                    margin-bottom: 15px;
                }
                h3 {
                    width: 100%;
                    height: 18px;
                    color: #666;
                    font-size: 15px;
                    line-height: 1.5;
                    font-weight: 700;
                    letter-spacing: .2px;
                    font-family: Roboto,sans-serif;
                }
            }
        }
    }
    .footer_main {
        width: 100%;
        height: calc(100% - 208px);
        background-color: #2c2c2c;
        &_info {
            display: flex;
            margin: auto;
            width: 1180px;
            height: 260px;
            padding: 15px 0;
            &_blogcty {
                width: 297px;
                height: 100%;
                img {
                    display: block;
                    margin-top: 5px;
                    margin-bottom: 15px;
                }
                span { 
                    display: block;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 500;
                    text-align: left;
                    padding-right: 48px;
                    padding-bottom: 6px;
                }
            }
            &_blog {
                width: 297px;
                height: 100%;
                h3 {
                    font-size: 13px;
                    font-weight: 700;
                    margin-top: 5px;
                    margin-bottom: 15px;
                    color: #8b8b8b;
                }
                a {
                    display: block;
                    color: #fff;
                    font-size: 12px;
                    font-weight: 500;
                    user-select: none;
                    margin-bottom: 7px;
                    text-decoration: none;
                    &:hover {
                        color: #f44336;
                    }
                }
            }
        }
        .footer_main_address {
            display: flex;
            margin: auto;
            width: 1180px;
            height: calc(100% - 260px);
            padding-top: 15px;
            padding-bottom: 20px;
            justify-content: space-between;
            border-top: 1px solid hsla(0,0%,100%,.1);
            &_section {
                width: 380px;
                height: 110px;
                padding: 16px;
                border-radius: 5px;
                background: hsla(0,0%,54.5%,.1);
                h3 {
                    text-align: left;
                    color: #8b8b8b;
                    font-size: 16px;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                span {
                    color: #fff;
                    font-size: 12px;
                    font-weight: 500;
                    text-align: left;
                }
            }
        }
    }
`

function Footer() {
    return (
        <Bound>
            <div className="footer_top">
                <div className="footer_top_cate">
                    <div className="footer_top_cate_image">
                        <img src={FooterTopOne} width="80" height="80" alt="cate" />
                        <h3>Sản phẩm an toàn</h3>
                    </div>
                    <div className="footer_top_cate_image">
                        <img src={FooterTopTwo} width="80" height="80" alt="cate" />
                        <h3>Chất lượng cam kết</h3>
                    </div>
                    <div className="footer_top_cate_image">
                        <img src={FooterTopThree} width="80" height="80" alt="cate" />
                        <h3>Dịch vụ vượt trội</h3>
                    </div>
                    <div className="footer_top_cate_image">
                        <img src={FooterTopFour} width="80" height="80" alt="cate" />
                        <h3>Giao hàng nhanh chóng</h3>
                    </div>
                </div>
            </div>
            <div className="footer_main">
                <div className="footer_main_info">
                    <div className="footer_main_info_blogcty">
                        <img src={logo1} width="90" alt="logo_small"/>
                        <span>MSDN: 0104918404 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp lần đầu ngày 20/09/2010</span>
                        <span>Đăng ký thay đổi lần thứ 42 do Sở Kế hoạch Đầu tư TP. Hồ Chí Minh ngày 13/02/2020</span>
                        <Link to="#http://online.gov.vn/Home/WebDetails/10976?AspxAutoDetectCookieSupport=1">
                            <img src={logoSaleNoti} width="123" alt="Noti bct"/>
                            </Link>
                    </div>
                    <div className="footer_main_info_blog">
                        <h3>Về chúng tôi</h3>
                        <Link to="/">Giới thiệu về VinMart</Link>
                        <Link to="/">Quản lý chất lượng</Link>
                        <Link to="/">Điều khoản và điều kiện giao dịch</Link>
                        <Link to="/">chính sách bảo mật và chia sẻ thông tin</Link>
                    </div>
                    <div className="footer_main_info_blog">
                        <h3>Hỗ trợ khách hàng</h3>
                        <Link to="/">Trung tâm hỗ trợ khách hàng</Link>
                        <Link to="/">Chính sách hỗ trợ khách hàng</Link>
                        <Link to="/">chính sách giao hàng</Link>
                        <Link to="/">Chính sách đổi trả</Link>
                    </div>
                    <div className="footer_main_info_blog">
                        <h3>Chăm sóc khách hàng</h3>
                        <Link to="/">Mua Online: 1800 462583</Link>
                        <Link to="/">Email: cskh@vinmart.com</Link>
                    </div>
                </div>
                <div className="footer_main_address">
                    <div className="footer_main_address_section">
                        <h3>Trụ sở chính:</h3>
                        <span>Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam.</span>
                    </div>
                    <div className="footer_main_address_section">
                        <h3>Địa chỉ giao dịch Tp.HCM:</h3>
                        <span>Tầng 5, Mplaza SaiGon, 39 Lê Duẩn, Phường Bến Nghé, Quận 1, Thành Phố Hồ Chí Minh, Việt Nam.</span>
                    </div>
                    <div className="footer_main_address_section">
                        <h3>Địa chỉ giao dịch Hà Nội:</h3>
                        <span>Tower 1, Times City, 458 Minh Khai, Phường Vĩnh Tuy, Quận Hai Bà Trưng, Thành phố Hà Nội.</span>
                    </div>
                </div>
            </div>
        </Bound>
    )
}

export default Footer;
