import { Link } from 'react-router-dom';

const WebDevelopmentServices = () => {
  return (
    <section id='service-section'>
      {/* Section Spacer */}
      <div className='pb-20 pt-20 xl:pb-[130px] xl:pt-[150px]'>
        {/* Section Container */}
        <div className='global-container'>
          {/* Section Content Block */}
          <div className='jos mx-auto mb-10 text-center md:mb-16 md:max-w-xl lg:mb-20 lg:max-w-3xl xl:max-w-[856px]'>
            <h2 className='font-spaceGrotesk text-4xl font-medium leading-[1.06] -tracking-[2px] text-black sm:text-[44px] lg:text-[56px] xl:text-[70px]'>
              Master Web Development with Our Comprehensive Course
            </h2>
          </div>
          {/* Section Content Block */}
          {/* Service List */}
          <ul className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-white'>
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.1'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-1.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  HTML & CSS Fundamentals
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Master the building blocks of web development with HTML5 and CSS3.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.2'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-2.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  JavaScript & ES6+
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Learn modern JavaScript to create dynamic and interactive web applications.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.3'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-3.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  React & Redux
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Build powerful single-page applications with React and manage state with Redux.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.4'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-4.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Node.js & Express
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Develop server-side applications and RESTful APIs with Node.js and Express.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.5'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-5.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  Database & ORM
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Learn to work with databases like MongoDB and ORMs like Mongoose.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
            {/* Service Item */}
            <li
              className='jos group rounded-[10px] bg-[#121212] p-[30px]'
              data-jos_delay='0.6'
            >
              <div className='mb-8 flex items-center gap-x-6'>
                <div className='h-[50px] w-[50px]'>
                  <img
                    src='assets/img/th-4/icon-green-service-6.svg'
                    alt='icon-green-service'
                    width={50}
                    height={50}
                    className='h-full w-auto'
                  />
                </div>
                <div className='flex-1 font-spaceGrotesk text-3xl leading-[1.33]'>
                  DevOps & Deployment
                </div>
              </div>
              <p className='mb-7 text-[21px] leading-[1.4]'>
                Master the tools and practices for deploying and maintaining web applications.
              </p>
              <Link
                to='/service-details'
                className='relative flex h-[30px] w-[30px] items-center justify-center overflow-hidden'
              >
                <img
                  src='assets/img/th-4/icon-white-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='relative left-0 transition-all duration-300 group-hover:left-full'
                />
                <img
                  src='assets/img/th-4/icon-green-arrow-right.svg'
                  alt='icon-white-arrow-right'
                  width={30}
                  height={30}
                  className='absolute -left-full transition-all duration-300 group-hover:left-0'
                />
              </Link>
            </li>
            {/* Service Item */}
          </ul>
          {/* Service List */}
        </div>
        {/* Section Container */}
      </div>
      {/* Section Spacer */}
    </section>
  );
};

export default WebDevelopmentServices;
