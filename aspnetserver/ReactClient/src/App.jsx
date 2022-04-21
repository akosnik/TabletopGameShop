import './App.css';
import BaseNavbar from './Components/Nav/BaseNavbar';
import LoginForm from './Components/Auth/LoginForm';
import RegisterForm from './Components/Auth/RegisterForm';
import ProductForm from './Components/Product/ProductForm';
// import { useState, useEffect, useContext } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
// import axios from 'axios';


function App() {
  // const context = useContext(Context);
  

  return (
    <BrowserRouter>
      <div className="App">
        <BaseNavbar />
        <Switch>
         
          <Route exact path='/login'>
            <LoginForm />
          </Route>
        
          <Route exact path='/register'>
            <RegisterForm />
          </Route>

          <Route exact path='/products/new'>
            <ProductForm />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
