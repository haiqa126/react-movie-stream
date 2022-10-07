import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import { Link } from "react-router-dom";
function TopNav() {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <b>Demo Streaming</b>
          </Navbar.Brand>
          <Nav>
            <div className="justify-content-end">
              <Stack direction="horizontal" gap={2}>
                <Link to="/Login">
                  <Button variant="primary">Log in</Button>
                </Link>
                {/*Why do you need this button ? */}
                <Button as="a" variant="dark">
                  Start your free trial
                </Button>
              </Stack>
            </div>
          </Nav>
        </Container>
      </Navbar>

      <Navbar
        bg="dark"
        variant="dark"
        style={{ marginBottom: "15px", boxShadow: "5px 5px 13px #666" }}
      >
        {/*you should have only 1 container per page*/}
        <Container>
          {/*what this navbar does? It seems to be hardcoded*/}
          <Navbar.Brand href="#home">Popular Titles</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default TopNav;
