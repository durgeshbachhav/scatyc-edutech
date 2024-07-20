import { Link } from 'react-router-dom';
import useAccordion from '../../../../hooks/useAccordion';

const Faq_Section = () => {
  const [activeIndex, handleAccordion] = useAccordion(0);
  return (
    <section className='faq-section'>
      {/* Section Spacer */}
      <div className='pb-20 xl:pb-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          <div className='grid grid-cols-1 gap-y-10 md:grid-cols-2'>
            {/* FAQ Left Block */}
            <div className='jos flex flex-col' data-jos_animation='fade-right'>
              {/* Section Content Block */}
              <div className='mb-6'>
                <div className='mx-auto md:mx-0 md:max-w-none'>
                  <h2>Reach Out for More Information</h2>
                </div>
              </div>
              {/* Section Content Block */}
              <div className='text-lg leading-[1.4] lg:text-[21px]'>
                <p className='mb-7 last:mb-0'>
                  Our courses are designed to be easily accessible, allowing you to quickly start learning and applying new skills without lengthy enrollment processes. Whether you're interested in web development, data science, or digital marketing, we're here to provide the information and support you need.
                </p>
                <Link
                  to='/faq-1'
                  className='button mt-5 rounded-[50px] border-2 border-black bg-black py-4 text-white after:bg-colorOrangyRed hover:border-colorOrangyRed hover:text-white'
                >
                  Ask you questions
                </Link>
              </div>
            </div>
            {/* FAQ Left Block */}
            {/* FAQ Right Block */}
            <div
              className='jos md:ml-10 lg:ml-20 xl:ml-32'
              data-jos_animation='fade-left'
            >
              {/* Accordion*/}
              <ul className='accordion'>
                {/* Accordion items */}
                <li
                  className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex == 0 && 'active'
                    }`}
                >
                  <div
                    onClick={() => handleAccordion(0)}
                    className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                  >
                    <p>How do I enroll in Scatyc courses?</p>
                    <div className='accordion-icon'>
                      <img src='assets/img/plus.svg' alt='plus' />
                    </div>
                  </div>
                  <div className='accordion-content text-[#2C2C2C]'>
                    <p>
                      Visit our official website to explore available courses. Create an account, select the courses you’re interested in, and follow the instructions to enroll.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
                {/* Accordion items */}
                <li
                  className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex == 1 && 'active'
                    }`}
                >
                  <div
                    onClick={() => handleAccordion(1)}
                    className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                  >
                    <p>Can I customize my learning experience?</p>
                    <div className='accordion-icon'>
                      <img src='assets/img/plus.svg' alt='plus' />
                    </div>
                  </div>
                  <div className='accordion-content text-[#2C2C2C]'>
                    <p>
                      Yes, Scatyc offers flexible learning options. You can choose from various formats and schedules to tailor your learning experience according to your needs.
                    </p>
                  </div>
                </li>
                {/* Accordion items */}
                {/* Accordion items */}
                <li
                  className={`accordion-item border-b-[1px] border-[#DBD6CF] pb-6 pt-6 first:pt-0 last:border-b-0 last:pb-0 ${activeIndex == 2 && 'active'
                    }`}
                >
                  <div
                    onClick={() => handleAccordion(2)}
                    className='accordion-header flex items-center justify-between font-dmSans text-xl font-bold leading-[1.2] -tracking-[0.5px] text-black lg:text-[28px]'
                  >
                    <p>How can Scatyc help advance my career?</p>
                    <div className='accordion-icon'>
                      <img src='assets/img/plus.svg' alt='plus' />
                    </div>
                  </div>
                  <div className='accordion-content text-[#2C2C2C]'>
                    <p>
                      Our expert-led courses and hands-on projects provide you with practical skills and industry-recognized certifications that enhance your career opportunities and professional growth.
                    </p>
                  </div>
                </li>
              </ul>
              {/* Accordion*/}
            </div>
            {/* FAQ Right Block */}
          </div>
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default Faq_Section;
