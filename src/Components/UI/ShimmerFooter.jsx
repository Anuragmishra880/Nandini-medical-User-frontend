// Components/UI/ShimmerFooter.jsx
import "./ShimmerFooter.css";

export default function ShimmerFooter() {
  return (
    <footer className="footer">
      <div className="footerContainer">
        {/* Logo + tagline */}
        <div className="footerLogo">
          <div className="shimmer shimmer-logo mb-2"></div>
          <div className="shimmer shimmer-tagline"></div>
        </div>

        {/* Quick Links */}
        <div className="quickLinks">
          <div className="shimmer shimmer-heading mb-3"></div>
          <ul>
            {[...Array(3)].map((_, i) => (
              <li key={i}>
                <div className="shimmer shimmer-link"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footerContact">
          <div className="shimmer shimmer-heading mb-3"></div>
          <div className="shimmer shimmer-text mb-2"></div>
          <div className="shimmer shimmer-text"></div>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footerBottom text-center mt-3">
        <div className="shimmer shimmer-bottom"></div>
      </div>
    </footer>
  );
}
