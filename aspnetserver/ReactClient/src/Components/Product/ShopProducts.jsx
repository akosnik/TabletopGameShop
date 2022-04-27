import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import axios from "axios";



function ShopProducts() {

  const [ products, setProducts ] = useState([]);;
  
  useEffect(() => {
    setProducts([
      {
        "id": 1,
        "userId": 1,
        "title": "Wingspan",
        "summary": "Birds",
        "inventory": 14,
        "price": 29.99
      },
      {
        "id": 2,
        "userId": 1,
        "title": "Risk",
        "summary": "Risk it",
        "inventory": 22,
        "price": 24.99
      },
      {
        "id": 3,
        "userId": 1,
        "title": "Catan",
        "summary": "Roads and Robbers",
        "inventory": 13,
        "price": 19.99
      },
      {
        "id": 4,
        "userId": 1,
        "title": "Shoots and Ladders",
        "summary": "Or snakes whatever",
        "inventory": 100,
        "price": 19.99
      },
      {
        "id": 5,
        "userId": 1,
        "title": "Concept",
        "summary": "Charades the board game",
        "inventory": 32,
        "price": 24.99
      },
      {
        "id": 6,
        "userId": 1,
        "title": "7 Wonders",
        "summary": "Build your civilization to be wonderous",
        "inventory": 7,
        "price": 39.99
      },
      {
        "id": 7,
        "userId": 1,
        "title": "Gloomhaven",
        "summary": "There's a lot going on here",
        "inventory": 6,
        "price": 144.99
      },
      {
        "id": 8,
        "userId": 1,
        "title": "Cat's Cradle",
        "summary": "Me-wow!",
        "inventory": 1000,
        "price": 4.99
      }
    ])
  //   axios.get(`http://localhost:8265/api/products`)
  //     .then(res=>{
  //       setProducts(res.data);
  //       console.log("Successfully retrieved 'Products'", res.data)
  //     })
  //     .catch(err=>{
  //       console.log("There was an error retrieving 'Products'", err)
  //     })
  }, [])




    
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