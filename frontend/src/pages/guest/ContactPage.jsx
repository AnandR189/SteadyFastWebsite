import { useState } from "react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen px-6 py-16" style={{ background: "#E9EEF5" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold text-slate-800 mb-8">
          Get in Touch
        </h2>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Form */}
          <div className="flex-1 flex flex-col gap-4">
            {submitted && (
              <div className="bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg text-sm">
                ✅ Message sent! We will get back to you soon.
              </div>
            )}

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email Address"
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
            />

            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Message"
              rows={5}
              required
              className="w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all resize-none"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </div>

          {/* Contact Info Box */}
          <div className="w-full md:w-72">
            <div
              className="bg-white rounded-xl p-6 h-full"
              style={{ border: "2px solid #ff7a1a" }}
            >
              <h5 className="font-semibold text-slate-800 text-lg mb-5">
                Contact Information
              </h5>
              <div className="flex flex-col gap-4 text-gray-600 text-sm">
                <p>📍 123 Project Street, College Campus</p>
                <p>📞 +91 12345 67890</p>
                <p>✉️ support@steadyfast.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
