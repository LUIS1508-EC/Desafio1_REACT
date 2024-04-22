import Badge from "react-bootstrap/Badge";

/* eslint-disable react/prop-types */
const Tags = ({ Fondo, Texto }) => {
  return (
    <h5>
      <Badge pill bg={Fondo}>
        {Texto}
      </Badge>
    </h5>
  );
};

export default Tags;