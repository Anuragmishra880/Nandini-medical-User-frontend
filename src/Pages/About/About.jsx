import "./About.css";

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section text-center text-light d-flex align-items-center justify-content-center">
        <div>
          <h1 className="fw-bold">About Nandini Medical Hall</h1>
          <p className="lead">Your trusted partner in health and wellness</p>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h2 className="card-title text-danger">Our Mission</h2>
                <p className="card-text">
                  To deliver quality medicines and healthcare products with transparency,
                  trust, and compassion. We aim to make healthcare accessible and affordable
                  for everyone.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 mb-4">
            <div className="card shadow h-100">
              <div className="card-body">
                <h2 className="card-title text-primary">Our Vision</h2>
                <p className="card-text">
                  To be the most reliable medical store in the community, known for
                  excellence, care, and innovation in healthcare services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="row">
          {[
            { title: "Wide Range of Medicines", icon: "💊" },
            { title: "Affordable Pricing", icon: "💰" },
            { title: "Friendly Support", icon: "🤝" },
            { title: "Quality & Safety", icon: "✅" },
          ].map((feature, index) => (
            <div key={index} className="col-sm-6 col-md-3 mb-4">
              <div className="card h-100 text-center shadow-sm">
                <div className="card-body">
                  <div className="display-4">{feature.icon}</div>
                  <h5 className="mt-3">{feature.title}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}