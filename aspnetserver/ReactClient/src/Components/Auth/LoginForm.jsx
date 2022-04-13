import axios from 'axios';
import React, { useState, useEffect } from 'react';


function LoginForm() {

  const [Email, setEmail] = useState(''); 
  const [Password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    console.log(Email, Password)
    const LoginForm = {Email, Password}
    axios.post("http://localhost:8265/api/auth/login", LoginForm)
      .then(res => {
        console.log("Post response:", res)
      })
      .catch(err => {
        console.log("There was an error while posting:", err)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log In</h1>

      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input type="text" name="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button type="submit">Login</button>
    </form>
  )
}

export default LoginForm