import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button, Nav, Navbar } from "react-bootstrap";
import { BsPeopleCircle as IconProfil } from "react-icons/bs";
import imgLogo from '../images/icon-left-white.svg'

function Header() {
  const getUser = localStorage.getItem("user");
  const [islogged, setIsLogged] = useState();

  useEffect(() => {
    if (getUser) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
  }, [getUser]);

  const logout = () => {
    localStorage.removeItem("user");
  };
  return (
    <>
      <Navbar expand="md" bg="dark" variant="dark">
        <Link to="/home">
          <Navbar.Brand>
            <img
              alt="logo"
              src={imgLogo}
              height="30"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          {islogged ? (
            <Nav>
              <Link className="m-auto" to="/profil">
                profil
              </Link>

              <Link to="/home">
                <Button
                  onClick={logout}
                  className="m-1"
                  variant="danger"
                  size="sm"
                >
                  Se déconnecter
                </Button>
              </Link>
            </Nav>
          ) : (
            <Nav>
              <Link to="/connexion">
                <Button className="m-1" variant="outline-info">
                  Me connecter
                </Button>
              </Link>
              <Link to="/inscription">
                <Button className="m-1" variant="info">
                  M'inscrire
                </Button>
              </Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Header;
