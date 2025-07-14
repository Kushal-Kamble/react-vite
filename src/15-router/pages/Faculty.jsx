import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faculty() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const facultyList = [
    {
      name: 'Dr. Ramesh Kulkarni',
      subject: 'Marketing Management',
      image: '/assets/images/faculty1.jpg'
    },
    {
      name: 'Prof. Neha Joshi',
      subject: 'Financial Accounting',
      image: '/assets/images/faculty2.jpg'
    },
    {
      name: 'Dr. Anil Deshmukh',
      subject: 'Business Analytics',
      image: '/assets/images/faculty3.jpg'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="section-title">👨‍🏫 Our Faculty</h2>

      <div className="row g-4">
        {facultyList.map((fac, index) => (
          <div className="col-md-4" key={index} data-aos="flip-left">
            <div className="card shadow-sm border-0 h-100 text-center">
              <img
                src={fac.image}
                alt={fac.name}
                className="card-img-top rounded-top"
                style={{ height: '260px', objectFit: 'cover' }}
              />
              <div className="card-body bg-light">
                <h5 className="card-title">{fac.name}</h5>
                <p className="card-text text-muted">{fac.subject}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
