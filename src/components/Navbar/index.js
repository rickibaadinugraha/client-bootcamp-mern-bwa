import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Navlink from "../NavAccess";
import { useNavigate } from "react-router";
import {
  accessCategories,
  accessEvents,
  accessOrders,
  accessParticipant,
  accessPayments,
  accessTalents,
  accessOrganizers,
  accessAdmin,
} from "../../const/access";

function SNavbar() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      let { role } = localStorage.getItem("auth")
        ? JSON.parse(localStorage.getItem("auth"))
        : {};

      setRole(role);
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Nav className="me-auto">
          <Navlink
            role={role}
            roles={accessCategories.read}
            action={() => navigate("/")}
          >
            Home
          </Navlink>
          <Navlink
            role={role}
            roles={accessCategories.read}
            action={() => navigate("/categories")}
          >
            Categories
          </Navlink>
          <Navlink
            role={role}
            roles={accessTalents.read}
            action={() => navigate("/talents")}
          >
            Talents
          </Navlink>
          <Navlink
            role={role}
            roles={accessPayments.read}
            action={() => navigate("/payments")}
          >
            Payments
          </Navlink>
          <Navlink
            role={role}
            roles={accessOrganizers.read}
            action={() => navigate("/organizers")}
          >
            Organizers
          </Navlink>
          <Navlink
            role={role}
            roles={accessAdmin.read}
            action={() => navigate("/admin")}
          >
            Admins
          </Navlink>
          <Navlink
            role={role}
            roles={accessEvents.read}
            action={() => navigate("/events")}
          >
            Events
          </Navlink>
          <Navlink
            role={role}
            roles={accessParticipant.read}
            action={() => navigate("/participants")}
          >
            Participants
          </Navlink>
          <Navlink
            role={role}
            roles={accessOrders.read}
            action={() => navigate("/orders")}
          >
            Orders
          </Navlink>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default SNavbar;
