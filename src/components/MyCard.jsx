import  Tags  from "./Tags";
import Card from "react-bootstrap/Card";

/* eslint-disable react/prop-types */
const MyCard = (props) => {
  return (
    <>
      <Card className="text-center" style={{ width: "20rem" }}>
        <Card.Img variant="top" src={props.url} />
        <Card.Body>
          <Card.Title className="titulos" >{props.nombre}</Card.Title>
          <Card.Text className="parrafos">{props.parrafo}</Card.Text>
          <Tags Fondo={props.Fondo} Texto={props.Texto}></Tags>
        </Card.Body>
      </Card>
    </>
  );
};

export default MyCard;