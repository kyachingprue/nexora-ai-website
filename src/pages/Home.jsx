import SEO from "../components/SEO.jsx";
import Hero from "../sections/Hero.jsx";
import FeatureGrid from "../sections/FeatureGrid.jsx";
import HowItWorks from "../sections/HowItWorks.jsx";
import Testimonials from "../sections/Testimonials.jsx";
import CTA from "../sections/CTA.jsx";
import { FEATURES } from "../data/features.js";
import ScrubbedBentoGallery from "../components/ScrubbedBentoGallery.jsx";

export default function Home() {
  return (
    <>
      <SEO
        path="/"
        title="Build the Future with Artificial Intelligence"
        description="Nexora helps you integrate powerful AI models and automation into your products and workflows."
      />
      <Hero />
      <FeatureGrid
        items={FEATURES.slice(0, 4)}
        title="Everything you need to ship AI"
        description="A single platform for models, automation and the insight to know it's working."
      />
      <HowItWorks />
      <ScrubbedBentoGallery/>
      <Testimonials />
      <CTA />
    </>
  );
}
