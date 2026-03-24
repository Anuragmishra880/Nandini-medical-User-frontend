// Components/UI/ShimmerCard.jsx
import "./ShimmerCard.css";

export default function ShimmerCard() {
  return (
    <div className="bg-white border rounded-3 p-3 h-100 shadow-sm product-card">
      {/* Image placeholder */}
      <div className="text-center mb-3">
        <div className="shimmer shimmer-img"></div>
      </div>

      {/* Title placeholder */}
      <div className="shimmer shimmer-title mb-2"></div>

      {/* Price + Button placeholder */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-3 gap-2">
        <div className="shimmer shimmer-price"></div>
        <div className="shimmer shimmer-btn"></div>
      </div>
    </div>
  );
}
