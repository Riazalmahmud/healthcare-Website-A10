import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import bandLogo from '../../images/logo/logo.png';
import UseAuth from '../../../src/Firebase/UseAuth';
import useFirebase from '../../Firebase/useFirebase';
const HeaderSec = () => {
    const { user, handleLogout,email } = useFirebase()
    return (
        <>





            <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/home"><img src={bandLogo} alt="" /></Navbar.Brand>
                    <Navbar.Toggle />
                    <Nav className="justify-content-end p-2 fw-bold text-dark">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="/service">Service</Nav.Link>
                        {user?.email ?
                            <Button onClick={handleLogout} variant="light">logOut</Button> :
                            <Nav.Link as={Link} to="/login">login</Nav.Link>
                        }
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName} {user.email}</a>
                        </Navbar.Text>
                    </Nav>
                </Container>
            </Navbar>



        </>

    );
};

export default HeaderSec;