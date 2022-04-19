import React from 'react';
import styles from './header.module.css';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const Header = (props) => {
    return (
        <div>
            <div className = {styles.header}>
                <Navbar nav="bg" variant="dark">
                <Navbar.Brand>
                <strong>PLAZA</strong>
                </Navbar.Brand>

                <Nav>
                <Nav.Link href = "account">Account</Nav.Link>
                    <NavDropdown account="Account">
                    <NavDropdown.Item href = "account/signin">Sign In</NavDropdown.Item>
                    <NavDropdown.Item href = "account/register">Register</NavDropdown.Item>

                    </NavDropdown>
                    <Nav.Link href = "Classes">Classes</Nav.Link>
                    <NavDropdown classes="Account">
                    <NavDropdown.Item href = "classes/change">Change Class</NavDropdown.Item>
                    <NavDropdown.Item href = "classes/search">Class Search</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar>
            </div>
            {props.children}
        </div>
    )

}