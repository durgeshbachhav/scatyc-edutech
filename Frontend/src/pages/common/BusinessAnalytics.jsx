import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../components/contact/Contact';


const BusinessAnalytics = () => {
     return (
          <>
               <main className='main-wrapper relative overflow-hidden'>
                    {/*...::: Breadcrumb Section Start :::... */}
                    <Breadcrumb title='Business Analytics' link='Course Details' />
                    <section id='content-section-1'>
                         {/* Section Spacer */}
                         <div className='pb-20 pt-20 md:pb-36 md:pt-32 lg:pb-28 xl:pb-[220px] xl:pt-[130px] xxl:pt-[200px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]'>
                                        {/* Content Left Block */}
                                        <div
                                             className='jos order-2 mt-16 rounded-md md:order-1 md:mt-0'
                                             data-jos_animation='fade-up'
                                        >
                                             <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                                                  <img
                                                       src='assets/img/th-2/th2-content-img-1.png'
                                                       alt='th2-content-img-1.png'
                                                       width={320}
                                                       height={564}
                                                       className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                                                  />
                                             </div>
                                        </div>
                                        {/* Content Left Block */}
                                        {/* Content Right Block */}
                                        <div
                                             className='jos order-1 md:order-2'
                                             data-jos_animation='fade-right'
                                        >
                                             {/* Section Content Block */}
                                             <div className='mb-6'>
                                                  <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                                                       Unlock the Power of Data
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className='text-lg leading-[1.66]'>
                                                  <p className='mb-7 last:mb-0'>
                                                       Our Business Analytics course equips you with the skills to transform raw data into actionable insights. Learn to drive strategic decision-making and gain a competitive edge in today's data-driven business landscape.
                                                  </p>
                                                  <ul className='mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Master data analysis techniques
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Develop predictive modeling skills
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Learn to visualize data effectively
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                        {/* Content Right Block */}
                                   </div>
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>
                    <section id='content-section-2'>
                         {/* Section Spacer */}
                         <div className='pb-20 md:pb-36 lg:pb-28 xl:pb-[220px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_1fr)_.8fr] xl:gap-28 xxl:gap-[134px]'>
                                        {/* Content Right Block */}
                                        <div
                                             className='jos order-2 mt-16 rounded-md md:mt-0'
                                             data-jos_animation='fade-up'
                                        >
                                             <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                                                  <img
                                                       src='assets/img/th-2/th2-content-img-2.png'
                                                       alt='th2-content-img-2.png'
                                                       width={320}
                                                       height={564}
                                                       className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                                                  />
                                             </div>
                                        </div>
                                        {/* Content Right Block */}
                                        {/* Content Left Block */}
                                        <div className='jos order-1' data-jos_animation='fade-right'>
                                             {/* Section Content Block */}
                                             <div className='mb-6'>
                                                  <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                                                       Industry-Relevant Skills
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className='text-lg leading-[1.66]'>
                                                  <p className='mb-7 last:mb-0'>
                                                       Our curriculum is designed to provide you with practical, in-demand skills that are highly sought after in the business world. You'll learn to use cutting-edge tools and technologies used by industry professionals.
                                                  </p>
                                                  <ul className='mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Excel in data-driven decision making
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Master popular analytics tools
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Apply statistical methods to business problems
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                        {/* Content Left Block */}
                                   </div>
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>
                    <section id='content-section-3'>
                         {/* Section Spacer */}
                         <div className='pb-20 md:pb-36 lg:pb-28 xl:pb-[150px]'>
                              {/* Section Container */}
                              <div className='global-container'>
                                   <div className='grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20 xl:grid-cols-[minmax(0,_.8fr)_1fr] xl:gap-28 xxl:gap-[134px]'>
                                        {/* Content Left Block */}
                                        <div
                                             className='jos order-2 mt-16 rounded-md md:order-1 md:mt-0'
                                             data-jos_animation='fade-up'
                                        >
                                             <div className="relative h-[494px] rounded-tl-[20px] rounded-tr-[20px] bg-[url('/assets/img/th-2/content-shape.jpg')] bg-cover bg-no-repeat">
                                                  <img
                                                       src='assets/img/th-2/th2-content-img-3.png'
                                                       alt='th2-content-img-3.png'
                                                       width={320}
                                                       height={564}
                                                       className='absolute bottom-0 left-1/2 h-[564px] w-[320px] -translate-x-1/2'
                                                  />
                                             </div>
                                        </div>
                                        {/* Content Left Block */}
                                        {/* Content Right Block */}
                                        <div
                                             className='jos order-1 md:order-2'
                                             data-jos_animation='fade-right'
                                        >
                                             {/* Section Content Block */}
                                             <div className='mb-6'>
                                                  <h2 className='font-clashDisplay text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[75px]'>
                                                       Career-Boosting Opportunities
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className='mb-12 text-lg leading-[1.66]'>
                                                  <p className='mb-7 last:mb-0'>
                                                       Our Business Analytics course opens doors to exciting career opportunities across various industries. Graduates of this program are well-equipped to take on roles such as Data Analyst, Business Intelligence Specialist, and Analytics Consultant.
                                                  </p>
                                                  <p className='mb-7 last:mb-0'>
                                                       With the skills you'll gain, you'll be prepared to make data-driven decisions that can significantly impact an organization's bottom line and drive growth.
                                                  </p>
                                             </div>
                                             <Link
                                                  rel='noopener noreferrer'
                                                  to='/contact'
                                                  className='button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                                             >
                                                  Enroll Now
                                                  <img
                                                       src='assets/img/th-2/icon-white-long-arrow-right.svg'
                                                       alt='icon-white-long-arrow-right'
                                                  />
                                             </Link>
                                        </div>
                                        {/* Content Right Block */}
                                   </div>
                              </div>
                              {/* Section Container */}
                         </div>
                         {/* Section Spacer */}
                    </section>
                    <Contact />
                    {/*...::: About Contact Section End :::... */}
               </main>
          </>
     );
};

export default BusinessAnalytics;
