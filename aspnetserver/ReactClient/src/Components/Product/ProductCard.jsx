import React from 'react';
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddToCartButton from "../Buttons/AddToCartButton";

function ProductCard({ props }) {

  const { id, title, summary, price } = props;

  return (
    <Card
    className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
      <Card.Body>
        <div
        className="d-flex justify-content-between align-items-center mb-2"
        >
          <Link
          to={`/products/${id}`}>
          <Card.Title>{ title }</Card.Title>
          </Link>
          <AddToCartButton 
            props={ props }
          />
        </div>
        <Card.Subtitle className="pb-3">${ price }</Card.Subtitle>
        <Card.Text>{ summary }</Card.Text>
      </Card.Body>
        
    </Card>
  )
}

export default ProductCard;