import axios from 'axios';
import {Form, Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';


function ProductForm () {
    
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [inventory, setInventory] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const productForm = { userId, title, summary, inventory, price }
    setErrors('');

    axios.post("http://localhost:8265/api/products", productForm)
      .then(res => {
        console.log(res)
        setErrors("");
      })
      .catch(err => {
        console.log("error:", err.response)
        setErrors(err.response.data?.errors);
      })
  }

  return ( 
    <Form onSubmit={handleSubmit} className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 mx-auto">
    <h1 className='text-center'>New Product</h1>

    <Form.Group className="mb-3" controlId="formBasicTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} />
      {errors?.Title && errors?.Title.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicSummary">
      <Form.Label>Summary</Form.Label>
      <Form.Control type="field" onChange={(e) => setSummary(e.target.value)} />
      {errors?.Summary && errors?.Summary.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formInventory">
      <Form.Label>Inventory</Form.Label>
      <Form.Control type="text" onChange={(e) => setInventory(e.target.value)} />
      {errors?.Inventory && errors?.Inventory.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}

    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" onChange={(e) => setPrice(e.target.value)} />
      {errors?.Price && errors?.Price.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}
    </Form.Group>
  
    <Button variant="primary" type="submit">
      Submit
    </Button>
    </Form>
  );
}

export default ProductForm;