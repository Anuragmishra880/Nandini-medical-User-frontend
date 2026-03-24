// Components/UI/ShimmerCheckout.jsx
import "./ShimmerOrderCheckout.css";

export default function ShimmerOrderCheckout() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Order Summary</h2>

      <div className="row">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="col-md-6 col-lg-4 mb-3">
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <div className="shimmer shimmer-title mb-3"></div>
                <div className="shimmer shimmer-text mb-2"></div>
                <div className="shimmer shimmer-text mb-2"></div>
                <div className="shimmer shimmer-price"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Section */}
      <div className="d-flex justify-content-between align-items-center mt-4 p-3 border-top">
        <div className="shimmer shimmer-total"></div>
        <div className="shimmer shimmer-btn-lg"></div>
      </div>
    </div>
  );
}
