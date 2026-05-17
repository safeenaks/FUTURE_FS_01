import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_o3796ef",
        "template_t9mh5bv",
        form.current,
        "mnhplqiAFRPy9IILW"
      )
      .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
      })
      .catch(() => {
        alert("Failed to send message. Try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact" className="py-32 px-6 text-white">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="mb-20">
          <p className="uppercase tracking-[0.3em] text-blue-400 mb-4">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Let’s Work Together
          </h2>
        </div>

        {/* Contact Box */}
        <div className="border border-white/10 bg-white/5 rounded-3xl p-10 backdrop-blur-xl">

          <div className="grid lg:grid-cols-2 gap-12">

            {/* LEFT SIDE */}
            <div>
              <p className="text-gray-400 text-lg leading-relaxed">
                I’m open to internships, collaborations,
                freelance opportunities, and exciting
                full stack development projects.
              </p>

              <div className="mt-10 space-y-5">

                <div className="border border-white/10 rounded-2xl p-5">
                  shanavaskh123456@gmail.com
                </div>

                <div className="border border-white/10 rounded-2xl p-5">
                  github.com/safeenaks
                </div>

                <div className="border border-white/10 rounded-2xl p-5">
                  linkedin.com/in/safeena-k-s-782547328
                </div>

              </div>
            </div>

            {/* RIGHT SIDE - FORM */}
            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-400 transition"
              />

              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none focus:border-blue-400 transition"
              />

              <textarea
                name="message"
                rows="6"
                placeholder="Your Message"
                className="w-full bg-white/5 border border-white/10 rounded-2xl p-5 outline-none resize-none focus:border-blue-400 transition"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-500 hover:bg-blue-600 transition rounded-2xl py-5 font-medium disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </form>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;