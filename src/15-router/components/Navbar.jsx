import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#ff9f43' }}>
      <div className="container">
        <Link className="navbar-brand fw-bold text-white" to="/">🎓 EduPortal</Link>
        <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/courses">Courses</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/contact">Contact</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/faq">FAQ</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/testimonial">Testimonials</Link></li>
            <li className="nav-item"><Link className="nav-link text-white fw-semibold" to="/faculty">Faculty</Link></li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
