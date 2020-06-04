import React from "react";
import {Navbar, Form, FormControl, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function BCForm(props) {
    return (
        <Navbar className="bg-light justify-content-between">
            <Form inline>
                <FormControl
                    id="txt1"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </Form>
            <Form inline>
                <FormControl
                    id="txt2"
                    type="password" placeholder="Password" className=" mr-sm-2"/>
              <Link to={"/welcome"}><Button onClick={props.event1}>Log In</Button></Link>
            </Form>
        </Navbar>
    )
}

export default BCForm