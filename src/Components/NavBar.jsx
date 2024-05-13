import { useState, useEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { IoMdLogOut } from "react-icons/io";
import logo from "./../assets/logo.png";
import User from "./../assets/user.png";
import "./Nav.css";

const NavBar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
    navigate("/login");
  };

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("userToken") !== null);
  }, [location]);

  return (
    <Navbar collapseOnSelect expand="lg" className=" navbar">
      <Container className="nav-container">
        <Navbar.Brand className="logoSection">
          <img src={logo} alt="NavIcon" className="NavIcon" />
          <h1>CLIMATE MONITORING SERVICE</h1>
        </Navbar.Brand>
        <Navbar.Collapse className="nav-content">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-link" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/graph" className="nav-link" activeClassName="active">
              Values
            </NavLink>
            <NavLink to="/search" className="nav-link" activeClassName="active">
              page1
            </NavLink>{" "}
            <NavLink to="/page2" className="nav-link" activeClassName="active">
              page2
            </NavLink>{" "}
          </Nav>
          <Nav className="Auth-link">
            {!isLoggedIn ? (
              <>
                <NavLink to="/login" className="login" activeClassName="active">
                  Log In
                </NavLink>
                <button className="signup">
                  <NavLink
                    to="/register"
                    className="nav-link"
                    activeClassName="active"
                  >
                    Sign Up
                  </NavLink>
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/userProfile"
                  className="nav-link"
                  activeClassName="active"
                >
                  <img
                    src={User}
                    alt="User Profile"
                    style={{ width: 30, height: 30 }}
                  />
                </NavLink>
                <Nav.Link
                  as="div"
                  onClick={handleLogout}
                  style={{ cursor: "pointer" }}
                >
                  <IoMdLogOut size={30} className="user-logout" />
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
