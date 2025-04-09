import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-40 px-4 md:px-20 ">
      <h1 className="text-3xl md:text-5xl text-center font-bold text-yellow-500 mb-4">
        Contact Us
      </h1>
      <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
        We're here to help and answer any questions you might have. Reach out to us and we’ll respond as soon as we can.
      </p>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto bg-white p-8 rounded-3xl shadow-md">
        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
          </div>
          <div>
            <label className="block mb-2 font-semibold text-gray-700">Message</label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">Head Office</h2>
            <p>RH Fleet India Pvt. Ltd.<br/>Office Unit No. - 115-116, First Floor, Vikash Surya, Janak Plaza, Block C6B, Janakpuri,  New Delhi - 110058
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">Call Us</h2>
            <p>+911147038297</p>
            <p>+919211291627</p>

          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">Email</h2>
            <p>reservations@rhfleetindia.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2 text-yellow-500">Follow Us</h2>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500">Facebook</a>
              <a href="#" className="hover:text-yellow-500">Instagram</a>
              <a href="#" className="hover:text-yellow-500">LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
