import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Track Your Blood Pressure</h1>
        <p>Simple, effective, and mobile-friendly tracking of your daily blood pressure.</p>
      </header>

      <main className="home-main">
        <div className="home-actions">
          <Link to="/signup" className="btn-primary">
            Get Started
          </Link>
          <Link to="/login" className="btn-secondary">
            Log In
          </Link>
        </div>

        <section className="home-info">
          <h2>Stay on Top of Your Health</h2>
          <p>Our app helps you record your blood pressure measurements and track your progress over time with simple graphs and daily logs.</p>
          <p>Sign up today and take control of your health journey!</p>
        </section>
      </main>

      <footer className="home-footer">
        <p>© 2024 Blood Pressure Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
