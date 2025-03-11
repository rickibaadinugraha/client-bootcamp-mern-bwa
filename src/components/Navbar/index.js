import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Navlink from "../Navlink";
import { useNavigate } from "react-router";

function SNavbar() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Navlink action={() => navigate("/")}>Home</Navlink>
          <Navlink action={() => navigate("/categories")}>Categories</Navlink>
          <Navlink action={() => navigate("/talents")}>Talents</Navlink>
          <Navlink action={() => navigate("/events")}>Events</Navlink>
          <Navlink action={() => navigate("/participants")}>
            Participants
          </Navlink>
          <Navlink action={() => navigate("transactions")}>
            Transactions
          </Navlink>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
