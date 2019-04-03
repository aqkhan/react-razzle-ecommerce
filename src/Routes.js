import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './Home';
import ProductsArchive from './pages/ProductsArchive';
import CartPage from './pages/CartPage';
const Routes = () => {
    return(
        <Switch>
            <Route exact path="/" component={ProductsArchive} />
            <Route exact path="/products-archive" component={ProductsArchive} />
            <Route exact path="/cart" component={CartPage} />
        </Switch>
    )
}
export default Routes;