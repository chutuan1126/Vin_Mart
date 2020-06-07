import React, { Fragment } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Auth
import { Auth } from '../../Middleware/Auth.Middleware';

//components
import Login from '../Login/Login';
import Header from '../Header/Header';
import Home from '../Home/Home';
import Products from '../Products/Products';
import SingleProduct from '../SingleProduct/SingleProduct';
import Footer from '../Footer/Footer';
import MainAdmin from '../MainAdmin/MainAdmin';
import AddProductAdmin from '../MainAdmin/AddProductAdmin/AddProductAdmin';
import HeaderAdmin from '../MainAdmin/HeaderAdmin/HeaderAdmin';

// function LoginPage() {
//     const history = useHistory();
//     const location = useLocation();

//     const { from } = location.state || { from: { pathname: "/" } };

//     const login = () => {
//         Auth.authenticate(() => {
//             history.replace(from);
//         });
//     };

//     if(Auth.isAuthenticated) {
//         return <Redirect to={"/protected"} />
//     }

//     return (
//         <div>
//             <p>You must log in to view the page at {from.pathname}</p>
//             <button onClick={login}>Log in</button>
//         </div>
//     );
// }

function PrivateRoute({ children, ...rest }) {
    Auth.isAuthenticated = true;
    return (
        <React.Fragment>
            <HeaderAdmin />
            <Route
                {...rest}
                render={({ location }) =>
                    Auth.isAuthenticated ? (children) :
                        (<Redirect to={{ pathname: "/admin/products", state: { from: location } }} />)
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
