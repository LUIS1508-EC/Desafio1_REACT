import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyCard from "./components/MyCard";
import Header from "./components/Header";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div>
      <div className="title">
      <Header titulo="TRIPULACION SOMBREROS DE PAJA" />
      </div>
      <Container fluid>
        <Row>
          <Col>
            <MyCard
              nombre='MONKY D LUFFY'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014094.jpg?fit=880%2C1287&ssl=1'}
              parrafo="Capitan de Piratas Sombrero de Paja, usuario de fruta del diablo GOMU-GOMU"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='ZORO RORONOA'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014101.jpg?fit=324%2C474&ssl=1'}
              parrafo="Espadachin de Piratas Sombrero de Paja, utiliza la técnica de técnica tres katanas"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='GOD USOPP'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014090.jpg?fit=880%2C1287&ssl=1'}
              parrafo="Tirador de Piratas Sombrero de Paja, mentiroso, pero fiel. Resorteras y bombas son sus armas"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='NAMI'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014100.jpg?fit=324%2C474&ssl=1'}
              parrafo="Navegante de Piratas Sombrero de Paja, utiliza baston para crear tormentas"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='WINSMOKE SANJI'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014102.jpg?fit=880%2C1287&ssl=1'}
              parrafo="Cocinero de Piratas Sombrero de Paja, espacializado en combate con piernas"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='BROOK'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014086.jpg?fit=880%2C1287&ssl=1'}
              parrafo="Músico de Piratas Sombrero de Paja, resucito gracias a fruta del diablo. Pelea con musica y espada."
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='NICO ROBIN'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014096.jpg?fit=880%2C1287&ssl=1'}
              parrafo="Arqueologa de Piratas Sombrero de Paja, usuaria de fruta del diablo FLOR-FLOR"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='CHOPPER'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014084.jpg?fit=324%2C474&ssl=1'}
              parrafo="Médico de Piratas Sombrero de Paja, reno usuario de fruta del diablo tipo SON"
              Fondo="success"
              Texto="Ver más"
            />
          </Col>
          <Col>
            <MyCard
              nombre='FRANKY'
              url={'https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014097.jpg?fit=880%2C1287&ssl=1https://i0.wp.com/posterycuadros.com/wp-content/uploads/2022/11/1000014084.jpg?fit=324%2C474&ssl=1'}
              parrafo="Constructor y mecánico de Piratas Sombrero de Paja, es mitad SIBORG. Tiene armas en su cuerpo."
              Fondo="success"
              Texto="Ver más"
            />
          </Col>

                  </Row>
      </Container>
      <Footer footerTexto='Se les conoce como los de "Sombrero de Paja", 
      por el característico sombrero de su capitán, el cual le fue cedido 
      por Shanks el Pelirrojo, y fueron conocidos como "Piratas de Sombrero 
      de Paja" gracias a Smoker en Arabasta. La banda navegó en el Going Merry, 
      su primer barco oficial, hasta el arco de Water 7. Durante el arco del 
      regreso a Water 7, Franky e Iceburg les construyeron un nuevo barco, al 
      que Iceburg llamó Thousand Sunny, a pesar de las proposiciones de 
      nombres por parte de los miembros de la tripulación. Actualmente, los 
      Piratas de Sombrero de Paja están constituidos por diez miembros cuyas 
      recompensas suman un total de 8.816.001.000 Berrys.' />
    </div>
  );
}

export default App;
