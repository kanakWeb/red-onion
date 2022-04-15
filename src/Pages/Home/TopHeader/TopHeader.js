import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../../images/logo2.png";
import auth from "../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const TopHeader = () => {
  const [user] = useAuthState(auth);

  const handleSignout = () => {
    signOut(auth);
  };

  return (
    <div>
      <Navbar className="bg-white">
        <Container>
          <Navbar.Brand href="#home">
            <Link to="/">
              {" "}
              <img style={{ width: "110px" }} src={logo} alt="" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link as={Link} className="text-orange" to="cart">
              🛒
            </Nav.Link>
            {user ? (
              <Nav.Link as={Link} onClick={handleSignout} to="login">
                Sign out
              </Nav.Link>
            ) : (
              <Nav.Link as={Link} to="login">
                LogIn
              </Nav.Link>
            )}

            {
                user?'':<Nav.Link
                as={Link}
                className="bg-danger text-white rounde rounded-pill"
                to="/signup"
              >
                Sign Up
              </Nav.Link>
            }
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopHeader;
