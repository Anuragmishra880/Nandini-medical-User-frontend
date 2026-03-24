import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productAction } from "../../store/productAction";

import ProductCard from "../../Components/UI/ProductCard";
import ShimmerCard from "../../Components/UI/ShimmerCard";

export default function Shop({ searchMedicine }) {
  const { featuredMedicines, loading, error } = useSelector(
    (state) => state.product,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productAction());
  }, [dispatch]);
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
  }
  if (error)
    return <p className="text-center text-danger mt-5">Error: {error}</p>;

  return (
    <div className="container mt-4">
      {/* Search Results Info */}
      {searchMedicine && (
        <h5 className="text-muted mb-3">
          Showing results for: <span className="fw-bold">{searchMedicine}</span>
        </h5>
      )}

      {/* Product Grid */}
      <div className="row g-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div key={item._id} className="col-6 col-md-4 col-lg-3">
              <NavLink
                to={`/product-Details/${item._id}`}
                className="text-decoration-none"
              >
                <ProductCard item={item} />
              </NavLink>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">No products found</p>
        )}
      </div>
    </div>
  );
}
