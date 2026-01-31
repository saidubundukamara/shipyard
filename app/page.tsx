export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="nav">
        <div className="nav-logo">Shipyard</div>
        <ul className="nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#hours">Hours</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav-cta">Reserve a Table</button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-subtitle">Coastal Dining Experience</p>
          <h1 className="hero-title">
            Where the Sea <span>Meets</span> the Plate updated
          </h1>
          <p className="hero-description">
            Fresh catches, timeless recipes, and an atmosphere that captures the essence of waterfront dining.
          </p>
          <div className="hero-buttons">
            <a href="#menu" className="btn-primary">View Menu</a>
            <a href="#contact" className="btn-secondary">Make a Reservation</a>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="section" id="menu">
        <div className="section-header">
          <p className="section-subtitle">Our Specialties</p>
          <h2 className="section-title">Featured Dishes</h2>
        </div>
        <div className="dishes-grid">
          <div className="dish-card">
            <div className="dish-image">🦞</div>
            <h3 className="dish-name">Butter Poached Lobster</h3>
            <p className="dish-description">
              Maine lobster tail, drawn butter, seasonal vegetables, saffron risotto
            </p>
            <p className="dish-price">$68</p>
          </div>
          <div className="dish-card">
            <div className="dish-image">🐟</div>
            <h3 className="dish-name">Pan-Seared Branzino</h3>
            <p className="dish-description">
              Mediterranean sea bass, lemon caper sauce, roasted fingerlings
            </p>
            <p className="dish-price">$45</p>
          </div>
          <div className="dish-card">
            <div className="dish-image">🦪</div>
            <h3 className="dish-name">Oysters Rockefeller</h3>
            <p className="dish-description">
              Half dozen east coast oysters, spinach, pernod, parmesan crust
            </p>
            <p className="dish-price">$28</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-image">⚓</div>
        <div className="about-content">
          <h2>A Legacy of <span className="accent-text">Coastal Excellence</span></h2>
          <p>
            For over two decades, Shipyard has been the destination for those who appreciate the finest seafood prepared with passion and precision. Our chefs work directly with local fishermen to bring the freshest catches to your table.
          </p>
          <p>
            Nestled on the waterfront, our restaurant offers more than just a meal—it's an experience that connects you to the maritime heritage of our community.
          </p>
          <a href="#contact" className="btn-primary">Learn Our Story</a>
        </div>
      </section>

      {/* Hours Section */}
      <section className="hours-section" id="hours">
        <div className="hours-content">
          <p className="section-subtitle">Visit Us</p>
          <h2 className="section-title">Opening Hours</h2>
          <div className="hours-grid">
            <div className="hours-row">
              <span className="hours-day">Monday - Thursday</span>
              <span className="hours-time">5:00 PM - 10:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Friday - Saturday</span>
              <span className="hours-time">5:00 PM - 11:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Sunday</span>
              <span className="hours-time">4:00 PM - 9:00 PM</span>
            </div>
            <div className="hours-row">
              <span className="hours-day">Sunday Brunch</span>
              <span className="hours-time">11:00 AM - 2:00 PM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <p className="section-subtitle">Get in Touch</p>
        <h2 className="section-title">Reserve Your Table</h2>
        <div className="contact-info">
          <div className="contact-item">
            <p className="contact-label">Address</p>
            <p className="contact-value">123 Harbor View Drive<br />Seaside, CA 93955</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">Phone</p>
            <p className="contact-value">(831) 555-0123</p>
          </div>
          <div className="contact-item">
            <p className="contact-label">Email</p>
            <p className="contact-value">reservations@shipyard.com</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-logo">Shipyard</p>
        <p className="footer-text">© 2026 Shipyard Restaurant. All rights reserved.</p>
      </footer>
    </>
  );
}
