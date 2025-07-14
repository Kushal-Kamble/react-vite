import { Link } from 'react-router-dom';

function ThankYou() {
  return (
    <div className="container text-center my-5">
      <h2 className="text-success">🎉 Thank You!</h2>
      <p>Your form has been submitted successfully. We will contact you soon.</p>
      <Link to="/" className="btn btn-warning mt-3">⬅️ Go to Home</Link>
    </div>
  );
}

export default ThankYou;
