import { Card, Container } from "react-bootstrap";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";

function ViewProduct() {

  const { id } = useParams();

  const [product, setProduct] = useState({});


  useEffect(()=> {
    console.log(id);
    axios.get(`http://localhost:8265/api/products/${id}`)
    .then(res => {
      console.log(res.data);
      setProduct(res.data)
    })
    .catch(err => {
      console.log("There was an error retrieving the product.", err)
    })
  }, [])

  return (
    <Container className="mx-auto mt-5">
      <Card
      className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3"
      >
        <Card.Body>
          <Card.Title>{ product.title }</Card.Title>
          <Card.Subtitle className="pb-3">${ product.price }</Card.Subtitle>
          <Card.Text>{ product.summary }</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default ViewProduct;