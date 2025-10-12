import Layout from './components/Layout';
import AboutSection from './components/section/AboutSection';
import ResumeSection from './components/section/ResumeSection';
import ServicesSection from './components/section/ServiceSection';
import PortfolioSection from './components/section/PortfolioSection';
import ContactSection from './components/section/ContactSection';
import Home from './components/Home';

function App() {
  return (
        <Layout>
          <Home />
      <AboutSection />
      <ResumeSection />
      {/* <ServicesSection /> */}
      <PortfolioSection />
      <ContactSection />
    </Layout>
  );
}

export default App;