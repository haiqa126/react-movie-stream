import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <>
      {/*The container should be a wrapper for the main content on the page. You're using it in several auxiliary components*/}
      <Container>
        <Row>
          <Col>
            {/*It would be nice to move out Card to separate component, as it can be reused here 2 times wit less code duplication*/}
            <Card style={{ width: "18rem", height: "80px", marginTop: "10px" }}>
              <Card.Img variant="top" src="/movie.jpg" />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Top Series</Card.Title>
                <Link to="/Series">
                  <Button variant="primary">
                    <b>Watch Series</b>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card style={{ width: "18rem", height: "80px", marginTop: "10px" }}>
              <Card.Img variant="top" src="/movie.jpg" />
              <Card.Body>
                <Card.Title style={{ color: "black" }}>Top Movies</Card.Title>
                <Link to="/Movies">
                  <Button variant="primary">
                    <b>Watch Movies</b>
                  </Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cards;
