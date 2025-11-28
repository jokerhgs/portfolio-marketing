import { AboutSection } from "./_sections/about";
import { BlogsSection } from "./_sections/blogs";
import { ContactSection } from "./_sections/contact";
import { HomeSection } from "./_sections/home";
import { MarketingAISection } from "./_sections/marketing-ai";
import { NavBar } from "./_components/nav-bar";
import { FreeToolsSection } from "./_sections/free-tools";
import { AIChatBox } from "./_components/ai-chatbox";
import { LimitedOfferBanner } from "./_components/limited-offer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <HomeSection />
      <AboutSection />
      <MarketingAISection />
      <FreeToolsSection />
      <BlogsSection />
      <ContactSection />
      <div className="fixed bottom-6 right-6 z-1000 flex flex-col gap-4">
        <LimitedOfferBanner />
        <AIChatBox />
      </div>
    </>
  );
}
