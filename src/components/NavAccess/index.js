import { Nav } from "react-bootstrap";

function Navlink({ role, roles, action, children }) {
  // console.log("role", role);
  // console.log("roles", roles);

  let isHas = roles.indexOf(role); // 1 / 0
  // console.log("isHas", isHas);
  return <>{isHas >= 0 && <Nav.Link onClick={action}>{children}</Nav.Link>}</>;
}

export default Navlink;
