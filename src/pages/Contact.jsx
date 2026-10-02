import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import { ArrowLeft, Handshake } from "lucide-react";
import heroImage from "../assets/hero/contact-hero.png";

function Contact() {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");
      e.target.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative flex min-h-[560px] items-center overflow-hidden bg-forest py-20 text-white lg:min-h-[680px] lg:py-28">
        <img
          src={heroImage}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border-[40px] border-white" />
          <div className="absolute -bottom-32 -left-20 h-96 w-96 rounded-full border-[50px] border-white" />
        </div>

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/80 transition hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Home
            </Link>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Contact EACHRights
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85">
              We welcome your inquiries, feedback, partnership opportunities
              and engagement as we work together to advance human rights and
              social justice in East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Let’s Connect
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Thank you for your interest in reaching out to the East African
              Centre for Human Rights (EACHRights).
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              Please feel free to reach out to us using the contact information
              provided below. We welcome any inquiries, feedback, or
              collaboration opportunities.
            </p>

            <p className="mt-4 text-lg leading-8 text-gray-600">
              We value your engagement and look forward to hearing from you.
              Together, we can make a difference in advancing human rights
              across East Africa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFORMATION + FORM */}
      <section className="bg-forest-soft py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

            {/* CONTACT DETAILS */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-ink sm:text-4xl">
                Our Head Office
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-600">
                You can reach the EACHRights team through our office,
                telephone or email contacts below.
              </p>

              <div className="mt-10 space-y-8">

                {/* ADDRESS */}
                <div className="border-b border-gray-200 pb-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-forest">
                    Our Head Office Address
                  </p>

                  <p className="mt-2 text-lg leading-8 text-ink">
                    Apartment N5
                    <br />
                    Nine Planets Apartments
                    <br />
                    Kabarnet Road
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>

                {/* POSTAL */}
                <div className="border-b border-gray-200 pb-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-forest">
                    EACHRights Postal Address
                  </p>

                  <p className="mt-2 text-lg text-ink">
                    P.O. Box 19494-00100
                    <br />
                    Nairobi, Kenya
                  </p>
                </div>

                {/* PHONE */}
                <div className="border-b border-gray-200 pb-7">
                  <p className="text-sm font-bold uppercase tracking-wide text-forest">
                    Call Us
                  </p>

                  <a
                    href="tel:+254701670090"
                    className="mt-2 inline-block text-lg font-semibold text-ink transition hover:text-forest"
                  >
                    +254-701-670090
                  </a>
                </div>

                {/* EMAIL */}
                <div>
                  <p className="text-sm font-bold uppercase tracking-wide text-forest">
                    Mail Us for Information
                  </p>

                  <a
                    href="mailto:info@eachrights.or.ke"
                    className="mt-2 inline-block text-lg font-semibold text-ink transition hover:text-forest"
                  >
                    info@eachrights.or.ke
                  </a>
                </div>

              </div>
            </motion.div>

            {/* CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-7 shadow-lg sm:p-10"
            >
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-ink">
                  How Can We Help?
                </h2>

                <p className="mt-3 leading-7 text-gray-600">
                  Complete the form below and our team will get back to you.
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">

                {/* NAME */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Phone
                    <span className="ml-1 font-normal text-gray-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                  />
                </div>

                {/* SUBJECT */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="subject"
                    name="subject"
                    required
                    defaultValue=""
                    className="w-full border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/10"
                  >
                    <option value="" disabled>
                      Select a subject
                    </option>

                    <option value="partnership">
                      Partnership Collaboration
                    </option>

                    <option value="invitation">
                      Invitation
                    </option>

                    <option value="donation">
                      Making a Donation
                    </option>

                    <option value="education">
                      Right to Education Programme
                    </option>

                    <option value="business-human-rights">
                      Business and Human Rights Programme
                    </option>

                    <option value="health">
                      Right to Health Programme
                    </option>

                    <option value="inquiry">
                      General Inquiry
                    </option>
                  </select>
                </div>

                {/* MESSAGE */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-ink"
                  >
                    Your Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Write your message here..."
                    className="w-full resize-none border border-gray-300 bg-white px-4 py-3.5 text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-forest focus:ring-2 focus:ring-forest/10"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full bg-forest px-6 py-4 font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-forest focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? "Sending..." : "Send Message"}
                </button>

              </form>

              {status === "success" && (
                <p className="mt-4 text-center font-medium text-green-700">
                  Thank you. Your message has been sent successfully.
                </p>
              )}

              {status === "error" && (
                <p className="mt-4 text-center font-medium text-red-600">
                  Sorry, we could not send your message. Please try again.
                </p>
              )}
            </motion.div>

          </div>
        </div>
      </section>

      {/* MAP / LOCATION */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-8">
            <h2 className="text-3xl font-bold text-ink sm:text-4xl">
              Our Nairobi Office
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-600">
              Apartment N5, Nine Planets Apartments, Kabarnet Road, Nairobi.
            </p>
          </div>

          <div className="overflow-hidden border border-gray-200 bg-gray-100">
            <iframe
              title="EACHRights Office Location"
              src="https://www.google.com/maps?q=Kabarnet%20Road%2C%20Nairobi%2C%20Kenya&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>

      {/* CTA — mirrors Home/About's final CTA */}
      <section className="bg-forest py-16 text-center text-white lg:py-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Handshake size={44} strokeWidth={1.3} className="mx-auto text-accent" />

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl">
            Let’s Work Together
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
            Whether you are interested in partnering with EACHRights,
            supporting our programmes or learning more about our work, we
            welcome the opportunity to connect.
          </p>

          <a
            href="mailto:info@eachrights.or.ke"
            className="mt-8 inline-block bg-accent px-7 py-3.5 font-bold text-forest transition hover:brightness-105"
          >
            Email EACHRights
          </a>
        </div>
      </section>

    </main>
  );
}

export default Contact;
