import axios from 'axios';
import {Form, Button} from 'react-bootstrap'
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function ProductForm () {
  const { id } = useParams();

  const [userId] = useState(1);
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [inventory, setInventory] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState('');

  useEffect(() => {
    console.log("ID:", id);
    if(id != null){
      axios.get(`http://localhost:8265/api/products/${id}`)
      .then(res => {
        console.log("Response:", res);
        setTitle(res.data.title);
        setSummary(res.data.summary);
        setInventory(res.data.inventory);
        setPrice(res.data.price);
      })
      .catch(err => {
        console.log("There was an error handling the request.")
      })
    } else {
      console.log("No edit id")
    }
  }, [])

  function handleSubmit(e) {
    e.preventDefault();

    const productForm = { userId, title, summary, inventory, price }
    setErrors('');
    if(id){
      axios.put(`http://localhost:8265/api/products/${id}`, productForm)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log("error:", err.response)
        setErrors(err.response.data?.errors);
      })
    } else {
      axios.post("http://localhost:8265/api/products", productForm)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log("error:", err.response)
        setErrors(err.response.data?.errors);
      })
    }
  }

  return ( 
    <Form onSubmit={handleSubmit} className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3 mx-auto">
    <h1 className='text-center'>{id ? "Edit Product" : "New Product"}</h1>

    <Form.Group className="mb-3" controlId="formBasicTitle">
      <Form.Label>Title</Form.Label>
      <Form.Control type="text" onChange={(e) => setTitle(e.target.value)} value={title || ""} />
      {errors?.Title && errors?.Title.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicSummary">
      <Form.Label>Summary</Form.Label>
      <Form.Control type="field" onChange={(e) => setSummary(e.target.value)} value={summary || ""} />
      {errors?.Summary && errors?.Summary.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}
    </Form.Group>

    <Form.Group className="mb-3" controlId="formInventory">
      <Form.Label>Inventory</Form.Label>
      <Form.Control type="text" onChange={(e) => setInventory(e.target.value)} value={inventory || ""} />
      {errors?.Inventory && errors?.Inventory.map((err) => {
        return (<p key={err} className="text-danger my-0">{err}</p>);
      })}
    </Form.Group>
  
    <Form.Group className="mb-3" controlId="formPrice">
      <Form.Label>Price</Form.Label>
      <Form.Control type="text" onChange={(e) => setPrice(e.target.value)} value={price || ""} />
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