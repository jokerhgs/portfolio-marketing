import Link from "next/link";
import { Divider } from "../_components/divider";

type FreeToolCardProps = {
  badge: string;
  title: string;
  description: string;
  valuePoints: string[];
  cta: string;
  href: string;
  className?: string;
};

function FreeToolCard({
  badge,
  title,
  description,
  valuePoints,
  cta,
  href,
  className = "",
}: FreeToolCardProps) {
  return (
    <div
      className={`flex flex-col h-full bg-background p-6 rounded-lg shadow-lg border border-border ${className}`}
    >
      <div className="mb-2 text-sm text-primary font-semibold uppercase tracking-wide">
        {badge}
      </div>
      <h2 className="text-xl font-bold text-primary mb-2">{title}</h2>
      <div className="mb-2">
        <p className="text-foreground">{description}</p>
      </div>
      <div className="mb-3 flex-1">
        <ul className="list-disc pl-5 text-foreground">
          {valuePoints.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <Link
          href={href}
          className="inline-block bg-primary hover:bg-primary/80 text-white font-semibold py-2 px-4 rounded transition mb-1"
        >
          {cta}
        </Link>
      </div>
    </div>
  );
}

export const FreeToolsSection = () => {
  return (
    <section className="bg-background">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-primary mb-6">
          Kickstart Your Marketing
        </h1>
        <Divider />
        <p className="text-secondary-foreground mt-2 w-full mx-auto">
          Grab free AI-generated content and industry insights to jumpstart your
          marketing — without hiring extra staff.
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
        <FreeToolCard
          badge="Free | 7-Day Marketing Kickstart"
          title="7 Free AI-Generated Posts"
          description="7 ready-to-post, AI-generated social media posts tailored to your business — delivered straight to your email."
          valuePoints={[
            "Save time each week with ready-made content ideas",
            "Post consistently on every platform with minimal effort",
            "Get four structured captions including hooks and calls-to-action",
            "Suggested images and headlines tailored exactly to your audience",
          ]}
          cta="Get My 7 Free Posts"
          href="/post-generator/"
          className="md:mb-0 flex-1"
        />
        <FreeToolCard
          badge="Free | Market Response Analyzer"
          title="Get Your Industry Benchmark Report"
          description="A comprehensive industry benchmark report showing average response times, customer drop-offs, and lost opportunities."
          valuePoints={[
            "Track competitor and industry-average response in real numbers",
            "Pinpoint friction points in your sales or lead follow-up pipeline",
            "See lost revenue caused by slow messaging or team inaction",
            "Get easy, actionable recommendations to respond much faster",
          ]}
          cta="Get My Industry Report"
          href="/market-analyzer"
          className="flex-1"
        />
      </div>
    </section>
  );
};
