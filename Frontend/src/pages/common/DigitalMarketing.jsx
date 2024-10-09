import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../components/contact/Contact';

const DigitalMarketing = () => {
     return (
          <>
               <main className='main-wrapper relative overflow-hidden'>
                    {/*...::: Breadcrumb Section Start :::... */}
                    <Breadcrumb title='Digital Marketing' link='Course Details' />
                    <section id='section-content-1'>
                         <div className='bg-[#EDEDE0]'>
                              {/* Section Spacer */}
                              <div className='py-20 xl:py-[130px]'>
                                   {/* Section Container */}
                                   <div className='global-container'>
                                        <div className='grid items-center gap-10 md:grid-cols-[minmax(0,_1fr)_1.3fr] lg:gap-[60px] xl:gap-x-[94px]'>
                                             <div className='jos' data-jos_animation='fade-left'>
                                                  <div className='overflow-hidden rounded-[10px]'>
                                                       <img
                                                            src='assets/img/th-3/content-img-1.jpg'
                                                            alt='content-img-1'
                                                            width={526}
                                                            height={550}
                                                            className='h-auto w-full'
                                                       />
                                                  </div>
                                             </div>
                                             <div className='jos' data-jos_animation='fade-right'>
                                                  {/* Section Content Block */}
                                                  <div className='mb-6'>
                                                       <h2 className='font-raleway text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[80px]'>
                                                            Master the Art of Digital Marketing
                                                       </h2>
                                                  </div>
                                                  {/* Section Content Block */}
                                                  <div className=''>
                                                       <p className='mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-2xl'>
                                                            Our comprehensive Digital Marketing course equips you with cutting-edge strategies and tools to excel in the digital landscape.
                                                       </p>
                                                       <p className='mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-2xl'>
                                                            <span className='font-semibold text-[#381FD1]'>
                                                                 SEO & Content Marketing:
                                                            </span>
                                                            Learn to optimize your online presence and create compelling content that drives engagement and conversions.
                                                       </p>
                                                       <p className='mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-2xl'>
                                                            <span className='font-semibold text-[#381FD1]'>
                                                                 Social Media & PPC:
                                                            </span>
                                                            Master social media platforms and pay-per-click advertising to reach your target audience effectively.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* Section Container */}
                              </div>
                              {/* Section Spacer */}
                         </div>
                    </section>

                    <section id='section-content-2'>
                         <div className='bg-[#EDEDE0]'>
                              {/* Section Spacer */}
                              <div className='py-20 xl:py-[130px]'>
                                   {/* Section Container */}
                                   <div className='global-container'>
                                        <div className='grid items-center gap-10 md:grid-cols-[1.3fr_minmax(0,_1fr)] lg:gap-[60px] xl:gap-x-[94px]'>
                                             <div className='jos order-2' data-jos_animation='fade-left'>
                                                  <div className='overflow-hidden rounded-[10px]'>
                                                       <img
                                                            src='assets/img/th-3/content-img-2.jpg'
                                                            alt='content-img-2'
                                                            width={526}
                                                            height={550}
                                                            className='h-auto w-full'
                                                       />
                                                  </div>
                                             </div>
                                             <div className='jos order-1' data-jos_animation='fade-right'>
                                                  {/* Section Content Block */}
                                                  <div className='mb-6'>
                                                       <h2 className='font-raleway text-4xl font-medium leading-[1.06] sm:text-[44px] lg:text-[56px] xl:text-[80px]'>
                                                            Stay Ahead in the Digital Era
                                                       </h2>
                                                  </div>
                                                  {/* Section Content Block */}
                                                  <div className=''>
                                                       <p className='mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-2xl'>
                                                            Our course is designed to keep you at the forefront of digital marketing trends and technologies.
                                                       </p>
                                                       <p className='mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-2xl'>
                                                            <span className='font-semibold text-[#381FD1]'>
                                                                 Data Analytics:
                                                            </span>
                                                            Learn to leverage data for informed decision-making and campaign optimization.
                                                       </p>
                                                       <p className='mb-8 text-lg leading-[1.33] last:mb-0 lg:text-xl xl:text-2xl'>
                                                            <span className='font-semibold text-[#381FD1]'>
                                                                 Emerging Technologies:
                                                            </span>
                                                            Explore AI, VR, and other cutting-edge technologies shaping the future of digital marketing.
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   {/* Section Container */}
                              </div>
                              {/* Section Spacer */}
                         </div>
                    </section>

                    <Contact />
                    {/*...::: About Contact Section End :::... */}
               </main>
          </>
     );
};

export default DigitalMarketing;
