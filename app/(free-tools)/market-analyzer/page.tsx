"use client";

import { useState } from "react";
import { Input } from "@/app/_components/input";
import { MultiselectDropdown } from "@/app/_components/multiselect-dropdown";
import { MdEmail, MdWork, MdPerson, MdShare } from "react-icons/md";
import { FreeToolCTA } from "../_components/free-tool-cta";
import { axiosClient } from "@/app/_lib/axios";

const SOCIAL_MEDIA_OPTIONS = [
  "Facebook",
  "Instagram",
  "YouTube",
  "TikTok",
  "Twitter/X",
  "LinkedIn",
];

const getCustomErrorMessage = (
  errorCode?: string,
  fallback?: string,
  message?: string
): string => {
  switch (errorCode) {
    case "VALIDATION_ERROR":
      return (
        message ||
        "One or more fields are not valid. Please check your info and try again."
      );
    case "LIMITATION_ERROR":
      return (
        message || "Sorry, you have reached the usage limit for this tool."
      );
    default:
      return (
        message || fallback || "An error occurred while generating the report."
      );
  }
};

export default function MarketAnalyzerPage() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    industry: "",
    social_channels: [] as string[],
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // Handler for MultiselectDropdown
  const handleMultiselectChange = (selectedValues: string[]) => {
    setForm((prev) => ({
      ...prev,
      social_channels: selectedValues,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");

    try {
      await axiosClient.post("/api/market-analyzer", form);
      setResponse("Report Successfully Generated, check your email!");

      // Optionally show a toast or message
    } catch (error: unknown) {
      if (
        error &&
        typeof error === "object" &&
        "response" in error &&
        error.response &&
        typeof error.response === "object" &&
        "data" in error.response &&
        error.response.data &&
        typeof error.response.data === "object" &&
        "error_code" in error.response.data
      ) {
        const errorCode = error.response.data.error_code as string;
        const errorMessage = getCustomErrorMessage(errorCode);
        setError(errorMessage);
      } else {
        setError("An error occurred while generating the report.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-6xl py-12 px-3 sm:px-6">
      <header className="mb-10 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">
          Free <span className="text-primary mx-2">|</span> Market Response
          Analyzer
        </h1>
        <h2 className="text-lg sm:text-xl font-semibold mb-2 text-primary">
          See how your business stacks up — and find out how much money you’re
          losing from slow response times.
        </h2>
        <p className="font-semibold text-primary mb-1">
          Powered by AI. Delivered automatically to your inbox.
        </p>
        <p className="text-secondary-foreground mb-2 max-w-xl mx-auto">
          Just fill in the details below—your report will be automatically
          created and delivered to your email within minutes.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Info Panel */}
        <section className="space-y-5 bg-card md:bg-transparent p-6 rounded-lg shadow-sm md:shadow-none border md:border-none">
          <div>
            <h3 className="text-lg font-semibold mb-1">
              What’s Inside Your Report
            </h3>
            <ul className="list-disc pl-6 space-y-1 text-secondary-foreground text-sm">
              <li>
                <span className="font-semibold">Industry Benchmarks</span>
                <br />
                Average response times for your industry and where you stand.
              </li>
              <li>
                <span className="font-semibold">
                  Channel-by-Channel Drop-Off
                </span>
                <br />
                FB Messenger, Instagram, WhatsApp, TikTok, website chat — with
                specific “cutoff” thresholds.
              </li>
              <li>
                <span className="font-semibold">
                  Opportunity Loss Breakdown
                </span>
                <br />
                How many leads and potential revenue you lose monthly due to
                slow replies.
              </li>
              <li>
                <span className="font-semibold">
                  AI Automation Recommendations
                </span>
                <br />
                Concrete steps to reduce response time and recover lost sales.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">How It Works</h3>
            <ol className="list-decimal pl-6 space-y-1 text-secondary-foreground text-sm">
              <li>Enter your business details</li>
              <li>Our analyzer processes your public-facing data</li>
              <li>
                The system sends your report directly to your
                email—automatically
              </li>
            </ol>
          </div>
        </section>

        {/* Value & Privacy Panel */}
        <section className="space-y-5 bg-card md:bg-transparent p-6 rounded-lg shadow-sm md:shadow-none border md:border-none">
          <div>
            <h3 className="text-lg font-semibold mb-1">Why It’s Free</h3>
            <p className="text-secondary-foreground text-sm">
              This analyzer gives you a preview of how AI-driven sales
              optimization works.
              <br />
              No obligation. No sales pitch. Just valuable insights.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-1">Privacy Note</h3>
            <p className="text-secondary-foreground text-sm">
              Your info is used solely to generate and send your report.
              <br />
              No spam. No sharing.
            </p>
          </div>
        </section>
      </div>

      <form
        className="bg-card max-w-3xl mx-auto p-8 rounded-lg shadow space-y-6 border border-border"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            id="first_name"
            label="First Name"
            icon={MdPerson}
            value={form.first_name}
            onChange={handleChange}
            required
            placeholder="e.g. Juan"
          />
          <Input
            id="last_name"
            label="Last Name"
            icon={MdPerson}
            value={form.last_name}
            onChange={handleChange}
            required
            placeholder="e.g. Dela Cruz"
          />
          <Input
            id="email"
            label="Email"
            icon={MdEmail}
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@email.com"
          />
          <Input
            id="industry"
            label="Industry"
            icon={MdWork}
            value={form.industry}
            onChange={handleChange}
            required
            placeholder="e.g. Real Estate, Dental, SaaS"
          />
          <div className="sm:col-span-2">
            <MultiselectDropdown
              id="social_channels"
              label="Social Media Channels"
              icon={MdShare}
              value={form.social_channels}
              onChange={handleMultiselectChange}
              required
              options={SOCIAL_MEDIA_OPTIONS}
              placeholder="Select social media channels"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white rounded font-semibold mt-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition"
          disabled={loading}
        >
          {loading ? "Generating..." : "Get My Free Report"}
        </button>
        {error && (
          <div className="text-red-500 text-center font-medium mt-2">
            {error}
          </div>
        )}
        {response && (
          <div className="bg-green-50 border text-green-700 p-4 rounded text-center mt-4">
            Success! Your report was generated and sent to your email.
          </div>
        )}
      </form>
      <p className="text-xs text-center text-muted-foreground mt-4">
        Your information is used only to generate and deliver your report. No
        spam.
      </p>

      <div className="max-w-2xl mx-auto mt-10 bg-muted/75 rounded-lg p-6 shadow space-y-4 text-center">
        <h3 className="text-lg font-bold mb-2 text-primary">
          Want Real Numbers For Your Business?
        </h3>
        <p className="text-secondary-foreground">
          Industry averages are useful.
          <br />
          <span className="block font-semibold">
            But they’re not your metrics.
          </span>
        </p>
        <p className="text-secondary-foreground text-sm">
          If you want to know <span className="font-medium">exactly</span>:
        </p>
        <ul className="list-disc mx-auto pl-6 text-left inline-block text-sm text-secondary-foreground space-y-1">
          <li>How fast your team actually responds</li>
          <li>How many leads are slipping through the cracks</li>
          <li>How much revenue automation could recover</li>
        </ul>
        <FreeToolCTA path={"/ai-marketing/customer-messaging-automation"} />
      </div>
    </main>
  );
}
