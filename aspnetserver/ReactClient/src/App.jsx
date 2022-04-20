import './App.css';
import BaseNavbar from './Components/Nav/BaseNavbar';
import RegisterForm from './Components/Auth/RegisterForm';
import LoginForm from './Components/Auth/LoginForm';
import { useState, useEffect, useContext } from 'react';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';


function App() {
  const context = useContext(Context);
  
  
  // const [products, setProducts] = useStaet([]) > api call;
  // const [cartItems, setCartItems] = useState([]);
  
  // const addToCart = (product)

  // useEffect(()=>{
  //   axios.get(`http://localhost:8265/products`)
  //   .then(res=>{
  //     console.log("Successfully retrieved 'Products'", res)
  //   })
  //   .catch(err=>{
  //     console.log("There was an error retrieving 'Products'", err)
  //   })
  // })






  return (
    <BrowserRouter>
      <div className="App">
        <BaseNavbar />
        <Switch>
          {/* <Route exact path='/'>
            
          </Route> */}
         
          <Route exact path='/login'>
            <LoginForm />
          </Route>
        
          <Route exact path='/register'>
            <RegisterForm />
          </Route>

        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
