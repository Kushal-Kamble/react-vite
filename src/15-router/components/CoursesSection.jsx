import { Link } from 'react-router-dom';
import courses from '../data/courses';

function CoursesSection() {
  return (
    <section className="popular-courses py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5 fw-bold text-orange">📘 Popular Management Courses</h2>
        <div className="row g-4">
          {courses.map((course) => (
            <div className="col-md-6 col-lg-4" key={course.id}>
              <div className="card h-100 shadow-sm border-0 course-card">
                <img src={course.image} className="card-img-top rounded-top" alt={course.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-orange">{course.title}</h5>
                  <p className="card-text small text-muted">{course.description.slice(0, 100)}...</p>
                  <div className="mt-auto">
                    <Link to={`/courses/${course.id}`} className="btn btn-outline-primary btn-sm me-2">
                      View More
                    </Link>
                    <button className="btn btn-warning btn-sm">Download Brochure</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
