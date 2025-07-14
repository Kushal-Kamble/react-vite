import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';

function ContactUs() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost/php-backend/send_email.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          navigate("/thank-you");
        } else {
          alert("❌ Error: " + data.message);
        }
      })
      .catch(err => alert("❌ Failed to send: " + err.message));
  };

  return (
    <div className="container my-5">
      <h2 className="section-title">📞 Contact Us</h2>
      <div className="row g-4">
        <div className="col-md-6" data-aos="fade-right">
          <form onSubmit={handleSubmit} className="form-container">
            <input type="text" name="name" onChange={handleChange} value={formData.name} className="form-control mb-2" placeholder="Your Name" required />
            <input type="email" name="email" onChange={handleChange} value={formData.email} className="form-control mb-2" placeholder="Your Email" required />
            <textarea name="message" onChange={handleChange} value={formData.message} rows="4" className="form-control mb-2" placeholder="Your Message..." required />
            <button type="submit" className="btn btn-warning w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
