function About() {
  return (
    <div className="container mt-4">
      <h2 className="mb-3">ℹ️ About Us</h2>
      <p className="lead">
        This project demonstrates how to use React Router for page navigation in a single-page application (SPA).
      </p>
      <div className="card mt-4 shadow">
        <div className="card-body">
          <h5 className="card-title">👨‍💻 Developer Info</h5>
          <p className="card-text">
            Created by <strong>Kushal Kamble</strong> and team. We love building user-friendly tools and intuitive UIs
            using React, Bootstrap, and modern JavaScript.
          </p>
          <a href="https://github.com/Kushal-Kamble" target="_blank" className="btn btn-dark" rel="noreferrer">
            Visit GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
