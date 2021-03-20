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
import logo from "./favicon.png";


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
            <Navbar color="dark" dark expand="md">
                <NavbarBrand style={{ cursor: "pointer", paddingLeft:"20px" }} onClick={() => { history.push("/") }}>
                    <img src = {logo} width="30" height="30" alt="logo"></img>
                    Nextagram
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink style={{ cursor: "pointer" }} onClick={() => { history.push("/") }} color ="blue">Users</NavLink>
                        </NavItem>
                        <NavItem>
                            {
                                loggedIn ?
                                    <NavLink style={{ cursor: "pointer" }} onClick={() => handleLogout()}color ="red">Log Out</NavLink>
                                    :
                                    <NavLink style={{ cursor: "pointer" }} onClick={toggleModal} color ="blue">Log In</NavLink>
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