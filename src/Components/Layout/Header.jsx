import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Cart } from "react-bootstrap-icons";
import logo from "../../assets/logo.svg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";

const Navbar = ({ setSearchMedicine }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.user);
  const { totalQuantity } = useSelector((state) => state.cart);

  const handleSubmit = (e) => e.preventDefault();

  const handleCartClick = () => {
    if (!user) {
      alert("Please login first");
      navigate("/login");
    } else {
      navigate("/cart");
    }
  };
  const closeMenu = () => {
    const navbar = document.getElementById("navbarNav");
    const closeNavbar = window.bootstrap.Collapse.getInstance(navbar);
    if (closeNavbar) {
      closeNavbar.hide();
    }
  };
  return (
    <nav
      className="navbar navbar-expand-md custom-navbar shadow-sm sticky-top"
      onClick={closeMenu}
    >
      <div className="container">
        {/* Logo */}
        <NavLink className="navbar-brand" to="/">
          <img src={logo} alt="logo" height="40" />
        </NavLink>

        {/* Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapse */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink end className="nav-link" to="/" onClick={closeMenu}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" onClick={closeMenu}>
                Shop
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/categories"
                onClick={closeMenu}
              >
                Categories
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" onClick={closeMenu}>
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" onClick={closeMenu}>
                About
              </NavLink>
            </li>
            {/* Auth Links */}
            {!user ? (
              <>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/login" onClick={closeMenu}>
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/register"
                    onClick={closeMenu}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <button
                    className="nav-link p-0"
                    onClick={() => {
                      dispatch(logout());
                      closeMenu();
                    }}
                  >
                    Logout
                  </button>
                </li>
                <li className="nav-item ">
                  <NavLink
                    className="nav-link"
                    to="/order-checkout"
                    onClick={closeMenu}
                  >
                    Orders
                  </NavLink>
                </li>
              </>
            )}
          </ul>

          {/* Right Section */}
          <div className="nav-right">
            {/* Search */}
            <div className="search-box">
              <form onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Search medicines..."
                  onChange={(e) =>
                    setSearchMedicine(e.target.value.toLowerCase())
                  }
                />
              </form>
            </div>

            {/* Cart */}

            <button
              className="cart-btn nav-link"
              onClick={() => {
                closeMenu();
                handleCartClick();
              }}
            >
              <Cart size={20} />
              <span>{totalQuantity}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
