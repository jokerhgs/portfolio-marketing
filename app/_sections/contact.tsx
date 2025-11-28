import Link from "next/link";
import { FaFacebookF, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { ContactFooter } from "../_components/contact-footer";

export const ContactSection = () => {
  const buildYear = new Date().getFullYear();
  const contactList = [
    {
      name: "Facebook",
      handle: "Joe Kier Hagos",
      link: "https://web.facebook.com/joekier.hagos",
      icon: FaFacebookF,
    },
    {
      name: "GitHub",
      handle: "jokerhgs",
      link: "https://github.com/jokerhgs",
      icon: FaGithub,
    },
    {
      name: "Gmail",
      handle: "joekierhagos11@gmail.com",
      link: "mailto:joekierhagos11@gmail.com",
      icon: MdEmail,
    },
  ];

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-background w-full py-12 md:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-center border-b border-border pb-3 md:pb-4">
          Get In Touch
        </h2>
        {/* Intro Text */}
        <div className="w-full flex justify-center mt-8">
          <p className="text-secondary-foreground text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl text-center">
            {`Need help with your business or projects? Don't hesitate to reach out anytime. I typically respond within 24 hours.`}
          </p>
        </div>
        {/* Merged Inputs & Contact List with Vertical Divider */}
        <div className="mt-10 flex flex-col md:flex-row justify-center items-start w-full gap-0 md:gap-0">
          <div className="w-full md:w-auto flex flex-col md:flex-row bg-background border border-border rounded-xl shadow-sm overflow-hidden">
            {/* Form side */}
            <div className="w-full md:w-[370px] lg:w-[415px] p-6 md:p-8 flex flex-col">
              <h3 className="text-lg md:text-xl font-medium text-primary mb-4 text-center md:text-left">
                Send me a message
              </h3>
              <form
                className="flex flex-col gap-4"
                action="https://formspree.io/f/your-form-id" // replace with your Formspree or endpoint
                method="POST"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-1 text-secondary-foreground"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="off"
                    className="w-full px-3 py-2 rounded border border-border bg-transparent text-foreground placeholder:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1 text-secondary-foreground"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    autoComplete="off"
                    className="w-full px-3 py-2 rounded border border-border bg-transparent text-foreground placeholder:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1 text-secondary-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    className="w-full px-3 py-2 rounded border border-border bg-transparent text-foreground placeholder:text-secondary-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="How can I help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="mt-3 px-6 py-2 rounded-md bg-primary text-white font-medium text-base transition-all hover:bg-primary/90"
                >
                  Send Message
                </button>
              </form>
            </div>
            {/* Vertical divider for desktop */}
            <div className="hidden md:flex h-auto w-px bg-border my-8" />
            {/* Contact list side */}
            <div className="w-full md:w-[320px] lg:w-[380px] p-6 md:p-8 flex flex-col">
              <h3 className="text-lg md:text-xl font-medium text-primary mb-4 text-center md:text-left">
                Or reach out on...
              </h3>
              <div className="flex flex-col gap-3 w-full">
                {contactList.map(
                  ({ name, handle, link, icon: Icon }, index) => (
                    <Link
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group hover:bg-primary/5 transition-colors duration-200 p-4 rounded-lg flex items-center gap-3"
                    >
                      <div className="p-2 bg-primary/10 group-hover:bg-primary/20 rounded-full transition-colors duration-200 text-foreground">
                        <Icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-secondary-foreground">
                          {name}
                        </span>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {handle}
                        </span>
                      </div>
                    </Link>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <ContactFooter buildYear={buildYear} />
      </div>
    </section>
  );
};
