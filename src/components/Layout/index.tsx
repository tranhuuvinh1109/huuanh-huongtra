import { Outlet } from "react-router-dom";
import Container from "../Container";
const Layout = () => {
  return (
    <div className="font-montserrat">
      <Container>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
