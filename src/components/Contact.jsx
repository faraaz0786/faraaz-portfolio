// src/components/Contact.jsx
import { useRef, useState } from "react";
import SectionHeader from "./SectionHeader";
import { SITE } from "../data/site";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

// ── Replace these with your EmailJS credentials ─────────────
const EMAILJS_SERVICE_ID  = "service_apoaszk";
const EMAILJS_TEMPLATE_ID = "template_voyozmt";
const EMAILJS_PUBLIC_KEY  = "Pe_mq2L309lBfvXQx";
// ────────────────────────────────────────────────────────────

function InfoCard({ icon, title, value, href }) {
  const Wrapper = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="flex items-center gap-3 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/60 hover:shadow-soft transition"
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
    >
      <div className="h-10 w-10 rounded-full grid place-items-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
        {icon}
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {title}
        </div>
        <div className="font-medium">{value}</div>
      </div>
    </Wrapper>
  );
}

export default function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");   // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const fd = new FormData(e.currentTarget);
    if (fd.get("_gotcha")) {
      setStatus("success");
      e.currentTarget.reset();
      return;
    }

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err?.text || err?.message || "Failed to send. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="section-block scroll-mt-28 font-body mb-8"
    >
      <SectionHeader
        index="08"
        title="Contact."
        subtitle="Let’s build something great together."
      />

      <div className="card p-6 md:p-8 mt-6">
        <div className="grid md:grid-cols-[1fr,auto,1.3fr] gap-6 md:gap-8 items-start">
          {/* Left: contact info */}
          <div className="space-y-4">
            <InfoCard icon={<Phone size={18}/>} title="Phone" value={SITE.phone} href={`tel:${SITE.phone.replace(/\s/g, "")}`} />
            <InfoCard icon={<Mail size={18}/>}  title="Email" value={SITE.email} href={`mailto:${SITE.email}`} />
            <InfoCard icon={<MapPin size={18}/>} title="Location" value={SITE.location} />
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch bg-slate-200 dark:bg-slate-800" />

          {/* Right: form */}
          {status === "success" ? (
            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              Thanks! Your message has been sent. I’ll get back to you shortly.
            </div>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 w-full">
              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1" htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Jane Doe"
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-1" htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  placeholder="Write your message here..."
                  className="w-full px-3 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900"
                />
              </div>

              <button disabled={status === "loading"} className="btn-gradient inline-flex items-center gap-2">
                {status === "loading" ? "Sending..." : (<><Send size={16}/> Send</>)}
              </button>

              {status === "error" && (
                <div className="text-sm text-red-600 dark:text-red-400 mt-2">{errorMsg}</div>
              )}
              <div className="text-xs text-slate-500">
                Powered by EmailJS. Your email is only used to reply to this message.
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
