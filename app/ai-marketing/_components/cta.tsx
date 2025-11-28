import Link from "next/link";

// Reusable CTA Section component with hardcoded content (no props)
export const CTASection: React.FC = () => (
  <section className="flex flex-col sm:flex-row items-center gap-4 justify-center mt-8">
    <Link
      href="/#contact"
      className="bg-primary text-white px-6 py-3 rounded-full font-semibold shadow transition hover:bg-primary/90 text-base"
    >
      Book a Free Strategy Call
    </Link>
    <span className="text-sm text-muted-foreground">
      Start unlocking insights in 30 minutes or less.
    </span>
  </section>
);
