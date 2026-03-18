import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Home.css";
import { productAction } from "../../store/productAction";
import { useEffect } from "react";

import ProductCard from "../../Components/UI/ProductCard";

export default function Home({ searchMedicine }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);

  const { featuredMedicines, loading, error } = useSelector(
    (state) => state.product,
  );

  const allProducts = [
    ...(featuredMedicines?.heartMedicine || []),
    ...(featuredMedicines?.bonesMedicine || []),
    ...(featuredMedicines?.dermaMedicine || []),
  ];

  const filteredProducts = searchMedicine
    ? allProducts.filter((item) =>
        item.productTitle?.toLowerCase().includes(searchMedicine.toLowerCase()),
      )
    : allProducts;

  if (loading) return <p className="text-center mt-5">Loading...</p>;
  if (error)
    return <p className="text-center text-danger mt-5">Error: {error}</p>;

  return (
    <>
      {/* Hero Section */}
      <div className="hero">
        <div className="Hero_content text-center">
          <h2 className="fw-bold">Nandini Medical Hall</h2>
          <p className="text-muted">Your Trusted Medical Store</p>
          <NavLink to="/shop" className="btn btn-primary px-4">
            Shop Now
          </NavLink>
        </div>
      </div>

      <div className="container py-4">
        {searchMedicine ? (
          <>
            {/* Search Header */}
            <div className="mb-4 text-center">
              <h3 className="fw-bold text-primary">
                🔍 Search Results for "{searchMedicine}"
              </h3>
              <hr style={{ width: "80px", margin: "10px auto" }} />
            </div>

            {/* Search Grid */}
            <div className="row g-4">
              {filteredProducts.map((item) => (
                <div key={item._id} className="col-6 col-md-3">
                  <NavLink
                    to={`/product-Details/${item._id}`}
                    className="text-decoration-none"
                  >
                    <ProductCard item={item} />
                  </NavLink>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <p className="text-center text-muted mt-4 fs-5">
                  ❌ No products found
                </p>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Heart Care Section */}
            <div className="d-flex flex-column flex-md-row align-items-md-center mb-3 mt-4 gap-2">
              <h4 className="fw-bold text-danger">❤️ Heart Care</h4>
              <NavLink
                to="/shop"
                className="btn btn-outline-danger btn-sm ms-md-auto"
              >
                View All →
              </NavLink>
            </div>
            <div className="row g-4">
              {featuredMedicines?.heartMedicine?.map((item) => (
                <div key={item._id} className="col-6 col-md-3">
                  <NavLink
                    to={`/product-Details/${item._id}`}
                    className="text-decoration-none"
                  >
                    <ProductCard item={item} />
                  </NavLink>
                </div>
              ))}
            </div>

            {/* Bones Section */}
            <div className="d-flex flex-column flex-md-row align-items-md-center mb-3 mt-5 gap-2">
              <h4 className="fw-bold text-success">💪 Bones & Muscles</h4>
              <NavLink
                to="/shop"
                className="btn btn-outline-danger btn-sm ms-md-auto"
              >
                View All →
              </NavLink>
            </div>
            <div className="row g-4">
              {featuredMedicines?.bonesMedicine?.map((item) => (
                <div key={item._id} className="col-6 col-md-3">
                  <NavLink
                    to={`/product-Details/${item._id}`}
                    className="text-decoration-none"
                  >
                    <ProductCard item={item} />
                  </NavLink>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </>
  );
}
