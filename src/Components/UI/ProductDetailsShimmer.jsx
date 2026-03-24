// Components/UI/ShimmerProductDetails.jsx
import "./ProductDetailsShimmer.css";

export default function ProductDetailsShimmer() {
  return (
    <div className="product-details">
      {/* Image shimmer */}
      <div className="product-image">
        <div className="shimmer shimmer-img"></div>
      </div>

      {/* Info shimmer */}
      <div className="product-info">
        <div className="shimmer shimmer-title mb-3"></div>
        <div className="shimmer shimmer-text mb-2"></div>
        <div className="shimmer shimmer-text mb-2"></div>
        <div className="shimmer shimmer-price mb-3"></div>

        {/* Actions shimmer */}
        <div className="product-actions d-flex gap-3">
          <div className="shimmer shimmer-btn"></div>
          <div className="shimmer shimmer-btn"></div>
        </div>
      </div>
    </div>
  );
}
