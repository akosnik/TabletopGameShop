import React from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { CartState } from '../../Data/Context';

export default function CartItem({ product }) {

  const { title, price, quantity } = product
  const { cartDispatch } = CartState();

  return (
    <Row className='w-50'>
      <Col>
        <span>{ title }</span>
      </Col>
      <Col>
        <span>{ price }</span>
      </Col>
      <Col>
      <span>
        <Button onClick={ () => cartDispatch({ type: "SUB_QTY", payload: product }) }>-</Button>
        <span className='p-2'>{quantity}</span>
        {/* <input 
          type="number" 
          // onChange={ (e) => cartDispatch({ type: "SET_QTY", payload: {...product, quantity: e.target.value} }) }
          value = { quantity }
          style={{width: "3.5rem"}}
          /> */}
        <Button onClick={ () => cartDispatch({ type: "PLUS_QTY", payload: product }) }>+</Button>
      </span>
      </Col>
      
    </Row>
  )
}
