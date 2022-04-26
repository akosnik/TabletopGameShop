import { Container, Row } from "react-bootstrap";
import {CartState} from "../../Data/Context"
import ProductCard from "./ProductCard";
import { useHistory } from 'react-router-dom'

function ManageProducts() {

  const {products} = CartState();
  let history = useHistory();

  const handleEdit = (id) => {
    console.log("Clicked", id)
    if(id) {
      history.push(`/products/edit/${id}`)
    }
  }

  return (
    <Container className="mx-auto">
      <h1 className="text-center">Shop Products</h1>
      <Row className="row g-4 justify-content-center">
    
        { products && products.map((p) => {
          return(
          <ProductCard 
            props={p}
            handleEdit={() => handleEdit(p.id)}
            key={p.title}
          />)
        }) }
    
      </Row>
    </Container>
  )
}

export default ManageProducts;