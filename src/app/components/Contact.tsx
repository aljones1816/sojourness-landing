import React from "react";

const Contact: React.FC = () => (
  <section id="contact" className="py-16 bg-gray-50">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="border p-2 w-full" />
        <input type="email" placeholder="Email" className="border p-2 w-full" />
        <textarea placeholder="Message" className="border p-2 w-full" />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-3 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  </section>
);

export default Contact;
