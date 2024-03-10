import { Outlet, Link } from "react-router-dom";
import img2 from "./images/iconImage.png";

const Layout = () => {
  return (
    <>
      <nav className="nav-bar">
        <div className="nav-items-1">
          <img className="iconImg" src={img2} alt="Icon" />
          <h1 className="iconName"> BRAIN SHUTTLE</h1>
        </div>
        <div className="nav-items-2">
          <Link className="nav-items-2-a" to="/">
            HomePage
          </Link>
          <Link className="nav-items-2-a" to="/services">
            Services
          </Link>
          <Link className="nav-items-2-a" to="/aboutus">
            About Us
          </Link>
          <Link className="nav-items-2-a" to="/faqs">
            FAQs
          </Link>
        </div>
        <div className="nav-items-3">
          <Link className="signup" to="/signup">
            Sign up ➲
          </Link>
        </div>
      </nav>
      <Outlet></Outlet>
    </>
  );
};

export default Layout;
