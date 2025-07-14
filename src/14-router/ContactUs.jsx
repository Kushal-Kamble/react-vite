function ContactUs() {
  return (
    <div className="container mt-4">
      <h2>📞 Contact Us</h2>
      <p>Need help or want to collaborate? We'd love to hear from you!</p>
      <ul>
        <li>Email: support@myreactsite.com</li>
        <li>Phone: +91 9876543210</li>
        <li>Location: Pune, Maharashtra, India</li>
      </ul>
      <form className="mt-4">
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" className="form-control" placeholder="Enter your name" />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea className="form-control" rows="4" placeholder="Write your message here..."></textarea>
        </div>
        <button className="btn btn-primary">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;
