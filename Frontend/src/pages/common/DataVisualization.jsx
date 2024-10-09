import { Link } from 'react-router-dom';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';


const DataVisualization = () => {
     return (
          <>
               <main className='main-wrapper relative overflow-hidden'>
                    {/*...::: Breadcrumb Section Start :::... */}
                    <Breadcrumb title='Data Visualization' link='Service Details' />
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
                                                       Transforming Data into Visual Insights
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className='text-lg leading-[1.66]'>
                                                  <p className='mb-7 last:mb-0'>
                                                       Our Data Visualization service turns complex data sets into clear, 
                                                       actionable visual insights. We help you uncover patterns, trends, 
                                                       and correlations that might otherwise remain hidden in raw data.
                                                  </p>
                                                  <ul className='mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Interactive and dynamic visualizations
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Customized dashboards for your needs
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Real-time data updates and analysis
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
                                                       Empowering Decision-Making
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className='text-lg leading-[1.66]'>
                                                  <p className='mb-7 last:mb-0'>
                                                       Our data visualization tools empower you to make informed decisions 
                                                       quickly. By presenting complex data in an easily digestible format, 
                                                       we help you identify key insights and act on them promptly.
                                                  </p>
                                                  <ul className='mt-12 flex flex-col gap-y-6 font-clashDisplay text-[22px] font-medium leading-[1.28] tracking-[1px] lg:text-[28px]'>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Identify trends and patterns quickly
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Make data-driven decisions confidently
                                                       </li>
                                                       <li className='relative pl-[35px] after:absolute after:left-[10px] after:top-3 after:h-[15px] after:w-[15px] after:rounded-[50%] after:bg-colorViolet'>
                                                            Communicate insights effectively
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
                                                       Tailored to Your Needs
                                                  </h2>
                                             </div>
                                             {/* Section Content Block */}
                                             <div className='mb-12 text-lg leading-[1.66]'>
                                                  <p className='mb-7 last:mb-0'>
                                                       Our data visualization solutions are customized to meet your 
                                                       specific business needs. Whether you're looking to improve 
                                                       operational efficiency, enhance customer insights, or optimize 
                                                       your marketing strategy, we have the tools and expertise to help.
                                                  </p>
                                                  <p className='mb-7 last:mb-0'>
                                                       Let us help you unlock the full potential of your data through 
                                                       powerful, intuitive visualizations.
                                                  </p>
                                             </div>
                                             <Link
                                                  rel='noopener noreferrer'
                                                  to='/contact'
                                                  className='button relative z-[1] inline-flex items-center gap-3 rounded-[50px] border-none bg-colorViolet py-[18px] text-white after:bg-colorOrangyRed hover:text-white'
                                             >
                                                  Get Started
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

               </main>
          </>
     );
};

export default DataVisualization;
