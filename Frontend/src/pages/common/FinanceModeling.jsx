import { useState } from 'react';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../components/contact/Contact';
import FsLightbox from 'fslightbox-react';
import useAccordion from '../../hooks/useAccordion';
import { Link } from 'react-router-dom';


const FinanceModeling = () => {
     const [toggler, setToggler] = useState(false);
     const [activeIndex, handleAccordion] = useAccordion();
     
     return (
          <>
               <main className='main-wrapper relative overflow-hidden'>
                    {/*...::: Breadcrumb Section Start :::... */}
                    <Breadcrumb title='Finance Modeling' link='Course Details' />
                    <section id='section-content-1'>
                         {/* Section Spacer */}
                         <div className='py-20 xl:py-[130px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   <div className='grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]'>
                                        <div className='jos' data-jos_animation='fade-left'>
                                             <div className='overflow-hidden rounded-[10px]'>
                                                  <img
                                                       src='assets/img/th-4/finance-modeling.jpg'
                                                       alt='finance-modeling'
                                                       width={550}
                                                       height={550}
                                                       className='h-auto w-full'
                                                  />
                                             </div>
                                        </div>
                                        <div className='jos' data-jos_animation='fade-right'>
                                             {/* Section Content Block */}
                                             <div className='mb-6'>
                                                  <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px]  sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                                                       Master the art of financial modeling
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div>
                                                  <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                                                       Our comprehensive finance modeling course equips you with the skills to build 
                                                       sophisticated financial models that drive business decisions and valuations.
                                                  </p>
                                                  <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                                                       Learn to create dynamic, flexible models for forecasting, valuation, 
                                                       and scenario analysis. Master advanced Excel techniques and financial concepts 
                                                       to become a sought-after financial analyst.
                                                  </p>
                                                  <Link
                                                       rel='noopener noreferrer'
                                                       to='/courses'
                                                       className='button inline-block h-full rounded border-none bg-colorGreen py-3 text-base text-black after:border-none after:bg-white'
                                                  >
                                                       Explore Our Courses
                                                  </Link>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>

                    <section id='section-content-2'>
                         {/* Section Spacer */}
                         <div className='py-20 xl:py-[130px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   <div className='grid items-center gap-10 md:grid-cols-[1.1fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[110px]'>
                                        <div className='jos order-2' data-jos_animation='fade-left'>
                                             <div className='overflow-hidden rounded-[10px]'>
                                                  <img
                                                       src='assets/img/th-4/finance-tools.jpg'
                                                       alt='finance-modeling-tools'
                                                       width={550}
                                                       height={550}
                                                       className='h-auto w-full'
                                                  />
                                             </div>
                                        </div>
                                        <div className='jos order-1' data-jos_animation='fade-right'>
                                             {/* Section Content Block */}
                                             <div className='mb-6'>
                                                  <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px]  sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                                                       Empowering businesses with financial insights
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className=''>
                                                  <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                                                       Financial modeling is crucial for organizations across industries to make 
                                                       data-driven decisions, value assets, and plan for the future.
                                                  </p>
                                                  <ul className='flex flex-col gap-y-5 font-spaceGrotesk text-xl leading-tight tracking-tighter lg:mt-12 lg:text-[28px]'>
                                                       <li className='flex items-start gap-x-3'>
                                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                                 <img
                                                                      src='assets/img/th-4/icon-green-badge-check.svg'
                                                                      alt='check-circle'
                                                                      width={30}
                                                                      height={30}
                                                                      className='h-full w-full'
                                                                 />
                                                            </div>
                                                            Build three-statement financial models
                                                       </li>
                                                       <li className='flex items-start gap-x-3'>
                                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                                 <img
                                                                      src='assets/img/th-4/icon-green-badge-check.svg'
                                                                      alt='check-circle'
                                                                      width={30}
                                                                      height={30}
                                                                      className='h-full w-full'
                                                                 />
                                                            </div>
                                                            Perform discounted cash flow (DCF) analysis
                                                       </li>
                                                       <li className='flex items-start gap-x-3'>
                                                            <div className='mt-[2.5px] h-[30px] w-[30px]'>
                                                                 <img
                                                                      src='assets/img/th-4/icon-green-badge-check.svg'
                                                                      alt='check-circle'
                                                                      width={30}
                                                                      height={30}
                                                                      className='h-full w-full'
                                                                 />
                                                            </div>
                                                            Create sensitivity and scenario analyses
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>
                    <section id='content-section-3'>
                         {/* Section Spacer */}
                         <div className='py-20 xl:pb-[150px] xl:pt-[130px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   {/* Section Content Block */}
                                   <div className='jos mb-10 max-w-[480px] md:mb-16 lg:mb-20 lg:max-w-2xl xl:max-w-[800px]'>
                                        <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px]  sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                                             Master financial modeling techniques for any scenario
                                        </h2>
                                   </div>
                                   {/* Section Content Block */}
                                   <div
                                        className='jso relative overflow-hidden rounded-[10px]'
                                        data-jos_animation='zoom'
                                   >
                                        <img
                                             src='assets/img/th-4/finance-video-bg.jpg'
                                             alt='finance-video-bg'
                                             width={1296}
                                             height={600}
                                             className='h-80 w-full object-cover object-center lg:h-[35rem] xl:h-full'
                                        />
                                        {/* Video Play Button */}
                                        <button className='absolute left-1/2 top-1/2 z-[1] -translate-x-1/2 -translate-y-1/2'>
                                             <div
                                                  className='relative flex h-[120px] w-[120px] items-center justify-center rounded-full border-[3px] border-colorGreen bg-black text-lg font-bold backdrop-blur-[2px] transition-all duration-300'
                                                  onClick={() => setToggler(!toggler)}
                                             >
                                                  Play
                                                  <div className='absolute -z-[1] h-[110%] w-[110%] animate-[ping_1.5s_ease-in-out_infinite] rounded-full bg-colorGreen opacity-30'></div>
                                             </div>
                                        </button>
                                        {/* Video Play Button */}
                                   </div>
                                   <FsLightbox
                                        toggler={toggler}
                                        sources={['https://www.youtube.com/watch?v=3nQNiWdeH2Q']}
                                   />
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>
                    <section id='content-section-4'>
                         {/* Section Spacer */}
                         <div className='pb-20 xl:pb-[150px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   <div className='grid items-center gap-12 lg:grid-cols-[minmax(0,_.75fr)_1fr] lg:gap-20 xl:gap-24'>
                                        {/* Process Accordion */}
                                        <ul
                                             className='accordion tab-content flex flex-col gap-y-6'
                                             id='process-accordian'
                                        >
                                             {/* Accordion items */}
                                             <li
                                                  className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndex == 0 ? 'active' : ''
                                                       }`}
                                                  data-jos_delay='0.1'
                                             >
                                                  <div
                                                       onClick={() => handleAccordion(0)}
                                                       className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                                                  >
                                                       <div className='mb-3 flex items-center gap-x-6'>
                                                            <img
                                                                 src='assets/img/th-4/icon-green-process-accordion-1.svg'
                                                                 alt='icon-green-process-accordion'
                                                                 width={36}
                                                                 height={50}
                                                                 className='h-[50px] w-auto'
                                                            />
                                                            <h5 className='font-spaceGrotesk text-white'>
                                                                 Learn the fundamentals
                                                            </h5>
                                                       </div>
                                                       <div className='accordion-icon is-chevron '>
                                                            <img
                                                                 src='assets/img/th-4/icon-white-cheveron-down.svg'
                                                                 alt='chevron'
                                                                 width={30}
                                                                 height={30}
                                                            />
                                                            <img
                                                                 src='assets/img/th-4/icon-green-cheveron-up.svg'
                                                                 alt='chevron'
                                                                 width={30}
                                                                 height={30}
                                                                 className='absolute inset-0'
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px] text-white'>
                                                       <p>
                                                            Master the basics of financial statements, Excel functions, and modeling best practices.
                                                       </p>
                                                  </div>
                                             </li>
                                             {/* Accordion items */}
                                             {/* Accordion items */}
                                             <li
                                                  className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndex == 1 ? 'active' : ''
                                                       }`}
                                                  data-jos_delay='0.1'
                                             >
                                                  <div
                                                       onClick={() => handleAccordion(1)}
                                                       className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                                                  >
                                                       <div className='mb-3 flex items-center gap-x-6'>
                                                            <img
                                                                 src='assets/img/th-4/icon-green-process-accordion-2.svg'
                                                                 alt='icon-green-process-accordion'
                                                                 width={36}
                                                                 height={50}
                                                                 className='h-[50px] w-auto'
                                                            />
                                                            <h5 className='font-spaceGrotesk text-white'>
                                                                 Build complex models
                                                            </h5>
                                                       </div>
                                                       <div className='accordion-icon is-chevron'>
                                                            <img
                                                                 src='assets/img/th-4/icon-white-cheveron-down.svg'
                                                                 alt='chevron'
                                                                 width={30}
                                                                 height={30}
                                                            />
                                                            <img
                                                                 src='assets/img/th-4/icon-green-cheveron-up.svg'
                                                                 alt='chevron'
                                                                 width={30}
                                                                 height={30}
                                                                 className='absolute inset-0'
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px] text-white'>
                                                       <p>
                                                            Create advanced financial models for forecasting, valuation, and M&A analysis.
                                                       </p>
                                                  </div>
                                             </li>
                                             {/* Accordion items */}
                                             {/* Accordion items */}
                                             <li
                                                  className={`jos accordion-item rounded-[10px] bg-[#121212] px-7 py-[30px] ${activeIndex == 2 ? 'active' : ''
                                                       }`}
                                                  data-jos_delay='0.1'
                                             >
                                                  <div
                                                       onClick={() => handleAccordion(2)}
                                                       className='accordion-header flex items-center justify-between text-xl leading-[1.2] -tracking-[1px] lg:text-3xl'
                                                  >
                                                       <div className='mb-3 flex items-center gap-x-6'>
                                                            <img
                                                                 src='assets/img/th-4/icon-green-process-accordion-3.svg'
                                                                 alt='icon-green-process-accordion'
                                                                 width={36}
                                                                 height={50}
                                                                 className='h-[50px] w-auto'
                                                            />
                                                            <h5 className='font-spaceGrotesk text-white'>
                                                                 Apply to real-world scenarios
                                                            </h5>
                                                       </div>
                                                       <div className='accordion-icon is-chevron'>
                                                            <img
                                                                 src='assets/img/th-4/icon-white-cheveron-down.svg'
                                                                 alt='chevron'
                                                                 width={30}
                                                                 height={30}
                                                            />
                                                            <img
                                                                 src='assets/img/th-4/icon-green-cheveron-up.svg'
                                                                 alt='chevron'
                                                                 width={30}
                                                                 height={30}
                                                                 className='absolute inset-0'
                                                            />
                                                       </div>
                                                  </div>
                                                  <div className='accordion-content disappear translate-y-3 text-lg leading-[1.42] lg:text-[21px] text-white'>
                                                       <p>
                                                            Use your skills to solve complex financial problems and make data-driven decisions.
                                                       </p>
                                                  </div>
                                             </li>
                                             {/* Accordion items */}
                                        </ul>
                                        {/* Process Accordion */}
                                        <div className='jos' data-jos_animation='fade-right'>
                                             {/* Section Content Block */}
                                             <div className='mb-6'>
                                                  <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px]  sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
                                                       Unlock the power of financial modeling
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div>
                                                  <p className='mb-8 text-lg leading-[1.42] last:mb-0 lg:text-[21px]'>
                                                       Our finance modeling course equips you with the skills to build 
                                                       sophisticated models that drive business decisions, valuations, 
                                                       and financial strategy. Master the tools used by top analysts and 
                                                       investment professionals.
                                                  </p>
                                             </div>
                                             {/* Counter Scroll */}
                                             <ul className='mt-[50px] grid grid-cols-1 gap-10 gap-y-5 text-center sm:grid-cols-3'>
                                                  {/* Counter Items */}
                                                  <li>
                                                       <h3
                                                            className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                                                            data-module='countup'
                                                       >
                                                            <span className='start-number' data-countup-number={95}>
                                                                 95
                                                            </span>
                                                            %
                                                       </h3>
                                                       <span className='mt-4 block text-[21px] font-normal'>
                                                            Career Advancement
                                                       </span>
                                                  </li>
                                                  {/* Counter Items */}
                                                  {/* Counter Items */}
                                                  <li>
                                                       <h3
                                                            className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                                                            data-module='countup'
                                                       >
                                                            <span className='start-number' data-countup-number={40}>
                                                                 40
                                                            </span>
                                                            %
                                                       </h3>
                                                       <span className='mt-4 block text-[21px] font-normal'>
                                                            Salary Increase
                                                       </span>
                                                  </li>
                                                  {/* Counter Items */}
                                                  {/* Counter Items */}
                                                  <li>
                                                       <h3
                                                            className='font-spaceGrotesk text-5xl leading-[1.05] tracking-[-1px] text-colorGreen md:text-5xl lg:text-6xl xl:text-[70px]'
                                                            data-module='countup'
                                                       >
                                                            <span className='start-number' data-countup-number={100}>
                                                                 100
                                                            </span>
                                                            %
                                                       </h3>
                                                       <span className='mt-4 block text-[21px] font-normal'>
                                                            Practical Skills
                                                       </span>
                                                  </li>
                                                  {/* Counter Items */}
                                             </ul>
                                             {/* Counter Scroll */}
                                        </div>
                                   </div>
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>
                    <Contact />
               </main>
          </>
     );
};

export default FinanceModeling;
