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
  solution: string;
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
      "SMBs waste time switching between tools and manually compiling reports to understand which campaigns actually drive revenue.",
    solution:
      "Our analytics engine connects every channel, cleans your data automatically, and surfaces the insights that matter—no spreadsheets or guesswork required.",
    benefits: [
      "Unified dashboard covering email, social, paid media, and web analytics.",
      "AI insights that highlight winners and flag underperforming campaigns.",
      "Actionable recommendations that tie spend to revenue impact.",
      "Live tracking of visits, conversions, and conversion rates.",
    ],
    highlights: [
      {
        label: "Average ROI lift",
        value: "22%",
        helper: "Seen after the first 60 days.",
      },
      {
        label: "Reporting time saved",
        value: "8 hrs/week",
        helper: "Thanks to automated dashboards.",
      },
      {
        label: "Data sources connected",
        value: "15+",
        helper: "Email, ads, social, CRM, and more.",
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
      "Teams lose momentum when ideation, approvals, and publishing happen across multiple tools, slowing output and reducing consistency.",
    solution:
      "Centralized planning, AI-assisted creation, and automated scheduling bring your entire content workflow into one streamlined system.",
    benefits: [
      "AI-assisted ideation for posts, newsletters, and landing pages.",
      "Auto-generated variations for each social channel.",
      "Central calendar with approvals, reminders, and gap alerts.",
      "One-click publishing to every major platform.",
    ],
    highlights: [
      {
        label: "Time saved per asset",
        value: "35 min",
        helper: "Brief → copy → scheduled automatically.",
      },
      {
        label: "Content velocity",
        value: "3×",
        helper: "Teams publish more without growing headcount.",
      },
      {
        label: "Brand compliance",
        value: "98%",
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
      "Manual responses are slow and inconsistent, causing frustrated customers and missed opportunities.",
    solution:
      "Our AI system replies instantly, follows up automatically, and escalates only when needed, keeping customers engaged and reducing response time.",
    benefits: [
      "Instant replies to customer questions and requests.",
      "Automated follow-ups prevent leads from slipping away.",
      "Reduces time spent on repetitive messages for staff.",
      "Improves customer satisfaction and retention without extra hires.",
    ],
    highlights: [
      {
        label: "Response-time reduction",
        value: "70–75% faster",
        helper: "Faster than manual replies.",
      },
      {
        label: "Self-service resolution",
        value: "Many queries",
        helper: "Solved without human intervention.",
      },
      {
        label: "Lead retention rate",
        value: "Higher",
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
      "Automations and messaging often have inconsistent tone or style, which confuses customers and weakens the brand.",
    solution:
      "A centralized brand profile defines how your brand sounds and looks. Our AI enforces these guidelines automatically, so every automation follows your unique brand personality—no matter the channel or team member.",
    benefits: [
      "Automated checks enforce consistent tone and style across all automations.",
      "Usage insights highlight where messaging deviates from brand personality.",
      "Reduces errors and revisions, keeping all customer interactions on-brand.",
    ],
    highlights: [
      {
        label: "Consistency improvement",
        value: "99%",
        helper: "99% of automations stay aligned with brand personality.",
      },
      {
        label: "Time saved",
        value: "50% fewer corrections",
        helper: "Cuts down on back-and-forth and manual revisions.",
      },
      {
        label: "Insight visibility",
        value: "Instant feedback",
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
      "Manually responding to inquiries or sending follow-up emails is time-consuming, inconsistent, and can lead to missed opportunities.",
    solution:
      "AI or prebuilt templates automatically send responses and triggered emails, ensuring timely, consistent communication without manual effort.",
    benefits: [
      "Automated responses to inquiries or customer actions.",
      "Trigger-based emails that activate based on behavior or events.",
      "Option to use AI-generated content or prebuilt templates.",
      "Reduced manual effort and faster, more reliable communication.",
    ],
    highlights: [
      {
        label: "Time saved per response",
        value: "4+ hrs weekly",
        helper: "Eliminates repetitive manual emailing.",
      },
      {
        label: "Consistency improvement",
        value: "99%",
        helper: "Messages always use the right tone and timing.",
      },
      {
        label: "Customer retention impact",
        value: "Fewer missed follow-ups",
        helper: "Reduces lost leads due to late or missing emails.",
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
      "Many SMBs lack a website that effectively attracts visitors, captures leads, or integrates with their AI systems.",
    solution:
      "We create a website designed to showcase your business and capture leads, or we enhance your existing site by integrating AI for messaging, forms, and automated responses—all with fast deployment and no technical expertise needed.",
    benefits: [
      "A website designed to capture leads and showcase your business to potential customers.",
      "Integration with existing AI for chat, forms, or automated responses.",
      "Fast deployment with no technical skills required.",
      "Built-in engagement tools to convert visitors into customers.",
    ],
    highlights: [
      {
        label: "Deployment time saved",
        value: "70% faster",
        helper: "Than traditional website development.",
      },
      {
        label: "AI integration options",
        value: "Works with your systems",
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
