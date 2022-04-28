import React, { useEffect, useState } from 'react';
import { Button, Row, Col, Form } from 'react-bootstrap';
import { CartState } from '../../Data/Context';

export default function CartItem({ product, quantityPrice }) {

  const { title, price, quantity } = product
  const { cartDispatch } = CartState();
  

  return (
    <Row className='w-50'>
      <Col>
        <span>{ title }</span>
      </Col>
      <Col>
        <span>
          <Button onClick={ () => cartDispatch({ type: "SUB_QTY", payload: product }) }>-</Button>
          <input 
            className='m-1'
            onChange={ (e) => cartDispatch({ type: "SET_QTY", payload: {...product, quantity: e.target.value} }) }
            value = { quantity }
            style={{width: "3rem"}}
            />
          <Button onClick={ () => cartDispatch({ type: "PLUS_QTY", payload: product }) }>+</Button>
        </span>
      </Col>
      <Col className='d-flex flex-column justify-content-center'>
        <span>${quantityPrice}</span>
        {quantity > 1 && <span style={{fontSize: ".7rem"}}>${price} each</span>}
      </Col>
    </Row>
  )
}
