import React from "react";
import {Navbar,Nav,Form,FormControl,Button} from "react-bootstrap";
import {Link} from "react-router-dom";
function BCMenu() {
return(
    <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">React Router</Navbar.Brand>
        <Nav className="mr-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/video">Video</Nav.Link>
            <Nav.Link href="/account">Account</Nav.Link>
            <Nav.Link href="/auth">Auth</Nav.Link>
        </Nav>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Link to={"/welcome"} ><Button variant="outline-info">Search</Button></Link>
        </Form>
    </Navbar>
)
}
export default BCMenu