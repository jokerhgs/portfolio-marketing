"use client";
import { useState } from "react";
import {
  MdEmail,
  MdBusiness,
  MdWork,
  MdListAlt,
  MdPeople,
  MdRecordVoiceOver,
  MdLanguage,
  MdPerson,
} from "react-icons/md";
import { Input } from "@/app/_components/input";
import { TextArea } from "@/app/_components/text-area";
import { Dropdown } from "@/app/_components/dropdown";
import { BackTab } from "@/app/_components/back-tab";
import { FreeToolCTA } from "../_components/free-tool-cta";
import { axiosClient } from "@/app/_lib/axios";
const LANGUAGE_OPTIONS = ["English", "Tagalog", "Taglish"];
const TONE_OPTIONS = [
  "Friendly",
  "Professional",
  "Casual",
  "Witty",
  "Inspirational",
  "Authoritative",
  "Conversational",
  "Encouraging",
  "Urgent",
  "Informative",
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
        message || fallback || "An error occurred while generating the post."
      );
  }
};

export default function PostGenerator() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    business_name: "",
    industry: "",
    products_services: "",
    target_audience: "",
    tone: "",
    language: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  // Shared handlers
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResponse("");

    // products_services must be a string
    const result = {
      ...form,
      products_services: form.products_services,
    };

    try {
      await axiosClient.post("/api/post-generator", result);
      setResponse("Post Successfully Generated, check your email!");

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
        setError("An error occurred while generating the post.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col ">
      <BackTab />
      <main className="mx-auto max-w-6xl py-12 px-3 sm:px-6">
        <header className="mb-10 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight">
            Free 7-Day Marketing Kickstart
          </h1>
          <h2 className="text-lg sm:text-xl font-semibold mb-2 text-primary">
            Get a free professionally structured, AI-generated social media post
            tailored to your business.
          </h2>
          <p className="font-semibold text-primary mb-1">
            Powered by AI. Delivered automatically to your inbox.
          </p>
          <p className="text-secondary-foreground mb-2 max-w-xl mx-auto">
            Just fill in the details below—your post will be automatically
            created and delivered to your email within minutes.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Info Panel */}
          <section className="space-y-5 bg-card md:bg-transparent p-6 rounded-lg shadow-sm md:shadow-none border border-border md:border-none">
            <div>
              <h3 className="text-lg font-semibold mb-1">
                What You’ll Receive
              </h3>
              <ul className="list-disc pl-6 space-y-1 text-secondary-foreground text-sm">
                <li>An AI-generated post based on your inputs</li>
                <li>A strong hook, body, and call-to-action</li>
                <li>Optional hashtags</li>
                <li>A suggested creative angle (image or video concept)</li>
                <li>Delivered to your email through our automated system</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">How It Works</h3>
              <ol className="list-decimal pl-6 space-y-1 text-secondary-foreground text-sm">
                <li>Enter your business details</li>
                <li>Our AI generates a customized post</li>
                <li>
                  The system sends your post directly to your
                  email—automatically
                </li>
              </ol>
            </div>
          </section>

          {/* Value & Privacy Panel */}
          <section className="space-y-5 bg-card md:bg-transparent p-6 rounded-lg shadow-sm md:shadow-none border border-border md:border-none">
            <div>
              <h3 className="text-lg font-semibold mb-1">Why It’s Free</h3>
              <p className="text-secondary-foreground text-sm">
                This generator gives you a preview of how AI-driven marketing
                works behind the scenes.
                <br />
                No obligation. No sales pitch. Just value.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-1">Privacy Note</h3>
              <p className="text-secondary-foreground text-sm">
                Your details are used solely to generate and send your post.
                <br />
                No spam. No sharing.
              </p>
            </div>
          </section>
        </div>

        <form
          className="bg-card max-w-6xl mx-auto p-8 rounded-lg shadow space-y-6 border border-border"
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
              id="business_name"
              label="Business Name"
              icon={MdBusiness}
              value={form.business_name}
              onChange={handleChange}
              required
              placeholder="e.g. Acme Corp"
            />
            <Input
              id="industry"
              label="Industry"
              icon={MdWork}
              value={form.industry}
              onChange={handleChange}
              required
              placeholder="e.g. Technology"
            />
            {/* Removed "Offer" */}
            <Input
              id="target_audience"
              label="Target Audience"
              icon={MdPeople}
              value={form.target_audience}
              onChange={handleChange}
              required
              placeholder="e.g. Small business owners"
            />
            <Dropdown
              id="tone"
              label="Tone"
              icon={MdRecordVoiceOver}
              value={form.tone}
              onChange={handleDropdownChange}
              required
              options={TONE_OPTIONS}
              placeholder="Select tone..."
            />
            <Dropdown
              id="language"
              label="Language"
              icon={MdLanguage}
              value={form.language}
              onChange={handleDropdownChange}
              required
              options={LANGUAGE_OPTIONS}
              placeholder="Select language..."
            />
            <div className="sm:col-span-2">
              <TextArea
                id="products_services"
                label="Products / Services"
                icon={MdListAlt}
                value={form.products_services}
                onChange={handleChange}
                required
                rows={2}
                placeholder="e.g. Web development, Mobile app development, API integrations"
                extraLabel={
                  <span className="ml-2 text-xs text-gray-500">
                    (comma separated)
                  </span>
                }
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-primary text-white rounded font-semibold mt-4 flex items-center justify-center gap-2 hover:bg-primary/90 transition"
            disabled={loading}
          >
            {loading ? "Generating..." : "Generate Post"}
          </button>
          {error && (
            <div className="text-red-500 text-center font-medium mt-2">
              {error}
            </div>
          )}
          {response && (
            <div className="bg-green-50 border text-green-700 p-4 rounded text-center mt-4">
              Success! Your post was generated and sent to your email.
            </div>
          )}
        </form>
        <div className="max-w-2xl mx-auto mt-10 bg-muted/75 rounded-lg p-6 shadow space-y-4 text-center">
          <h3 className="text-lg font-bold mb-2 text-primary">
            Want More Than Just 7 Posts?
          </h3>
          <p className="text-secondary-foreground">
            A week of posts is a great start.
            <br />
            <span className="block font-semibold">
              But it’s not your full marketing engine.
            </span>
          </p>
          <p className="text-secondary-foreground text-sm">
            If you want to know <span className="font-medium">exactly</span>:
          </p>
          <ul className="list-disc mx-auto pl-6 text-left inline-block text-sm text-secondary-foreground space-y-1">
            <li>How to keep content flowing daily without lifting a finger</li>
            <li>How to stay consistent across multiple platforms</li>
            <li>
              How AI can handle content creation while you focus on growth
            </li>
          </ul>
          <FreeToolCTA path={"/ai-marketing/content-creation-scheduling"} />
        </div>
      </main>
    </div>
  );
}
