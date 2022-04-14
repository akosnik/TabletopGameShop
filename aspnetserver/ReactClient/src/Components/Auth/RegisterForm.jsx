import axios from 'axios';
import {Form, Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';

function RegisterForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState('');


  function handleSubmit(e) {
    e.preventDefault();

    const registerForm = { firstName, lastName, email, password, confirmPassword}
    setErrors('');

    axios.post("http://localhost:8265/api/auth/register", registerForm)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log("error:", err.response)
      })
  }

  return ( 
    <Form onSubmit={handleSubmit} className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 mx-auto">
    <h1 className='text-center'>Register</h1>

    <Form.Group className="mb-3" controlId="formBasicFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" onChange={(e) => setFirstName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" onChange={(e) => setLastName(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" onChange={(e) => setEmail(e.target.value)} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" onChange={(e) => setPassword(e.target.value)} />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
      <Form.Label>Confirm Password</Form.Label>
      <Form.Control type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
  );
}

export default RegisterForm;