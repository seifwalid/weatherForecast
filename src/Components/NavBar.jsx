import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import logo from "./../assets/logo.png";
import User from "./../assets/user.png";
import edit from "./../assets/edit.png";
import "./Nav.css";
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton,
} from "@clerk/clerk-react";

const NavBar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        navigate("/login");
    };

    useEffect(() => {
        setIsLoggedIn(localStorage.getItem("user") !== null);
    }, [location]);

    return (
        <Navbar collapseOnSelect expand='lg' className=' navbar'>
            <Container className='nav-container'>
                <Navbar.Brand className='logoSection'>
                    <img src={logo} alt='NavIcon' className='NavIcon' />
                    <h1>CLIMATE MONITORING SERVICE</h1>
                </Navbar.Brand>
                <Navbar.Collapse className='nav-content'>
                {isLoggedIn && (
                        <Nav className='me-auto'>
                            <NavLink
                                to='/'
                                className='nav-link'
                                activeClassName='active'
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to='/airQuality'
                                className='nav-link'
                                activeClassName='active'
                            >
                                Values
                            </NavLink>
                            <NavLink
                                to='/search'
                                className='nav-link'
                                activeClassName='active'
                            >
                                Page1
                            </NavLink>{" "}
                            <NavLink
                                to='/page2'
                                className='nav-link'
                                activeClassName='active'
                            >
                                Page2
                                <ul className="dropdown-menu"> {/* Wrap subpages in a dropdown menu */}
                                <li>
                                    <NavLink to="/page2/subpage1" className="dropdown-item">Air Quality History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/page2/subpage2" className="dropdown-item">Air Quality Forecast</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/page2/subpage3" className="dropdown-item">Temprature History</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/page2/subpage4" className="dropdown-item">Temprature Forecast</NavLink>
                                </li>
                                </ul>
                            </NavLink>{" "}
                        </Nav>
                    )}
                    <Nav className='Auth-link'>
                        {!isLoggedIn ? (
                            <>
                                <NavLink
                                    to='/login'
                                    className='login'
                                    activeClassName='active'
                                >
                                    Log In
                                </NavLink>
                                <button className='signup'>
                                    <NavLink
                                        to='/register'
                                        className='nav-link'
                                        activeClassName='active'
                                    >
                                        Sign Up
                                    </NavLink>
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to='/editprofile'
                                    className='nav-link'
                                    activeClassName='active'
                                >
                                    <img
                                        src={edit}
                                        alt='User Profile'
                                        style={{ width: 30, height: 30 }}
                                    />
                                </NavLink>
                                <NavLink
                                    to='/profile'
                                    className='nav-link'
                                    activeClassName='active'
                                >
                                    <img
                                        src={User}
                                        alt='User Profile'
                                        style={{ width: 30, height: 30 }}
                                    />
                                </NavLink>
                                <Nav.Link
                                    as='div'
                                    onClick={handleLogout}
                                    style={{ cursor: "pointer" }}
                                >
                                    <IoMdLogOut
                                        size={30}
                                        className='user-logout'
                                    />
                                </Nav.Link>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
