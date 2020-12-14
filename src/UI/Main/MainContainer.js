import React, { useState, useEffect, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { isBrowser, isMobile } from "react-device-detect";

//Auth
import { Auth } from '../../Middleware/Auth.Middleware';

//components
import ScrollToTop from '../ScrollTop';
import Login from '../MainLogin/Login';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';
import CartPage from '../CartPage/CartPage';
import Footer from '../Footer/Footer';
import MainAdmin from '../MainAdmin/MainAdmin';
import AddProductAdmin from '../MainAdmin/AddProductAdmin/AddProductAdmin';
import HeaderAdmin from '../MainAdmin/HeaderAdmin/HeaderAdmin';

const categorys = [
    {
        id: 'Meal',
        title: 'Thịt - Cá - Trứng',
        code: [2917, 1886, 1881],
    },
    {
        id: 'Vegetable',
        title: 'Rau - Củ - Quả',
        code: [1890],
    },
    {
        id: 'Spice',
        title: 'Dầu ăn - Gia vị - Đồ khô',
        code: [1858, 1843, 1821],
    },
    {
        id: 'DryFood',
        title: 'Thực phẩm đông lạnh',
        code: [2920, 2918, 1844],
    },
    {
        id: 'Milk',
        title: 'Đồ uống - Giải khát',
        code: [2925, 2924, 2923, 2922, 1897, 1837],
    },
    {
        id: 'Drinks',
        title: 'Đồ uống - Giải khát',
        code: [1899, 1898, 1896, 1895, 1852],
    },
    {
        id: 'bimbim',
        title: 'Bánh kẹo - Đồ ăn vặt',
        code: [1839, 1819, 1818, 1817, 1816, 1815],
    },
    {
        id: 'chemical',
        title: 'Hóa phẩm - Giấy',
        code: [880],
    },
    // {
    //     id: 'all',
    //     title: 'Tất cả sản phẩm',
    //     code: null,
    // },
]

function PrivateRoute({ children, ...rest }) {
    const [loading, setLoading] = useState(true);
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        fetch('/checkToken' + token)
            .then(res => {
                if (res.status === 200) {
                    setLoading(false);
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                setLoading(false);
                setRedirect(true);
            });
    });

    if (loading) {
        return null;
    }
    if (redirect) {
        return <Redirect to="/login" />;
    }

    return (
        <React.Fragment>
            <HeaderAdmin />
            <Route
                {...rest}
                render={({ location }) =>
                    Auth.isAuthenticated ? (children) :
                        (<Redirect to={{ pathname: "/login", state: { from: location } }} />)
                } />
        </React.Fragment>
    );
}

const RouteWithLayout = ({ component, ...rest }) => {
    return (
        <React.Fragment>
            <Header categorys={categorys} />
            <Route {...rest} component={component} />
            <Footer />
        </React.Fragment>
    );
};

function MainContainer() {
    if (isBrowser) {
        console.log('This content is unavailable on Browser');
    }
    if (isMobile) {
        console.log('This content is unavailable on Mobile');
        // return <div>This content is unavailable on Mobile</div>
    }
    return (
        <Fragment>
            <ScrollToTop />
            <Switch>
                <Route exact path="/login">
                    <Login />
                </Route>
                <PrivateRoute exact path="/admin/products">
                    <MainAdmin />
                </PrivateRoute>
                <PrivateRoute exact path="/admin/addproduct">
                    <AddProductAdmin />
                </PrivateRoute>
                <RouteWithLayout exact path='/'>
                    <Home categorys={categorys} />
                </RouteWithLayout>
                <RouteWithLayout exact path='/products/:cate/p=:page'>
                    <Products categorys={categorys} />
                </RouteWithLayout>
                <RouteWithLayout exact path='/product/:idproduct'>
                    <SingleProduct />
                </RouteWithLayout>
                <RouteWithLayout exact path='/cart'>
                    <CartPage />
                </RouteWithLayout>
            </Switch>
        </Fragment>
    )
}

export default MainContainer;
