// import React, { useState } from "react";
// import "./Header.css";
// import { NavLink, useNavigate } from "react-router-dom";
// import { Cart } from "react-bootstrap-icons";
// import logo from "../../assets/logo.svg";
// import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../store/authSlice";

// const Navbar = ({ setSearchMedicine }) => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const user = useSelector((state) => state.auth.user);
//   const { totalQuantity } = useSelector((state) => state.cart);

//   const [showSearch, setShowSearch] = useState(false);

//   const handleSubmit = (e) => e.preventDefault();

//   const handleCartClick = () => {
//     if (!user) {
//       alert("Please login first");
//       navigate("/login");
//     } else {
//       navigate("/cart");
//     }
//   };

//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top">
//         <div className="container d-flex align-items-center justify-content-between">
//           {/* LEFT: Toggle */}
//           <button
//             className="navbar-toggler d-lg-none"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarNav"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* CENTER: Logo (desktop only) */}
//           <NavLink className="navbar-brand d-none d-lg-block mx-auto" to="/">
//             <img src={logo} alt="logo" height="40" />
//           </NavLink>

//           {/* RIGHT: Search + Cart */}
//           <div className="d-flex align-items-center gap-2">
//             {/* Mobile Search Icon */}
//             <button
//               className="btn btn-outline-primary d-lg-none"
//               onClick={() => setShowSearch(!showSearch)}
//             >
//               🔍
//             </button>

//             {/* Cart */}
//             <button
//               className="btn btn-primary position-relative"
//               onClick={handleCartClick}
//             >
//               <Cart size={20} />
//               <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
//                 {totalQuantity}
//               </span>
//             </button>
//           </div>

//           {/* COLLAPSE MENU */}
//           <div className="collapse navbar-collapse mt-3 mt-lg-0" id="navbarNav">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   to="/"
//                   end
//                 >
//                   Home
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   to="/shop"
//                 >
//                   Shop
//                 </NavLink>
//               </li>
//               {/*
//               <li className="nav-item">
//                 <NavLink className="nav-link" to="/categories">Categories</NavLink>
//               </li> */}

//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   to="/contact"
//                 >
//                   Contact
//                 </NavLink>
//               </li>

//               <li className="nav-item">
//                 <NavLink
//                   className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   }
//                   to="/about"
//                 >
//                   About
//                 </NavLink>
//               </li>

//               {!user ? (
//                 <>
//                   <li className="nav-item">
//                     <NavLink
//                       className={({ isActive }) =>
//                         isActive ? "nav-link active" : "nav-link"
//                       }
//                       to="/login"
//                     >
//                       Login
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink
//                       className={({ isActive }) =>
//                         isActive ? "nav-link active" : "nav-link"
//                       }
//                       to="/register"
//                     >
//                       Register
//                     </NavLink>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <li className="nav-item">
//                     <NavLink
//                       className={({ isActive }) =>
//                         isActive ? "nav-link active" : "nav-link"
//                       }
//                       onClick={() => dispatch(logout())}
//                     >
//                       Logout
//                     </NavLink>
//                   </li>
//                   <li className="nav-item">
//                     <NavLink  className={({ isActive }) =>
//                     isActive ? "nav-link active" : "nav-link"
//                   } to="/order-checkout">
//                       Orders
//                     </NavLink>
//                   </li>
//                 </>
//               )}
//             </ul>

//             {/* Desktop Search */}
//             <form
//               className="d-none d-lg-flex align-items-center"
//               onSubmit={handleSubmit}
//             >
//               <input
//                 className="form-control me-2"
//                 type="search"
//                 placeholder="Search products..."
//                 onChange={(e) =>
//                   setSearchMedicine(e.target.value.toLowerCase())
//                 }
//               />
//               <button className="btn btn-outline-primary">Search</button>
//             </form>
//           </div>
//         </div>
//       </nav>

//       {/* 🔥 Mobile Sliding Search */}
//       <div className={`mobile-search ${showSearch ? "active" : ""}`}>
//         <form onSubmit={handleSubmit} className="d-flex p-2">
//           <input
//             type="search"
//             className="form-control me-2"
//             placeholder="Search medicines..."
//             autoFocus
//             onChange={(e) => setSearchMedicine(e.target.value.toLowerCase())}
//           />
//           <button className="btn btn-primary">Go</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Navbar;


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

  return (
   <nav className="navbar navbar-expand-md custom-navbar shadow-sm sticky-top">
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
        <li className="nav-item"><NavLink className="nav-link" to="/" end>Home</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/shop">Shop</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/categories">Categories</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/contact">Contact</NavLink></li>
        <li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>
        {/* Auth Links */}
        {!user ? (
          <>
            <li className="nav-item"><NavLink className="nav-link" to="/login">Login</NavLink></li>
            <li className="nav-item"><NavLink className="nav-link" to="/register">Register</NavLink></li>
          </>
        ) : (
          <>
            <li className="nav-item">
              <button className="nav-link btn btn-link p-0" onClick={() => dispatch(logout())}>
                Logout
              </button>
            </li>
            <li className="nav-item"><NavLink className="nav-link" to="/order-checkout">Orders</NavLink></li>
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
              onChange={(e) => setSearchMedicine(e.target.value.toLowerCase())}
            />
          </form>
        </div>

        {/* Cart */}
        <button className="cart-btn" onClick={handleCartClick}>
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
