import './App.css';
import RegisterForm from './Components/Auth/RegisterForm';
import LoginForm from './Components/Auth/LoginForm';
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
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
