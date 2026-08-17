import HeroEditorial from '../components/editorial/HeroEditorial';
import FeaturedSpotlight from '../components/editorial/FeaturedSpotlight';
import StatementSection from '../components/editorial/StatementSection';
import CapabilityList from '../components/editorial/CapabilityList';
import ProjectRail from '../components/editorial/ProjectRail';
import NameShowcase from '../components/editorial/NameShowcase';
import TechMarquee from '../components/TechMarquee';
import CTASection from '../components/CTASection';
import StackSection from '../components/StackSection';
import FAQSection from '../components/FAQSection';

export default function Home() {
  return (
    <>
      <HeroEditorial />
      <FeaturedSpotlight />
      <TechMarquee />
      <StatementSection />
      <CapabilityList />
      <ProjectRail />
      <NameShowcase />
      <StackSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
