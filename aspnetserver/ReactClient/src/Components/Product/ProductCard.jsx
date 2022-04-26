import { Card } from "react-bootstrap";

function ProductCard({props}) {

  const {title, summary, inventory, price} = props;

  return (
    <Card className="col-10 col-sm-8 col-md-6 col-lg-4 col-xl-3">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="pb-3">${price}</Card.Subtitle>
        <Card.Text>{summary}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default ProductCard;