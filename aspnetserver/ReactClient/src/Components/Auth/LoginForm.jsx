import axios from 'axios';
import {Form, Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';


function LoginForm() {

  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(email, password)
    const LoginForm = {email, password}
    axios.post("http://localhost:8265/api/auth/login", LoginForm)
      .then(res => {
        console.log("Post response:", res)
        setErrors("");
      })
      .catch(err => {
        console.log("There was an error while posting:", err.response);
        setErrors(err.response);
      })
  }

  return (
  <Form onSubmit={handleSubmit} className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 mx-auto">
  <h1 className='text-center'>Login</h1>

  

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Text className="text-danger">
      {errors ? "Invalid login attempt" : null}
    </Form.Text>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
  </Form>
  )
}

export default LoginForm