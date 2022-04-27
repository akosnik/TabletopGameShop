import './App.css';
import BaseNavbar from './Components/Nav/BaseNavbar';
import LoginForm from './Components/Auth/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm';
import ShopProducts from './Components/Product/ShopProducts';
import ProductForm from './Components/Product/ProductForm';
import ViewProduct from './Components/Product/ViewProduct';
import Cart from './Components/Cart/Cart';
import CartList from './Components/Cart/CartList';

import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


function App() {
  // const context = useContext(Context);
  

  return (
    <BrowserRouter>
      <div className="App">
        <BaseNavbar />
        {/* <CartList /> */}

        <Switch>
         
          <Route exact path='/login'>
            <LoginForm />
          </Route>
        
          <Route exact path='/register'>
            <RegisterForm />
          </Route>

          <Route exact path='/products'>
            <ShopProducts />
          </Route>

          <Route exact path='/cart'>
            <Cart />
          </Route>

          <Route exact path='/products/:id'>
            <ViewProduct />
          </Route>

          <Route exact path='/products/new'>
            <ProductForm />
          </Route>

          <Route exact path='/products/edit/:id'>
            <ProductForm />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
