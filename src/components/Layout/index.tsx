import { Outlet } from "react-router-dom";
import Container from "../Container";
const Layout = () => {
  return (
    <div className="bg-content font-montserrat">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
