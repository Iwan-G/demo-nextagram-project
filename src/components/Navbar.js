import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap'; 
import { useHistory } from 'react-router-dom'
import Modal from './AuthModal'
import { toast } from 'react-toastify'
import { Form } from 'reactstrap';
import { FormControl, Button } from 'react-bootstrap';




const NavBar = ({ loggedIn, setLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory()

    const toggle = () => setIsOpen(!isOpen);

    const [showModal, setShowModal] = useState(false)
    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const handleLogout = () => {
        localStorage.removeItem('jwt')
        setLoggedIn(false)
        toast.success("Successfully Signed Out!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        history.push("/")
    }

    return (
    <div>
      <Navbar color="light" expand="lg">
        <NavbarBrand style={{ cursor: "pointer", paddingLeft: "20px", color: "black" }} onClick={() => { history.push("/") }}>
          <i className="fab fa-instagram fa-lg p-1 ml-1"></i>
                    Nextagram
                </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Type username"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </NavItem>
            <NavItem>
              <NavLink style={{ cursor: "pointer" }} onClick={() => { history.push("/") }} >Users</NavLink>
            </NavItem>
            <NavItem>
              {
                loggedIn ?
                  <NavLink style={{ cursor: "pointer" }} onClick={() => handleLogout()}>Log Out</NavLink>
                  :
                  <NavLink style={{ cursor: "pointer" }} onClick={toggleModal} >Log In</NavLink>
              }
            </NavItem>
            {/* <NavItem>
                        <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                    </NavItem> */}

          </Nav>
        </Collapse>
      </Navbar>
      <Modal
        isOpen={showModal}
        toggle={toggleModal}
        setLoggedIn={setLoggedIn}
      />
    </div>
  );
}

export default NavBar;