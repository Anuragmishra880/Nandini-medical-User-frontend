import "./ShimmerContact.css";

export default function ShimmerContact() {
  return (
    <div className="ContactSection">
      {/* TEXT SHIMMER */}
      <div className="Contact">
        <div className="shimmer title shimmer"></div>
        <div className="shimmer text shimmer"></div>
        <div className="shimmer text shimmer"></div>
        <div className="shimmer btn shimmer"></div>
      </div>

      {/* MAP SHIMMER */}
      <div className="map-shimmer shimmer"></div>
    </div>
  );
}
