import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import DetailsSection from './components/DetailsSection';
import RepairSpecs from './components/RepairSpecs';
import PreisanfrageForm from './components/PreisanfrageForm';
import GoogleReviews from './components/GoogleReviews';
import RepairProcess from './components/RepairProcess';
import AboutUs from './components/AboutUs';
import DividerImage from './components/DividerImage';
import MobileContract from './components/MobileContract';
import Locations from './components/Locations';
import FAQs from './components/FAQs';
import SeoText from './components/SeoText';
import ContactFooterInfo from './components/ContactFooterInfo';

function App() {
  return (
    <div id="page" className="site">
      <Header />
      <div id="content" className="site-content">
        <div className="ast-container">
          <div id="primary" className="content-area primary">
            <main id="main" className="site-main">
              <article className="post-9623 page type-page status-publish ast-article-single">
                <div className="entry-content clear" itemProp="text">
                  <div className="fl-builder-content fl-builder-content-9623 fl-builder-content-primary fl-builder-global-templates-locked" data-post-id="9623">
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
                    <ContactFooterInfo />
                  </div>
                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
