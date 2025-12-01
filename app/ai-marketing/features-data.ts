import {
  FaChartBar,
  FaComments,
  FaRegCalendarAlt,
  FaRegGem,
  FaEnvelopeOpenText,
  FaLaptopCode,
} from "react-icons/fa";
import { IconType } from "react-icons";

export type MarketingFeatureConfig = {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: IconType;
  problem: string;
  problemHeader: string;
  solution: string;
  solutionHeader: string;
  benefits: string[];
  highlights: {
    label: string;
    value: string;
    helper: string;
  }[];
};
export const marketingFeatures: MarketingFeatureConfig[] = [
  {
    slug: "marketing-analytics",
    title: "Marketing Analytics",
    subtitle:
      "Gain clarity on performance with unified dashboards and AI insights that guide profitable decisions.",
    description:
      "All marketing data and AI insights in one place, revealing your best campaign results.",
    icon: FaChartBar,
    problem:
      "Be honest: Are you still wasting hours every week jumping between 5 different tools (like your CRM, Google Ads, and social platform) just to build a single, messy spreadsheet report? Industry research shows that marketing teams can spend **up to 40% of their time** simply on data aggregation and manual reporting. You shouldn't have to guess which campaigns actually deliver revenue.",
    problemHeader: "The Pain of Manual Reporting",
    solution:
      "Imagine logging in and instantly knowing exactly where to spend your next dollar. Our analytics engine automatically connects *all* your channels, cleans up the confusing data for you, and surfaces only the critical, profitable insights. Companies that prioritize data unification and analytics typically see **revenue growth 15-20% faster** than their peers, allowing you to ditch the spreadsheets and focus on profit.",
    solutionHeader: "Your New Reality: Clarity & Profit",
    benefits: [
      "Unified dashboard covering email, social, paid media, and web analytics.",
      "AI insights that highlight winners and flag underperforming campaigns.",
      "Actionable recommendations that tie spend to revenue impact.",
      "Live tracking of visits, conversions, and conversion rates.",
    ],
    highlights: [
      {
        label: "Market-proven ROI potential",
        value: "15%+ Growth",
        helper: "Typical growth seen by data-driven companies.",
      },
      {
        label: "Data sources connected",
        value: "15+",
        helper: "Email, ads, social, CRM, and more.",
      },
      {
        label: "Eliminates Data Silos",
        value: "100% Unified",
        helper: "Combines all your channels into one dashboard.",
      },
    ],
  },
  {
    slug: "content-creation-scheduling",
    title: "Content Creation & Scheduling",
    subtitle:
      "Produce consistent, on-brand content and keep every channel active with automated workflows.",
    description:
      "Generate captions, visuals, and videos. Schedule posts and keep your brand active everywhere automatically.",
    icon: FaRegCalendarAlt,
    problem:
      "Does your team lose momentum because ideation, approvals, and publishing are scattered across multiple tools? This inconsistency costs time; in fact, content teams typically lose **over 25% of their day** to workflow interruptions and content handoffs, slowing your output and reducing brand consistency.",
    problemHeader: "The Challenge of Slow Content Flow",
    solution:
      "Unlock massive efficiency. Our centralized system uses AI-assisted creation, automated scheduling, and one-click publishing to streamline everything. Businesses using content automation generally report **up to a 50% decrease** in content production time, meaning you publish more without needing to grow your headcount.",
    solutionHeader: "Achieve Rapid Content Velocity",
    benefits: [
      "AI-assisted ideation for posts, newsletters, and landing pages.",
      "Auto-generated variations for each social channel.",
      "Central calendar with approvals, reminders, and gap alerts.",
      "One-click publishing to every major platform.",
    ],
    highlights: [
      {
        label: "Time Saved on Production",
        value: "Up to 50%",
        helper: "Typical time savings reported with content automation.",
      },
      {
        label: "Workflow Centralization",
        value: "1 Platform",
        helper: "Handles ideation, scheduling, and publishing.",
      },
      {
        label: "Brand compliance",
        value: "Guaranteed",
        helper: "Guardrails keep tone & visuals consistent.",
      },
    ],
  },
  {
    slug: "customer-messaging-automation",
    title: "AI Customer Support",
    subtitle:
      "Reduce response time and prevent customer loss with AI-powered messaging automation.",
    description:
      "AI answers customer messages quickly and consistently so no inquiries go unanswered, reducing workload.",
    icon: FaComments,
    problem:
      "Are you watching valuable leads slip away because your manual response times are too slow? Studies show that response delays exceeding five minutes can drop lead qualification rates by **up to 80%**. Manual responses are inconsistent, causing frustrated customers and missed opportunities that directly impact your bottom line.",
    problemHeader: "The Cost of Slow Service",
    solution:
      "Stop losing customers to slow service. Our AI system replies instantly, follows up automatically, and escalates only when a human touch is needed. AI-powered customer service typically reduces average response time by **over 65%**, keeping customers engaged and converting more of your incoming queries.",
    solutionHeader: "Instant Service, Higher Conversion",
    benefits: [
      "Instant replies to customer questions and requests.",
      "Automated follow-ups prevent leads from slipping away.",
      "Reduces time spent on repetitive messages for staff.",
      "Improves customer satisfaction and retention without extra hires.",
    ],
    highlights: [
      {
        label: "Response-time reduction",
        value: "65%+ Faster",
        helper: "Industry standard reduction with AI automation.",
      },
      {
        label: "Self-service resolution",
        value: "High Volume",
        helper: "Solved without human intervention.",
      },
      {
        label: "Lead retention rate",
        value: "Improved",
        helper: "Fewer customers lost due to delayed responses.",
      },
    ],
  },
  {
    slug: "brand-consistency-management",
    title: "Brand Consistency Management",
    subtitle:
      "Keep every automation aligned with one consistent brand personality.",
    description:
      "AI ensures all emails, chats, and messages follow your brand’s personality and style guidelines.",
    icon: FaRegGem,
    problem:
      "Do your automated messages sometimes sound 'off' or inconsistent with your brand voice? This lack of uniformity erodes trust. Research indicates that brand inconsistency across channels can confuse **up to 60% of consumers** and significantly weaken brand loyalty.",
    problemHeader: "The Risk of Inconsistent Branding",
    solution:
      "Define your brand once, and let AI do the rest. Our centralized brand profile system enforces your guidelines automatically, ensuring every automation follows your unique personality. Consistent branding across all platforms is proven to boost revenue by **20% or more**, securing customer trust and loyalty.",
    solutionHeader: "Automated Brand Alignment",
    benefits: [
      "Automated checks enforce consistent tone and style across all automations.",
      "Usage insights highlight where messaging deviates from brand personality.",
      "Reduces errors and revisions, keeping all customer interactions on-brand.",
    ],
    highlights: [
      {
        label: "Revenue Boost Potential",
        value: "20%+",
        helper: "Typical increase from consistent branding.",
      },
      {
        label: "Error Reduction",
        value: "Drastic Cut",
        helper: "Significantly reduces manual tone corrections.",
      },
      {
        label: "Insight Visibility",
        value: "Instant Feedback",
        helper: "Quickly see which automations need adjustment.",
      },
    ],
  },
  {
    slug: "email-automation",
    title: "Email Automation",
    subtitle:
      "Automate triggered emails and responses with AI or templates, saving time and engaging customers.",
    description:
      "AI or templates send responses and follow-ups for inquiries automatically—no more missed emails.",
    icon: FaEnvelopeOpenText,
    problem:
      "Is manually responding to every inquiry and sending follow-up emails draining your team’s time? Manually managed email cycles often lead to forgotten leads and inconsistent messaging. Studies suggest that automation can save sales and marketing teams **up to 7.5 hours per week** on repetitive tasks.",
    problemHeader: "The Email Time Sink",
    solution:
      "Eliminate repetitive email work forever. Our AI or prebuilt templates automatically deploy responses and complex triggered emails, ensuring timely, consistent communication for every customer. Businesses utilizing marketing automation often experience **a 14.5% increase in sales productivity**, allowing you to focus on strategic growth.",
    solutionHeader: "Boost Sales Productivity",
    benefits: [
      "Automated responses to inquiries or customer actions.",
      "Trigger-based emails that activate based on behavior or events.",
      "Option to use AI-generated content or prebuilt templates.",
      "Reduced manual effort and faster, more reliable communication.",
    ],
    highlights: [
      {
        label: "Productivity Lift",
        value: "14.5% Increase",
        helper: "Typical increase in sales productivity with automation.",
      },
      {
        label: "Lead Capture Reliability",
        value: "Maximized",
        helper: "Messages always use the right tone and timing.",
      },
      {
        label: "Repetitive Task Savings",
        value: "7+ Hours Weekly",
        helper: "Industry benchmark for time savings.",
      },
    ],
  },
  {
    slug: "website-development-integration",
    title: "Website Development & Integration",
    subtitle:
      "Build a website that captures customers, showcases your business, and integrates with existing AI systems.",
    description:
      "We build or upgrade your website for lead capture, AI messaging, and integrated automations.",
    icon: FaLaptopCode,
    problem:
      "Is your current website a passive brochure instead of an active conversion engine? If your site isn't fully integrated with your lead-capture and AI systems, you're missing opportunities. An outdated website design or poor integration can lead to a **conversion rate drop of 50% or more**.",
    problemHeader: "The Passive Website Problem",
    solution:
      "Get a website designed specifically to capture leads and convert visitors. We build or enhance your existing site by seamlessly integrating AI for chat, forms, and automated responses. Investing in conversion-optimized web design typically yields a **223% return on investment** due to higher lead volumes and faster conversions.",
    solutionHeader: "Convert Visitors, Maximize ROI",
    benefits: [
      "A website designed to capture leads and showcase your business to potential customers.",
      "Integration with existing AI for chat, forms, or automated responses.",
      "Fast deployment with no technical skills required.",
      "Built-in engagement tools to convert visitors into customers.",
    ],
    highlights: [
      {
        label: "Typical ROI on Design",
        value: "223%",
        helper: "ROI seen from conversion-optimized website design.",
      },
      {
        label: "AI Integration",
        value: "Seamless",
        helper: "Integrates messaging and automation with your existing tools.",
      },
      {
        label: "Lead capture improvement",
        value: "Optimized for conversions",
        helper: "Pages designed to convert visitors into actionable leads.",
      },
    ],
  },
];

export const marketingFeaturesContext = marketingFeatures
  .map((feature) => {
    const benefits = feature.benefits.slice(0, 3).join("; ");
    const highlights = feature.highlights
      .slice(0, 2)
      .map((highlight) => `${highlight.label}: ${highlight.value}`)
      .join("; ");

    return [
      `${feature.title}: ${feature.subtitle}`,
      `Problem: ${feature.problem}`,
      `Solution: ${feature.solution}`,
      `Benefits: ${benefits}`,
      `Proof: ${highlights}`,
    ].join("\n");
  })
  .join("\n\n");

export const getFeatureBySlug = (slug: string) =>
  marketingFeatures.find((feature) => feature.slug === slug);
