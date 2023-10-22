import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <Navbar expand="lg" className="text-uppercase fw-bold navbar">
      <Container className="p-2">
        <Navbar.Brand href="#home" className="accueil mx-5 text-light">
          Accueil
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#home" className="mx-5 text-light">
              Présentation
            </Nav.Link>
            <Nav.Link href="#link" className="mx-5 text-light">
              Portfolio
            </Nav.Link>
            <Nav.Link href="#link" className="mx-5 text-light">
              Compétences
            </Nav.Link>
            <Nav.Link href="#link" className="mx-5 text-light">
              Expériences
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
