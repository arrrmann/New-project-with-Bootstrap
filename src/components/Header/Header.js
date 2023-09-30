import {Button, Container, Form, Nav, Navbar} from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href="https://news.am/arm/">News</Navbar.Brand>
        <Navbar.Toggle aria-controls="my-navbar" />
        <Navbar.Collapse id="my-navbar">
          <Nav
            className="me-auto my-2 my-lg-0"
            // style={{ maxHeight: '80px' }}//Nav-i max bardzrutyuny 80px e
            // navbarScroll//adaptacion burgeri menu-n toxum e vor scroll anes (bayc arajanum e ayn jamanak erb Nav-i height-y qich e tvac, aysinqn ete hanenq maxHeight style-y apa scroll-i kariq petq chi ga)
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Features</Nav.Link>
            <Nav.Link href="#action3">Pricing</Nav.Link>
            <Nav.Link href="#action4">FAQ's</Nav.Link>
            <Nav.Link href="#action5">About</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
            <Button variant="outline-secondary">Login</Button>
            <Button variant="outline-warning">Sign</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}