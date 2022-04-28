import React from "react";
import { CartState } from "../../Data/Context";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";

function ShopProducts() {

  const { products } = CartState();

  return (
    <Container className="mx-auto mt-5">
      <h1 className="text-center">Shop Products</h1>
      <Row className="row mt-4 g-4 justify-content-center">
    
        { products && products.map((p) => {
          return(
          <ProductCard 
            props={ p }
            key={ p.title }
          />
          )
        }) }
    
      </Row>
    </Container>
  )
}

export default ShopProducts;