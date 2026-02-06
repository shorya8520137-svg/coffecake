export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Big Tree Cafe</h1>
        <p className="tagline">Your cozy corner on Golf Course Road</p>
      </header>

      <section className="hero">
        <div className="hero-content">
          <h2>Welcome to Big Tree Cafe</h2>
          <p>Experience the perfect blend of great coffee, delicious food, and warm atmosphere</p>
        </div>
      </section>

      <section className="menu">
        <h2>Our Menu</h2>
        
        <div className="menu-section">
          <h3>☕ Coffee</h3>
          <ul>
            <li>Espresso-based drinks</li>
            <li>Specialty lattes</li>
            <li>Hot & cold brew coffee</li>
          </ul>
        </div>

        <div className="menu-section">
          <h3>🍽️ Food</h3>
          <ul>
            <li>Sandwiches & wraps</li>
            <li>Fresh salads</li>
            <li>Quiches & pastries</li>
          </ul>
        </div>

        <div className="menu-section signature">
          <h3>⭐ Signature Items</h3>
          <ul>
            <li>Breakfast Burritos</li>
            <li>Avocado Toast</li>
            <li>Seasonal Fruit Cups</li>
          </ul>
        </div>
      </section>

      <section className="promotions">
        <h2>Current Promotions</h2>
        <div className="promo-grid">
          <div className="promo-card">
            <h4>Happy Hour</h4>
            <p>3 PM - 5 PM Daily</p>
            <p className="discount">10% off all drinks</p>
          </div>
          <div className="promo-card">
            <h4>BOGO Deal</h4>
            <p>Buy One, Get One Free</p>
            <p className="discount">Select pastries</p>
          </div>
          <div className="promo-card">
            <h4>Special Offer</h4>
            <p>Use code: BIGTREE15</p>
            <p className="discount">15% off entire order</p>
          </div>
        </div>
      </section>

      <section className="reviews">
        <h2>What People Say</h2>
        <blockquote>
          "Known for its cozy atmosphere, friendly staff, and delicious food"
          <cite>- Online Reviews</cite>
        </blockquote>
      </section>

      <footer className="footer">
        <p>📍 Golf Course Road</p>
        <p>Open Daily | Follow us on social media</p>
      </footer>

      <style jsx>{`
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
        }

        .header {
          text-align: center;
          padding: 40px 0 20px;
          border-bottom: 3px solid #8B4513;
        }

        .header h1 {
          font-size: 3rem;
          color: #2C1810;
          margin: 0;
        }

        .tagline {
          color: #666;
          font-style: italic;
        }

        .hero {
          background: linear-gradient(135deg, #8B4513 0%, #D2691E 100%);
          color: white;
          padding: 60px 40px;
          border-radius: 10px;
          margin: 40px 0;
          text-align: center;
        }

        .hero h2 {
          font-size: 2.5rem;
          margin: 0 0 20px;
        }

        .hero p {
          font-size: 1.2rem;
          opacity: 0.95;
        }

        .menu {
          padding: 40px 0;
        }

        .menu h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #2C1810;
          margin-bottom: 40px;
        }

        .menu-section {
          background: #FFF8DC;
          padding: 30px;
          margin: 20px 0;
          border-radius: 8px;
          border-left: 5px solid #8B4513;
        }

        .menu-section.signature {
          background: #FFE4B5;
          border-left-color: #D2691E;
        }

        .menu-section h3 {
          color: #2C1810;
          font-size: 1.5rem;
          margin-bottom: 15px;
        }

        .menu-section ul {
          list-style: none;
          padding: 0;
        }

        .menu-section li {
          padding: 8px 0;
          font-size: 1.1rem;
          color: #444;
        }

        .promotions {
          padding: 60px 0;
          background: #F5F5F5;
          margin: 40px -20px;
          padding-left: 20px;
          padding-right: 20px;
        }

        .promotions h2 {
          text-align: center;
          font-size: 2.5rem;
          color: #2C1810;
          margin-bottom: 40px;
        }

        .promo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          max-width: 900px;
          margin: 0 auto;
        }

        .promo-card {
          background: white;
          padding: 30px;
          border-radius: 10px;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s;
        }

        .promo-card:hover {
          transform: translateY(-5px);
        }

        .promo-card h4 {
          color: #8B4513;
          font-size: 1.5rem;
          margin: 0 0 10px;
        }

        .discount {
          color: #D2691E;
          font-weight: bold;
          font-size: 1.2rem;
        }

        .reviews {
          padding: 60px 0;
          text-align: center;
        }

        .reviews h2 {
          font-size: 2.5rem;
          color: #2C1810;
          margin-bottom: 30px;
        }

        blockquote {
          font-size: 1.3rem;
          font-style: italic;
          color: #555;
          max-width: 700px;
          margin: 0 auto;
          padding: 30px;
          border-left: 4px solid #8B4513;
          background: #FFF8DC;
        }

        cite {
          display: block;
          margin-top: 15px;
          font-size: 1rem;
          color: #888;
        }

        .footer {
          text-align: center;
          padding: 40px 0;
          border-top: 2px solid #8B4513;
          margin-top: 60px;
          color: #666;
        }

        .footer p {
          margin: 10px 0;
        }

        @media (max-width: 768px) {
          .header h1 {
            font-size: 2rem;
          }

          .hero h2 {
            font-size: 1.8rem;
          }

          .promo-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}
