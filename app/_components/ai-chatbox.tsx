"use client";
import { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";
import { SiGoogle } from "react-icons/si";
import { sendMessage } from "@/app/_actions";

type Message = {
  from: "user" | "ai";
  text: string;
};

const JokerAIAvatar = () => (
  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/90 border-2 border-primary shadow">
    <FaRobot className="text-white" size={18} />
  </div>
);

export const AIChatBox = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      from: "ai",
      text: "Hi! I'm Joker AI – your support agent for Joe Kier Hagos' portfolio. Ask me anything about Joe Kier, AI Marketing Service or anything you see here!",
    },
  ]);
  const [input, setInput] = useState("");
  const [state, setState] = useState<"loading" | "error" | "token-limit" | "">(
    ""
  );
  const [chatDisabled, setChatDisabled] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  // Use aiChatRepository for AI response with chat history
  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || state === "loading" || chatDisabled) return;
    const userMessage: Message = { from: "user", text: input };
    setMessages((msgs) => [...msgs, userMessage]);
    setInput("");
    setState("loading");
    // Pass the full chat history including the new user message
    sendMessage([...messages, userMessage])
      .then((aiResponse) => {
        // Check for token limit response
        if (
          typeof aiResponse === "string" &&
          aiResponse.toLowerCase().includes("token limit")
        ) {
          setMessages((msgs) => [
            ...msgs,
            {
              from: "ai",
              text: "It looks like you've reached the maximum number of messages for this chat session. If you need further assistance, please visit the Contact section of the website to get in touch with Kier Hagos directly. Thank you for your interest!",
            },
          ]);
          setChatDisabled(true);
          setState("token-limit");
          return;
        }
        // Normal AI response
        const message = aiResponse.candidates[0].content.parts[0].text;
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: message,
          },
        ]);
      })
      .catch(() => {
        setMessages((msgs) => [
          ...msgs,
          {
            from: "ai",
            text: "Sorry, there was an error. Please try again.",
          },
        ]);
      })
      .finally(() => {
        if (state !== "token-limit") setState("");
      });
  };

  const isLoading = state === "loading";

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="flex flex-col items-end">
        <div className="flex items-center">
          {!open && (
            <button
              aria-label="Open AI Chat Support"
              onClick={() => setOpen(true)}
              className="flex items-center bg-background px-3 py-1 rounded-md shadow-lg border border-border select-none hover:bg-accent/10 transition-all focus:outline-none"
              disabled={isLoading || chatDisabled}
            >
              <FaRobot size={20} className="text-primary mr-2" />
              <span className="text-sm font-medium text-primary">
                Talk with Joker AI
              </span>
            </button>
          )}
        </div>
      </div>
      {/* Chat Box */}
      <div
        className={`
          fixed z-50
          right-8 bottom-8
          sm:static sm:right-auto sm:bottom-auto
          pointer-events-none
        `}
      >
        <div
          className={`
            ${open ? "pointer-events-auto" : "pointer-events-none"}
          `}
        >
          {/* Mobile overlay */}
          <div
            className={`
              fixed left-0 right-0
              transition-all duration-300 ease-in-out
              z-50
              sm:hidden
              ${open ? "bottom-0" : "-bottom-[80vh]"}
              ${open ? "opacity-100" : "opacity-0"}
              h-[75vh] max-h-[90vh] min-h-[320px]
            `}
          >
            <div
              className={`
                w-full h-full
                bg-white dark:bg-zinc-900 border-t border-border
                shadow-2xl flex flex-col overflow-hidden
                rounded-t-md
                animate-fade-in-mobile
              `}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-primary text-white">
                <span className="font-semibold">Joker AI - Chat Support</span>
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-accent focus:outline-none"
                  disabled={isLoading}
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="flex-1 px-4 py-3 overflow-y-auto bg-background">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 flex ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.from === "ai" ? (
                      <>
                        <div className="mr-2 shrink-0">
                          <JokerAIAvatar />
                        </div>
                        <div
                          className={`px-3 py-2 rounded-lg text-sm max-w-[80%] border bg-accent/10 text-primary border-border`}
                        >
                          {msg.text}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={`px-3 py-2 rounded-lg text-sm max-w-[80%] border bg-primary text-white border-primary`}
                        >
                          {msg.text}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form
                onSubmit={handleSend}
                className="flex items-center border-t border-border bg-background px-2 py-2"
              >
                <input
                  type="text"
                  className="flex-1 px-3 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background placeholder:text-muted-foreground"
                  placeholder={
                    chatDisabled ? "Chat disabled." : "Type your message..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) handleSend(e);
                  }}
                  autoComplete="off"
                  disabled={isLoading || chatDisabled}
                />
                <button
                  type="submit"
                  className={`ml-2 px-3 py-2 rounded-lg bg-primary text-white hover:bg-accent transition-all text-sm font-medium ${
                    isLoading || chatDisabled
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  } flex items-center justify-center`}
                  disabled={!input.trim() || isLoading || chatDisabled}
                >
                  {isLoading ? (
                    <span className="inline-block w-5 h-5">
                      <span className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    </span>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
              {/* Powered by Gemini note */}
              <div className="text-xs text-muted-foreground text-center py-2 bg-background border-t border-border flex items-center justify-center gap-1">
                Powered by
                <span className="font-semibold flex items-center gap-1">
                  <SiGoogle className="inline-block text-[#4285F4]" size={14} />
                  Gemini
                </span>
              </div>
            </div>
          </div>
          {/* Desktop chatbox */}
          {open && (
            <div
              className={`
                hidden sm:flex
                w-96 max-w-[95vw] bg-white dark:bg-zinc-900 border border-border rounded-md shadow-2xl flex-col overflow-hidden animate-fade-in
                fixed right-8 bottom-8 z-50
              `}
            >
              <div className="flex items-center justify-between px-4 py-3 bg-primary text-white">
                <span className="font-semibold">Joker AI - Chat Support</span>
                <button
                  aria-label="Close chat"
                  onClick={() => setOpen(false)}
                  className="text-white hover:text-accent focus:outline-none"
                  disabled={isLoading}
                >
                  <FaTimes size={20} />
                </button>
              </div>
              <div className="flex-1 px-4 py-3 overflow-y-auto max-h-72 bg-background">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`mb-2 flex ${
                      msg.from === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {msg.from === "ai" ? (
                      <>
                        <div className="mr-2 shrink-0">
                          <JokerAIAvatar />
                        </div>
                        <div
                          className={`px-3 py-2 rounded-lg text-sm max-w-[80%] border bg-accent/10 text-primary border-border`}
                        >
                          {msg.text}
                        </div>
                      </>
                    ) : (
                      <>
                        <div
                          className={`px-3 py-2 rounded-lg text-sm max-w-[80%] border bg-primary text-white border-primary`}
                        >
                          {msg.text}
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form
                onSubmit={handleSend}
                className="flex items-center border-t border-border bg-background px-2 py-2"
              >
                <input
                  type="text"
                  className="flex-1 px-3 py-2 rounded-md border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm bg-background placeholder:text-muted-foreground"
                  placeholder={
                    chatDisabled ? "Chat disabled." : "Type your message..."
                  }
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) handleSend(e);
                  }}
                  autoComplete="off"
                  disabled={isLoading || chatDisabled}
                />
                <button
                  type="submit"
                  className={`ml-2 px-3 py-2 rounded-lg bg-primary text-white hover:bg-accent transition-all text-sm font-medium ${
                    isLoading || chatDisabled
                      ? "opacity-60 cursor-not-allowed"
                      : ""
                  } flex items-center justify-center`}
                  disabled={!input.trim() || isLoading || chatDisabled}
                >
                  {isLoading ? (
                    <span className="inline-block w-5 h-5">
                      <span className="block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    </span>
                  ) : (
                    "Send"
                  )}
                </button>
              </form>
              {/* Powered by Gemini note */}
              <div className="text-xs text-muted-foreground text-center py-2 bg-background border-t border-border flex items-center justify-center gap-1">
                Powered by
                <span className="font-semibold flex items-center gap-1">
                  <SiGoogle className="inline-block text-[#4285F4]" size={14} />
                  Gemini
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* Tailwind animation for fade-in and spinner */}
      <style jsx global>{`
        .animate-fade-in {
          animation: fadeInChat 0.25s;
        }
        @keyframes fadeInChat {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.98);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in-mobile {
          animation: fadeInChatMobile 0.3s;
        }
        @keyframes fadeInChatMobile {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-spin {
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
};
