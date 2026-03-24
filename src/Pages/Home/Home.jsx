import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Home.css";
import ShimmerCard from "../../Components/UI/ShimmerCard"
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
  console.log("BASE URL:", import.meta.env.VITE_BASE_URL);
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

  

if (loading) {
  return (
    <div className="container py-4">
      <div className="row g-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ShimmerCard />
          </div>
        ))}
      </div>
    </div>
  );
};
  if (error)
    return <p className="text-center text-danger mt-5">Error: {error}</p>;

  return (
    <>
      {/* HERO */}
      <div className="hero">
        <div className="Hero_content text-center">
          <h2>Nandini Medical Hall</h2>
          <p>Your Trusted Medical Store</p>
          <NavLink to="/shop" className="btn btn-primary custom-btn hero-btn">
            Shop Now
          </NavLink>
        </div>
      </div>

      <div className="container py-4">
        {searchMedicine ? (
          <>
            <div className="mb-4 text-center">
              <h3 className="fw-bold text-primary">
                🔍 Search Results for "{searchMedicine}"
              </h3>
            </div>

            <div className="row g-4">
              {filteredProducts.map((item) => (
                <div
                  key={item._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                >
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
        ) : (
          <>
            {/* HEART */}
            <div className="section-header">
              <h4 className="fw-bold text-danger">❤️ Heart Care</h4>
              <NavLink to="/shop" className="btn btn-outline-danger custom-btn">
                View All →
              </NavLink>
            </div>

            <div className="row g-4">
              {featuredMedicines?.heartMedicine?.map((item) => (
                <div
                  key={item._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                >
                  <NavLink
                    to={`/product-Details/${item._id}`}
                    className="text-decoration-none"
                  >
                    <ProductCard item={item} />
                  </NavLink>
                </div>
              ))}
            </div>

            {/* BONES */}
            <div className="section-header mt-5">
              <h4 className="fw-bold text-success">💪 Bones & Muscles</h4>
              <NavLink
                to="/shop"
                className="btn btn-outline-success custom-btn"
              >
                View All →
              </NavLink>
            </div>

            <div className="row g-4">
              {featuredMedicines?.bonesMedicine?.map((item) => (
                <div
                  key={item._id}
                  className="col-12 col-sm-6 col-md-4 col-lg-3"
                >
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
