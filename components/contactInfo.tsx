import React from "react";

export default function ContactUs() {
  return (
    <section className="p-8 bg-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Contact Information */}
          <div className="md:w-1/2 space-y-4">
            <h3 className="text-xl font-semibold">Phone</h3>
            <p>+234 234 234 234</p>
            <p>Available 24/7 for emergencies and inquiries.</p>

            <h3 className="text-xl font-semibold">Email</h3>
            <p>info@yourcompany.com</p>
            <p>We respond to all emails within 24 hours.</p>

            <h3 className="text-xl font-semibold">Office Location</h3>
            <p>Klen Plaza, Gwagwalada, Abuja</p>
            <p>
              Visit us during our office hours: Monday - Friday, 9 AM - 5 PM
            </p>

            <h3 className="text-xl font-semibold">Follow Us on Social Media</h3>
            <ul className="flex gap-4">
              <li>
                <a
                  href="https://twitter.com/yourcompany"
                  className="text-blue-500"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/yourcompany"
                  className="text-blue-700"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/yourcompany"
                  className="text-pink-600"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-4 py-2 border rounded-md"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-semibold mb-2"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-md"
                  id="message"
                  name="message"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                type="submit"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Request Free Estimate */}
        <div className="mt-8 text-center">
          <h2 className="text-2xl font-bold">Request a Free Estimate</h2>
          <p className="mt-2">
            Use our simple online form to request a free estimate for any of our
            services. Provide us with some details about your project, and our
            team will get back to you with an accurate quote.
          </p>
          <a
            href="/request-estimate"
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Request Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}
