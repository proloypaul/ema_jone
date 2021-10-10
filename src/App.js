
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFind from './components/NotFind/NotFind';
import OrderReview from './components/OrderReview/OrderReview';
import Shop from './components/Shop/Shop';
import Placeorder from './components/PlaceOrder/PlaceOrder'
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/order">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>
          <Route path="/placeOrder">
            <Placeorder></Placeorder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFind></NotFind>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
