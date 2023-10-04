import { Navbar, Nav, Form, Button, FormControl } from "react-bootstrap";
import gl from './gl.png'

export default function Header() {
    return (
        <Navbar bg="dark" variant='dark' expand='lg'>
            <Navbar.Brand href="#" className="ms-2">
                <img src={gl} alt="logo" style={{width:'100px'}}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="my-navbar" />
            <Navbar.Collapse id="my-navbar">
                <Nav className="me-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                </Nav>

                <div className='ml-auto'>
                    <Form className="d-flex">
                        <FormControl type='text' placeholder="Search" className="me-sm-1 me-md-2 me-lg-3" />
                        <Button variant="success" className="me-sm-1 me-md-2 me-lg-3">Search</Button>
                        <Button variant="primary" className="me-sm-1 me-md-2 me-lg-3">Login</Button>
                        <Button variant="warning" className="me-sm-1 me-md-2 me-lg-3">Register</Button>
                    </Form>
                </div>
            </Navbar.Collapse>
        </Navbar>
    )
}