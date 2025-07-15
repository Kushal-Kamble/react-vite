import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Courses from './pages/Courses';
import CourseDetail from './pages/CourseDetail';
import ContactUs from './pages/ContactUs';
import Faq from './pages/Faq';
import Testimonial from './pages/Testimonial';
import Faculty from './pages/Faculty';
import ThankYou from './pages/ThankYou';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './css/style.css';

function MainRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/testimonial" element={<Testimonial />} />
        <Route path="/faculty" element={<Faculty />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<NotFound />} />
      </Routes>


      <Footer />
    </BrowserRouter>
  );
}

export default MainRouter;
