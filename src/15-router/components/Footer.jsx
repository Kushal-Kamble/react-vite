function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <div className="container">
        <p className="mb-0">© {new Date().getFullYear()} EduPortal. All Rights Reserved.</p>
        <small>📧 info@eduportal.com | 📞 +91 9876543210</small>
      </div>
    </footer>
  );
}

export default Footer;
