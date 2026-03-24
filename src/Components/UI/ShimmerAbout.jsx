// Components/UI/ShimmerAbout.jsx
import "./ShimmerAbout.css";

export default function ShimmerAbout() {
  return (
    <div className="about-page">
      {/* Hero Section Shimmer */}
      <section className="hero-section text-center d-flex align-items-center justify-content-center"></section>

      {/* Mission & Vision Shimmer */}
      <div className="container my-5">
        <div className="row text-center">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="col-md-6 mb-4">
              <div className="card shadow h-100 p-3">
                <div className="shimmer shimmer-card-title mb-3"></div>
                <div className="shimmer shimmer-card-text"></div>
                <div className="shimmer shimmer-card-text"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Shimmer */}
      <div className="container my-5">
        <div className="shimmer shimmer-section-title mb-4 mx-auto"></div>
        <div className="row">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="col-sm-6 col-md-3 mb-4">
              <div className="card h-100 text-center shadow-sm p-3">
                <div className="shimmer shimmer-icon mb-3"></div>
                <div className="shimmer shimmer-feature-title"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
