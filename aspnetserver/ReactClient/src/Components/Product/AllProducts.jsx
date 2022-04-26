import { Container, Row } from "react-bootstrap";
import {CartState} from "../../Data/Context"
import ProductCard from "./ProductCard";

function AllProducts() {

  const {products} = CartState();

  return (
    <Container className="mx-auto">
      <h1 className="text-center">All Products</h1>
      <Row className="row g-4 justify-content-center">
      {products && products.map((p) => {
        return(<ProductCard key={p.title} props={p}>
          </ProductCard>)
      })}
      </Row>
    </Container>
  )
}

export default AllProducts;