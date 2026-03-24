// Components/UI/ShimmerCart.jsx
import "./ShimmerCart.css";


export default function ShimmerCart() {
  return (
    <div className="container cart-page mt-4">
      <h2 className="mb-4 text-center">🛒 Your Cart</h2>

      {/* Cart Items Placeholder */}
      {[...Array(3)].map((_, i) => (
        <div key={i} className="cart-item card shadow-sm mb-3">
          <div className="row align-items-center p-3 g-3">
            {/* Product Image */}
            <div className="col-12 col-md-2 text-center">
              <div className="shimmer shimmer-img"></div>
            </div>

            {/* Product Info */}
            <div className="col-12 col-md-3 text-center text-md-start">
              <div className="shimmer shimmer-title mb-2"></div>
              <div className="shimmer shimmer-text"></div>
            </div>

            {/* Quantity Controls */}
            <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-start gap-2">
              <div className="shimmer shimmer-qty-btn"></div>
              <div className="shimmer shimmer-qty-number"></div>
              <div className="shimmer shimmer-qty-btn"></div>
            </div>

            {/* Subtotal */}
            <div className="col-12 col-md-2 text-center">
              <div className="shimmer shimmer-price"></div>
            </div>

            {/* Remove Button */}
            <div className="col-12 col-md-2 text-center text-md-end">
              <div className="shimmer shimmer-btn"></div>
            </div>
          </div>
        </div>
      ))}

      {/* Cart Summary Placeholder */}
      <div className="cart-summary card shadow-sm mt-4">
        <div className="card-body d-flex flex-column flex-md-row justify-content-between align-items-center">
          <div className="shimmer shimmer-total"></div>
          <div className="d-flex flex-column flex-md-row gap-2">
            <div className="shimmer shimmer-btn"></div>
            <div className="shimmer shimmer-btn"></div>
          </div>
        </div>
      </div>
    </div>
  );
}