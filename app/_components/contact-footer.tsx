"use client";

import { useEffect, useState } from "react";

type ContactFooterProps = {
  buildYear: number;
};

export const ContactFooter = ({ buildYear }: ContactFooterProps) => {
  const [year, setYear] = useState(buildYear);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    if (currentYear !== buildYear) {
      setYear(currentYear);
    }
  }, [buildYear]);

  return (
    <div className="mt-12 md:mt-16 text-center text-xs sm:text-sm text-secondary-foreground">
      Copyright © <span>{year}</span> by Joe Kier Hagos | All Rights Reserved.
    </div>
  );
};
