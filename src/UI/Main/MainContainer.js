import React, { useState, useEffect, Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Auth
import { Auth } from '../../Middleware/Auth.Middleware';

//components
import Login from '../MainLogin/Login';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';
import Footer from '../Footer/Footer';
import MainAdmin from '../MainAdmin/MainAdmin';
import AddProductAdmin from '../MainAdmin/AddProductAdmin/AddProductAdmin';
import HeaderAdmin from '../MainAdmin/HeaderAdmin/HeaderAdmin';

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
            <Header />
            <Route {...rest} component={component} />
            <Footer />
        </React.Fragment>
    );
};

function MainContainer() {
    return (
        <Fragment>
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
                    <Home />
                </RouteWithLayout>
                <RouteWithLayout exact path='/products/:cate/p=:page'>
                    <Products />
                </RouteWithLayout>
                <RouteWithLayout exact path='/product/:idproduct'>
                    <SingleProduct />
                </RouteWithLayout>
            </Switch>
        </Fragment>
    )
}

export default MainContainer;
