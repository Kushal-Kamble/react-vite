import { useParams } from "react-router-dom";
import courses from "../data/courses";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CourseDetail() {
const { courseId } = useParams();
const course = courses.find(c => c.id === courseId);

useEffect(() => {
AOS.init({ duration: 800 });
}, []);

if (!course) return (
<div className="container py-5 text-center">
<h2 className="text-danger">❌ Course Not Found</h2>
</div>
);

return (
<div className="container py-5">
<h2 className="section-title text-center mb-4 text-warning fw-bold" data-aos="fade-down">
{course.title}
</h2>

  <div className="row g-4">
    {/* Left: Image */}
    <div className="col-md-6" data-aos="fade-right">
      <img
        src={course.image}
        alt={course.title}
        className="img-fluid rounded shadow"
        style={{ maxHeight: "400px", objectFit: "cover" }}
      />
    </div>

    {/* Right: Info */}
    <div className="col-md-6" data-aos="fade-left">
      <p className="fs-5 text-muted">{course.description}</p>

      <div className="bg-light p-3 rounded shadow-sm mt-4">
        <h5 className="mb-3 text-dark">💸 Fee Structure</h5>
        <table className="table table-bordered table-sm">
          <thead className="table-warning text-center">
            <tr>
              <th>Option</th><th>I</th><th>II</th><th>III</th><th>Total</th>
            </tr>
          </thead>
          <tbody className="text-center">
            <tr>
              <td><strong>Lumpsum</strong></td>
              <td colSpan="3">-</td>
              <td>{course.fee.lumpsum}</td>
            </tr>
            <tr>
              <td><strong>Installment</strong></td>
              <td>{course.fee.installment[0]}</td>
              <td>{course.fee.installment[1]}</td>
              <td>{course.fee.installment[2]}</td>
              <td>{course.fee.total}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="mt-4 bg-light p-3 rounded shadow-sm">
        <h6 className="mb-2">🎓 Scholarship</h6>
        <ul className="mb-0">
          {course.scholarship.map((item, i) => (
            <li key={i} className="text-dark">{item}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>

  {/* Call to Action */}
  <div className="text-center mt-5" data-aos="zoom-in">
    <a href="/contact" className="btn btn-warning px-4 py-2 me-2">📥 Apply Now</a>
    <a href="#" className="btn btn-outline-warning px-4 py-2">📄 Download Brochure</a>
  </div>
</div>




);
}

export default CourseDetail;
