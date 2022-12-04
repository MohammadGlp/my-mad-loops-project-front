import LandingBlog from '../../Components/content/Landing-Blog/landing-blog.component';
import LandingTeacher from '../../Components/content/Landing-Teacher/teacher.component';
import LandingServices from './../../Components/content/Landing-Services/landing-services.component';
import LandingHeader from './../../Components/content/Landing-Header/landing-header.component';
import LandingOffers from './../../Components/content/Landing-Offers/landing-offers.component';
import LandingCourse from '../../Components/content/Landing-Course/landing-course.component';

const LandingPage = () => {
  return (
    <>
      <LandingHeader />
      <LandingServices />
      <LandingCourse />
      <LandingTeacher />
      <LandingOffers />
      <LandingBlog />
    </>
  );
};

export default LandingPage;
