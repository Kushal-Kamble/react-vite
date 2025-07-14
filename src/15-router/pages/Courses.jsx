import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Courses() {
  const [activeTab, setActiveTab] = useState('pgdm');

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const tabData = {
    pgdm: {
      title: '📘 Post Graduate Diploma in Management (PGDM)',
      desc: '2-year AICTE-approved program covering Business, Finance, HR, Marketing, Operations. Ideal for future managers & entrepreneurs.'
    },
    pgdba: {
      title: '📗 Post Graduate Diploma in Business Administration (PGDBA)',
      desc: 'Designed for working professionals. Covers Management, Accounting, and Strategic Analysis. Flexible and career-oriented.'
    },
    digital: {
      title: '📕 Digital Marketing Program',
      desc: 'Covers SEO, SEM, Social Media, Email Marketing & Analytics. 100% practical with live projects & certifications.'
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="section-title">📚 Our Courses</h2>

      {/* Tabs */}
      <div className="d-flex gap-3 justify-content-center mb-4">
        <button
          className={`btn ${activeTab === 'pgdm' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => setActiveTab('pgdm')}
        >
          PGDM
        </button>
        <button
          className={`btn ${activeTab === 'pgdba' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => setActiveTab('pgdba')}
        >
          PGDBA
        </button>
        <button
          className={`btn ${activeTab === 'digital' ? 'btn-warning' : 'btn-outline-warning'}`}
          onClick={() => setActiveTab('digital')}
        >
          Digital Marketing
        </button>
      </div>

      {/* Tab Content */}
      <div className="p-4 rounded shadow-sm bg-light" data-aos="fade-up">
        <h4 className="mb-2">{tabData[activeTab].title}</h4>
        <p>{tabData[activeTab].desc}</p>
      </div>
    </div>
  );
}

export default Courses;
