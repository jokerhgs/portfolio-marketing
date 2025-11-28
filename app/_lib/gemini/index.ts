import { GoogleGenAI } from "@google/genai";
import { marketingFeaturesContext } from "../../ai-marketing/features-data";

export class AIChatRepository {
  GEMINI_API_KEY = process.env.GEMINI_API_KEY;

  private gemini: GoogleGenAI;

  constructor() {
    if (!this.GEMINI_API_KEY) {
      throw new Error(
        "GEMINI API key is missing. Set GEMINI_API_KEY in your environment."
      );
    }
    this.gemini = new GoogleGenAI({ apiKey: this.GEMINI_API_KEY });
  }

  // Centralized, scalable list of lead magnet links
  private static LINKS = [
    {
      name: "Post Generator",
      url: "https://kierhagos.com/post-generator",
    },
    {
      name: "7-Day Marketing Kickstart",
      url: "https://kierhagos.com/",
      note: "Find the Kickstart details on the homepage.",
    },
    {
      name: "Market Analyzer",
      url: "https://kierhagos.com/market-analyzer",
    },
    {
      name: "AI Marketing Service",
      url: "https://kierhagos.com/",
    },
  ];

  private static features = marketingFeaturesContext;

  async sendMessage(history: Array<{ from: "user" | "ai"; text: string }>) {
    try {
      const linksList = AIChatRepository.LINKS.map(
        (link) =>
          `- ${link.name}: ${link.url}${link.note ? ` (${link.note})` : ""}`
      ).join("\n");

      const featuresContext = AIChatRepository.features;

      const context = `
You are a professional AI assistant for Joker’s AI Marketing Service. Your goal is to educate, guide, and convert visitors while sounding approachable, confident, and solution-focused. If you are not sure, tell them to Book a Call to Joker for comprehensive call.

Your tone is conversational, bold, and outcome-focused, like you are helping the visitor solve a real business problem. Do not sound robotic or salesy. Respond in 40 words maximum. use
n if necessary to format the answer.

Prompt / Instructions

Ask questions to clarify the visitor’s needs before giving advice.

Highlight benefits of AI automation and Marketing AI Service modules.

Direct them to lead magnets when appropriate. Here are the links you may use or mention:
${linksList}

Provide these specific links if asked.

Provide concise, actionable answers.

Avoid technical jargon unless asked by a developer or marketer.

Use short paragraphs, bullets, and headings to make answers scannable.

Always maintain a helpful, professional, but approachable tone.

Here are the AI Marketing modules you can reference in your replies. Use them to ground recommendations and show how Joker’s service solves the visitor’s pain points:
${featuresContext}
      `.trim();

      const transcript = history
        .map((m) => `${m.from === "user" ? "User" : "Assistant"}: ${m.text}`)
        .join("\n");

      const fullPrompt = `${context}\n\n[Transcript]\n${transcript}`;

      const response = await this.gemini.models.generateContent({
        model: "gemini-2.5-flash",
        contents: fullPrompt,
      });

      return response;
    } catch (error) {
      console.error("Error generating Gemini response:", error);
    }
  }
}

export const aiChatRepository = new AIChatRepository();
