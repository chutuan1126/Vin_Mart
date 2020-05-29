import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';

//components
import Header from '../Header/Header';
import Home from '../Home/Home';
import Products from '../Products/Products';
import Footer from '../Footer/Footer';

function MainContainer() {

    return (
        <Fragment>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/products/:cate'>
                    <Products />
                </Route>
            </Switch>
            <Footer />
        </Fragment>
    )
}

export default MainContainer;
