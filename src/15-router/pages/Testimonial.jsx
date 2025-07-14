import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const testimonials = [
    {
      name: 'Kushal Kamble',
      city: 'Pune',
      feedback: 'The PGDM program really helped me upskill. The content and support team are top-notch!',
      image: '/assets/images/student1.jpg'
    },
    {
      name: 'Shravani Suryavanshi',
      city: 'Nagpur',
      feedback: 'I was able to manage my job and study together. The course is very flexible and practical.',
      image: '/assets/images/student2.jpg'
    },
    {
      name: 'Raj Marathe',
      city: 'Mumbai',
      feedback: 'After completing PGDBA, I got promoted in my company. Highly recommend these courses!',
      image: '/assets/images/student3.jpg'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="section-title">⭐ Student Testimonials</h2>
      <div className="row g-4">
        {testimonials.map((stu, index) => (
          <div className="col-md-4" key={index} data-aos="zoom-in">
            <div className="card shadow-sm border-0 h-100">
              <img src={stu.image} className="card-img-top rounded-top" alt={stu.name} />
              <div className="card-body bg-light">
                <h5 className="card-title">{stu.name} <span className="text-muted fs-6">({stu.city})</span></h5>
                <p className="card-text">“{stu.feedback}”</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
