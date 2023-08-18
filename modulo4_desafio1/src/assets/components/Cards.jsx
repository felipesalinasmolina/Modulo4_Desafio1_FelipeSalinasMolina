import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Tags from "./Tags";

const Cards = ({ name, image, descrption, textoAlt, color, raza }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} alt={textoAlt} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{descrption}</Card.Text>
        <Button variant="secondary">Conoceme!!</Button>
      </Card.Body>
      <div className="tags">
        <Tags color={color} raza={raza} />
      </div>
    </Card>
  );
};

export default Cards;
