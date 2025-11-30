"use client";

type ContactFooterProps = {
  buildYear: number;
};

export const ContactFooter = ({ buildYear }: ContactFooterProps) => {
  const currentYear = new Date().getFullYear();
  const year = Math.max(buildYear, currentYear);

  return (
    <div className="mt-12 md:mt-16 text-center text-xs sm:text-sm text-secondary-foreground">
      Copyright © <span>{year}</span> by Joe Kier Hagos | All Rights Reserved.
    </div>
  );
};
