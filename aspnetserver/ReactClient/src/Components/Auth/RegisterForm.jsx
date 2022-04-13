import axios from 'axios';
import React, { useState, useEffect } from 'react';

function RegisterForm() {

  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');


  function handleSubmit(e) {
    e.preventDefault();

    const registerForm = { FirstName, LastName, Email, Password, ConfirmPassword}

    axios.post("http://localhost:8265/api/auth/register", registerForm)
      .then(res => {
        console.log("Post response:", res)
      })
      .catch(err => {
        console.log("There was an error while posting:", err)
      })
  }

  return ( 
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div className="form-group">
        <label htmlFor="FirstName">First Name</label>
        <input className="input" type="text" name="FirstName" onChange={(e) => setFirstName(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="LastName">Last Name</label>
        <input type="text" name="LastName" onChange={(e) => setLastName(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="Email">Email</label>
        <input type="text" name="Email" onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="Password">Password</label>
        <input type="text" name="Password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      
      <div className="form-group">
        <label htmlFor="ConfirmPassword">Confirm Password</label>
        <input type="text" name="ConfirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegisterForm;