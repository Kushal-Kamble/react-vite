function NotFound() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-3">🚫 404</h1>
      <p className="lead">Oops! The page you're looking for doesn't exist.</p>
      <a href="/" className="btn btn-primary mt-3">Go Back Home</a>
      <img
        src="https://source.unsplash.com/500x300/?confused,404"
        alt="Page not found"
        className="img-fluid mt-4 rounded"
      />
    </div>
  );
}

export default NotFound;
