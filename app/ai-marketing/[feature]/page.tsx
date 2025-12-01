import { notFound } from "next/navigation";
import { CTASection } from "../_components/cta";
import { FeatureHeader } from "../_components/feature-header";
import { getFeatureBySlug, marketingFeatures } from "../features-data";
import { BackTab } from "@/app/_components/back-tab";

type FeaturePageProps = {
  params: Promise<{
    feature: string;
  }>;
};

export function generateStaticParams() {
  return marketingFeatures.map(({ slug }) => ({ feature: slug }));
}

export default async function FeaturePage({ params }: FeaturePageProps) {
  const { feature: featureSlug } = await params;
  const feature = getFeatureBySlug(featureSlug);

  if (!feature) {
    notFound();
  }

  const {
    icon: Icon,
    title,
    subtitle,
    problem,
    problemHeader,
    solution,
    solutionHeader,
    benefits,
    highlights,
  } = feature;

  return (
    <div className="flex flex-col">
      <BackTab />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <FeatureHeader icon={<Icon />} title={title} subtitle={subtitle} />
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary">
            {problemHeader}
          </h2>
          <p className="text-base text-muted-foreground">{problem}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary">
            {solutionHeader}
          </h2>
          <p className="text-base text-muted-foreground">{solution}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-primary">
            With Our AI Marketing Automation, You&#39;ll Get:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-base text-secondary-foreground">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </section>

        {highlights.length > 0 && (
          <section className="mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {highlights.map((highlight) => (
                <div
                  key={highlight.label}
                  className="border border-border rounded-lg p-4 shadow-sm bg-card"
                >
                  <p className="text-sm uppercase tracking-wide text-muted-foreground">
                    {highlight.label}
                  </p>
                  <p className="text-3xl font-bold text-primary mt-2">
                    {highlight.value}
                  </p>
                  <p className="text-xs text-secondary-foreground mt-1">
                    {highlight.helper}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        <CTASection />
      </div>
    </div>
  );
}
