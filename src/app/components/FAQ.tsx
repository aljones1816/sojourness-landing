import React from "react";

const FAQ: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-6">
      <h3 className="text-2xl font-bold mb-6 text-center">
        Frequently Asked Questions
      </h3>
      <div className="space-y-4">
        <details>
          <summary className="font-bold">What is your product?</summary>
          <p className="mt-2">
            We offer an amazing product that solves your problems.
          </p>
        </details>
        {/* Repeat for more FAQs */}
      </div>
    </div>
  </section>
);

export default FAQ;
