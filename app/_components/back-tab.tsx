import Link from "next/link";

export const BackTab = () => {
  return (
    <div className="mb-6 p-4">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline group"
      >
        <span
          aria-hidden="true"
          className="transition-transform group-hover:-translate-x-1"
        >
          ←
        </span>
        Back to all features
      </Link>
    </div>
  );
};
