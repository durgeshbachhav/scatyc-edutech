import Breadcrumb from '../../components/breadcrumb/Breadcrumb';
import Contact from '../../components/contact/Contact';
import Webdevelopment_01 from '../../components/sections/home_04/Webdevelopment_01';
import WebDevelopment_02 from '../../components/sections/home_04/WebDevelopment_02';
import WebDevelopmentServices from '../../components/sections/home_04/WebDevelopmentServices';

const WebDevelopment = () => {
     return (
          <>
               <main className='main-wrapper relative overflow-hidden'>
                    {/*...::: Breadcrumb Section Start :::... */}
                    <Breadcrumb title='Web Development' link='Service Details' />
                    {/*...::: Breadcrumb Section End :::... */}
                    {/*...::: Content Section Start :::... */}
                    <Webdevelopment_01 />
                    <WebDevelopment_02 />
                    <WebDevelopmentServices />
                    <Contact />
                    {/*...::: About Contact Section End :::... */}
               </main>
          </>
     );
};

export default WebDevelopment;
