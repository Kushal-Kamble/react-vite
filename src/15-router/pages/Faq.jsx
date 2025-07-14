import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Faq() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const faqs = [
    {
      question: 'What is the duration of PGDM program?',
      answer: 'The PGDM program is a 2-year AICTE-approved course divided into 4 semesters.'
    },
    {
      question: 'Is the course approved by any government body?',
      answer: 'Yes, all our PGDM & PGDBA courses are approved by AICTE and recognized by the government.'
    },
    {
      question: 'Is this a full-time or distance learning course?',
      answer: 'It is a flexible distance learning course, suitable for working professionals and students.'
    },
    {
      question: 'Do you offer placement support?',
      answer: 'Yes, we provide 100% placement assistance and interview preparation support.'
    }
  ];

  return (
    <div className="container my-5">
      <h2 className="section-title">❓ Frequently Asked Questions</h2>

      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index} data-aos="fade-up">
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === 0 ? 'true' : 'false'}
                aria-controls={`collapse${index}`}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
