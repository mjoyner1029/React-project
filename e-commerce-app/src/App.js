import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cart from './components/Cart';
import CustomerDetail from './components/CustomerDetail';
import Login from './components/Login';
import OrderHistory from './components/OrderHistory';
import Register from './components/Register';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/cart" component={Cart} />
                <Route path="/customer/:id" component={CustomerDetail} />
                <Route path="/login" component={Login} />
                <Route path="/order-history" component={OrderHistory} />
                <Route path="/register" component={Register} />
                <Route path="/" exact>
                    <h1>Welcome to the E-Commerce App</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
