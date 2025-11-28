import { Divider } from "../_components/divider";
import Image from "next/image";

export const AboutSection = () => {
  return (
    <section
      id="about"
      className="scroll-mt-24 w-full min-h-screen flex flex-col items-center justify-center bg-background px-3 md:px-8 py-14 md:py-28"
    >
      <div className="max-w-6xl w-full flex flex-col items-center gap-10">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2 text-center">
          Who am I?
        </h2>
        <Divider />
        {/* Use flex layout on mobile, grid on large screens */}
        <div className="flex flex-col gap-8 w-full items-stretch lg:grid lg:grid-cols-3 lg:gap-10 lg:items-start">
          {/* Profile Section */}
          <div className="flex flex-col items-center lg:items-start gap-3 col-span-1 w-full max-w-xs lg:max-w-full mx-auto lg:mx-0">
            <div className="w-full flex flex-col items-center lg:items-start">
              <Image
                src="/profile-picture.png"
                alt="Kier Hagos"
                width={300}
                height={300}
                className="rounded-lg object-cover object-top shadow-lg mb-2 w-full max-h-[350px] aspect-square h-auto min-h-[180px] sm:min-h-[220px] max-w-[270px] sm:max-w-xs"
                priority
              />
            </div>
            <span className="text-xs text-gray-400 mt-1 italic text-center lg:text-left w-full">
              *Image enhanced by AI
            </span>
            <div className="mt-2 w-full flex flex-col items-center lg:items-start">
              <span className="text-xl md:text-2xl font-bold text-primary">
                Joe Kier Hagos
              </span>
              <span className="text-gray-400 text-sm ml-0 lg:ml-1">
                /ˈjōker/
              </span>
            </div>
          </div>

          {/* Bio and Story */}
          <div className="lg:col-span-2 flex flex-col justify-start h-full w-full">
            <div className="flex flex-col gap-7 text-base md:text-lg text-secondary-foreground leading-relaxed">
              <p>
                Started as a{" "}
                <span className="text-primary font-semibold">
                  Software Engineer
                </span>{" "}
                with decent{" "}
                <span className="text-primary font-semibold">AI</span> and{" "}
                <span className="text-primary font-semibold">DevOps</span>{" "}
                chops.
              </p>
              <p>
                But the moment I tried to grow, I hit the same wall every
                founder hits: I had to market myself.
              </p>
              <p>
                And once I got into it, the truth smacked me in the face —
                marketing is just the same handful of tasks done over and over
                again.
                <br />
                Rinse and repeat.
                <br />
                Perfect for automation.
              </p>
              <p>
                I kept seeing the same pattern inside other businesses: data
                everywhere, content all over the place, follow-ups falling
                through the cracks, and money leaking out of the pipeline.
              </p>
              <p>
                So I built the{" "}
                <span className="font-semibold text-primary">
                  Marketing AI Service — Automate, Analyze, Grow
                </span>{" "}
                — a done-for-you, fully customized AI automation system designed
                to remove the busywork and let a business actually scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
