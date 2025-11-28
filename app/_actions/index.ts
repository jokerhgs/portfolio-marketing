"use server";
import { cookies } from "next/headers";
import { aiChatRepository } from "../_lib/gemini";

export const sendMessage = async (
  history: Array<{ from: "user" | "ai"; text: string }>
) => {
  try {
    const cookieStore = await cookies();

    const existingTokenCountStr = cookieStore.get("TOKEN_COUNT")?.value;

    const existingTokenCount = existingTokenCountStr
      ? parseInt(existingTokenCountStr)
      : 0;

    if (existingTokenCount >= 2000) {
      return "token limit reached";
    }

    const data = await aiChatRepository.sendMessage(history);

    const tokenCount = data?.usageMetadata?.totalTokenCount ?? 0;

    const newTokenCount = existingTokenCount + tokenCount;

    cookieStore.set("TOKEN_COUNT", newTokenCount.toString(), {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw error;
  }
};
