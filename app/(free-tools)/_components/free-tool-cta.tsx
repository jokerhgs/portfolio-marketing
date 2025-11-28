import Link from "next/link";

type FreeToolCTAProps = {
  path: string;
};

export const FreeToolCTA = ({ path }: FreeToolCTAProps) => {
  return (
    <div className="mt-3">
      <span className="font-semibold">
        …check out the AI Marketing Service →
      </span>{" "}
      <Link
        href={path}
        className="inline-block ml-2 px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition font-medium"
      >
        View Service
      </Link>
    </div>
  );
};
