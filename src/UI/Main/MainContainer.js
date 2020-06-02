import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Login from '../Login/Login';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';
import Footer from '../Footer/Footer';

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
