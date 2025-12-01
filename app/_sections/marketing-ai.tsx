import Link from "next/link";
import {
  MarketingFeatureConfig,
  marketingFeatures,
} from "../ai-marketing/features-data";
import { Divider } from "../_components/divider";

type FeatureCardProps = Pick<
  MarketingFeatureConfig,
  "icon" | "title" | "description" | "slug"
>;

function FeatureCard({
  icon: Icon,
  title,
  description,
  slug,
}: FeatureCardProps) {
  // ReactNode output, so wrap single children (as array) in fragments to fix type warning.
  return (
    <div className="border border-border rounded-xl p-6 flex flex-col shadow hover:shadow-lg transition h-full bg-background">
      <div className="text-primary text-4xl mb-5 flex justify-center items-center">
        <Icon />
      </div>
      <h3 className="text-lg md:text-xl font-semibold mb-2 text-foreground text-center">
        {title}
      </h3>
      <p className="text-sm md:text-base text-secondary-foreground mb-6 text-center">
        {description}
      </p>
      <div className="mt-auto flex justify-center">
        <Link
          href={`/ai-marketing/${slug}`}
          className="bg-primary text-white px-5 py-2 rounded font-medium shadow transition hover:bg-primary/90 text-sm md:text-base text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}

export const MarketingAISection = () => {
  return (
    <section
      className="w-full max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20 bg-background flex flex-col gap-14 md:gap-16 items-center"
      id="marketing-ai"
    >
      {/* SECTION 1 — Hero (Big Promise) */}
      <div className="w-full flex flex-col items-center text-center gap-4 max-w-3xl">
        <h1 className="text-3xl md:text-4xl lg:text-5xl ">Introducing</h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-primary leading-snug">
          Marketing AI Service: Automate, Analyze, and Grow
        </h2>
        <Divider />
        <p className="text-lg md:text-xl text-muted-foreground font-normal">
          Automate your marketing, boost engagement, and convert more
          leads—without hiring extra staff.
        </p>
      </div>

      {/* SECTION 2 — Who It's For */}
      <div className="w-full bg-muted/40 rounded-xl flex flex-col items-start gap-3 max-w-6xl">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2 text-left">
          Who It&apos;s For?
        </h3>
        <p className="mb-2 text-base md:text-lg text-foreground text-left">
          This service is for small to medium businesses that want:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-x-8 gap-y-1 text-muted-foreground text-base md:text-lg list-disc list-inside w-full mx-0">
          <>
            <li>Consistent marketing across</li>
            <li>Faster responses to customers</li>
            <li>A unified brand voice</li>
            <li>Less time spent on repetitive tasks</li>
            <li>Clear insights into marketing performance</li>
            <li>A website that captures leads and showcases the business</li>
          </>
        </ul>
        <p className="text-base md:text-lg font-medium mt-2 text-left text-destructive">
          Without hiring more people.
        </p>
      </div>

      {/* SECTION 3 — The Problems (Call out the pain) */}
      <div className="w-full flex flex-col gap-3 items-start max-w-6xl">
        <h3 className="text-xl md:text-2xl font-semibold text-primary text-left">
          Why?
        </h3>
        <p className="text-base md:text-lg text-foreground text-left">
          <>
            Most businesses don’t need more marketing tasks.
            <br />
            They need the bottlenecks removed:
          </>
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-base md:text-lg text-muted-foreground text-left mb-2 list-inside list-disc w-full mx-0 pl-4">
          <>
            <li>Hard to know what actually works</li>
            <li>Content and posts are inconsistent</li>
            <li>Slow replies lead to lost opportunities</li>
            <li>Messaging and tone vary across channels</li>
            <li>Too much time spent on repetitive tasks</li>
            <li>
              Existing website fails to capture leads or attract customers
            </li>
          </>
        </ul>
        <p className="text-base md:text-lg text-foreground text-left">
          <>
            These problems multiply.
            <br />
            <span className="font-semibold">
              The solution is a unified approach that addresses them efficiently
              and effectively.
            </span>
          </>
        </p>
      </div>

      {/* SECTION 4 — The System (6 Modules) */}
      <div className="w-full flex flex-col items-center gap-6 max-w-6xl">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2 text-center">
          How It Works — Customizable Features
        </h3>
        <p className="text-base md:text-lg text-foreground mb-2 text-center">
          Every system is unique. Modules are examples of what can be included:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {marketingFeatures.map((feature) => (
            <FeatureCard key={feature.slug} {...feature} />
          ))}
        </div>
      </div>

      {/* SECTION 5 — Why It Works (Mechanism Explanation) */}
      <div className="w-full bg-muted/40 rounded-xl flex flex-col gap-3 items-start max-w-6xl">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-1 text-left">
          Why It Works
        </h3>
        <p className="text-base md:text-lg text-foreground text-left">
          <>
            Most solutions fix only one problem.
            <br />
            Our service solves them all by coordinating every part of your
            marketing, so everything works together seamlessly.
          </>
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-start items-start text-base md:text-lg mt-2 w-full">
          <>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">More consistency</span>
              <span className="mx-1">&rarr;</span>
              <span className="text-muted-foreground">more leads</span>
              <span className="mx-1">&rarr;</span>
              <span className="text-muted-foreground">more revenue</span>
            </div>
            <span className="hidden sm:inline px-2 text-muted-foreground">
              |
            </span>
            <div className="flex items-center gap-2">
              <span className="font-medium text-primary">Less manual work</span>
              <span className="mx-1">&rarr;</span>
              <span className="text-muted-foreground">lower cost</span>
              <span className="mx-1">&rarr;</span>
              <span className="text-muted-foreground">higher margins</span>
            </div>
          </>
        </div>
        <p className="mt-2 text-base md:text-lg text-left text-muted-foreground font-medium">
          That’s the compounding effect.
        </p>
      </div>

      {/* SECTION 8 — Risk Reversal (Guarantee) */}
      <div className="w-full flex flex-col items-start gap-3 bg-muted/40 rounded-xl max-w-6xl">
        <h3 className="text-xl md:text-2xl font-semibold text-primary mb-2 text-left">
          Risk? Zero
        </h3>
        <p className="text-base md:text-lg text-foreground text-left">
          <span className="font-semibold">
            If I can&apos;t automate at least 3 core marketing processes in 30
            days, you pay nothing.
          </span>
        </p>
        <div className="flex flex-col items-start gap-1">
          <>
            <p className="text-base md:text-lg text-foreground text-left">
              <span className="font-semibold">Your downside?</span> Nothing.
            </p>
            <p className="text-base md:text-lg text-foreground text-left">
              <span className="font-semibold">Your upside?</span> Everything.
            </p>
          </>
        </div>
      </div>

      {/* CTA: Contact Section Navigation */}
      <div className="w-full flex justify-center mt-8">
        <Link
          href="#contact"
          className="bg-primary text-white px-8 py-3 rounded-xl font-bold shadow transition hover:bg-primary/90 text-lg md:text-xl text-center"
        >
          Book a Free Discovery Call
        </Link>
      </div>
    </section>
  );
};
