import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function ProductCard({ props }) {

  const { id, title, summary, inventory, price } = props;

  return (
    <Card
    className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
      <Card.Body>
        <Link
        to={`/products/${id}`}>
        <Card.Title>{ title }</Card.Title>
        </Link>
        <Card.Subtitle className="pb-3">${ price }</Card.Subtitle>
        <Card.Text>{ summary }</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;