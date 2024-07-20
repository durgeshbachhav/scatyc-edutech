import { Link } from 'react-router-dom';
import useTabs from '../../../hooks/useTabs';

const Pricing = () => {
  const [activeTab, handleTab] = useTabs();
  return (
    <>
      {/*...::: Pricing Section Start :::... */}
      <section className='pricing-section'>
        {/* Section Spacer */}
        <div className='pb-20 pt-20 xl:pb-[150px] xl:pt-[130px]'>
          {/* Section Container */}
          <div className='global-container'>
            {/* Section Content Block */}
            <div className='jos mb-10 text-center lg:mb-12'>
              <div className='mx-auto md:max-w-xs lg:max-w-xl xl:max-w-[746px]'>
                <h2>Explore Our Courses</h2>
              </div>
            </div>
            {/* Section Content Block */}
            {/* Pricing Block */}
            <div className='container mx-auto'>
              {/* Tab buttons */}
              <div
                className='jos flex justify-center'
                data-jos_animation='fade'
              >
                <div className='inline-flex space-x-4 rounded-[50px] border-2 border-black font-semibold'>
                  <button
                    className={`tab-button price-button ${activeTab === 0 ? 'active' : ''
                      }`}
                    onClick={() => handleTab(0)}
                    data-tab='monthly'
                  >
                    Monthly
                  </button>
                  <button
                    className={`tab-button price-button ${activeTab === 1 ? 'active' : ''
                      }`}
                    onClick={() => handleTab(1)}
                    data-tab='annually'
                  >
                    Annually
                  </button>
                </div>
              </div>

              {/* 
             
             
             */}
            </div>
          </div>
          {/* Section Container */}
        </div>
        {/* Section Spacer */}
      </section>
      {/*...::: Pricing Section End :::... */}
    </>
  );
};

export default Pricing;




