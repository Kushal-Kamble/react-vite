function AdmissionForm() {
  return (
    <div className="form-container" data-aos="zoom-in">
      <h4 className="mb-3">📄 Admission Form</h4>
      <form>
        <input type="text" className="form-control mb-2" placeholder="Full Name" />
        <input type="email" className="form-control mb-2" placeholder="Email Address" />
        <input type="tel" className="form-control mb-2" placeholder="Mobile Number" />
        <select className="form-select mb-2">
          <option>Choose Course</option>
          <option>PGDM</option>
          <option>PGDBA</option>
          <option>Digital Marketing</option>
        </select>
        <button className="btn btn-warning w-100">Apply Now</button>
      </form>
    </div>
  );
}

export default AdmissionForm;
