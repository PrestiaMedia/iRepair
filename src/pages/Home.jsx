import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import DetailsSection from '../components/DetailsSection';
import RepairSpecs from '../components/RepairSpecs';
import PreisanfrageForm from '../components/PreisanfrageForm';
import GoogleReviews from '../components/GoogleReviews';
import RepairProcess from '../components/RepairProcess';
import AboutUs from '../components/AboutUs';
import DividerImage from '../components/DividerImage';
import MobileContract from '../components/MobileContract';
import Locations from '../components/Locations';
import FAQs from '../components/FAQs';
import SeoText from '../components/SeoText';

const Home = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <DetailsSection />
      <RepairSpecs />
      <PreisanfrageForm />
      <GoogleReviews />
      <RepairProcess />
      <AboutUs />
      <DividerImage />
      <MobileContract />
      <Locations />
      <FAQs />
      <SeoText />
    </>
  );
};

export default Home;
