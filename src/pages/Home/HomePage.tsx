import Header from '../../components/Header/Header';
import Body from '../../components/Home/Body';
import Feature from '../../components/Home/Feature';
import Footer from '../../components/Footer/Footer';
import Testimonials from '../../components/Home/Testimonials';

const HomePage = () => {
  return (
    <div className="p-5 max-w-[1120px] w-full mx-auto">
      <Header />
      <Body />
      <Feature />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
