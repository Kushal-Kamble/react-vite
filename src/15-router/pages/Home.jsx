import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AdmissionForm from '../components/AdmissionForm';
import CoursesSection from '../components/CoursesSection';

function Home() {
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true, // Animation happens only once
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="#">
      {/* Hero Section */}
      <section className="home-section py-5">
        <div className="container">
          <div className="row justify-content-between align-items-center min-vh-75">
            {/* Left Content */}
            <div className="col-lg-6 col-md-6 text-white mb-4 mb-md-0" data-aos="fade-right">
              <h1 className="display-5 fw-bold mb-3">
                <span className="text-warning">MITSDE</span> Brings You a Golden Opportunity!
              </h1>
              
              <h2 className="h4 mb-3">
                Introducing <strong className="text-warning">Dual Degree EMBA Program</strong>
              </h2>
              
              <div className="badge bg-warning text-dark fs-5 my-3 px-3 py-2">
                Admissions Open 2025–26
              </div>
              
              <div className="alert alert-warning d-inline-block mb-3" role="alert">
                <h3 className="h5 mb-0">
                  Last day left!! Apply before <span className="text-danger fw-bold">12<sup>th</sup> JULY'25</span>
                </h3>
              </div>
              
              <div className="key-features">
                <p className="lead mb-2">
                  Affordable Fees with No-Cost EMI Starting at <strong className="text-warning fs-4">₹1200/-*</strong>
                </p>
                
                <ul className="list-unstyled mt-3">
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-warning me-2"></i>
                    Suitable for Working Professionals
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-warning me-2"></i>
                    Flexible Learning Modules — Learn Anytime, Anywhere
                  </li>
                  <li className="mb-2">
                    <i className="fas fa-check-circle text-warning me-2"></i>
                    Industry-Relevant Curriculum
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Form */}
            <div className="col-lg-5 col-md-6" data-aos="fade-left">
              <div className="form-container">
                <AdmissionForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="courses-section py-5 bg-light">
        <div className="container">
          <CoursesSection />
        </div>
      </section>
    </div>
  );
}

export default Home;