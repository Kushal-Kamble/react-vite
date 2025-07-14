import AdmissionForm from '../components/AdmissionForm';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-md-6" data-aos="fade-right">
          <img src="/assets/images/banner.png" alt="Banner" className="banner-img" />
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <AdmissionForm />
        </div>
      </div>
    </div>
  );
}

export default Home;
