import React from "react";

const Testimonials: React.FC = () => (
  <section id="testimonials" className="py-16 bg-white">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-6">What Our Customers Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array(3)
          .fill("Customer Feedback")
          .map((testimonial, index) => (
            <div key={index} className="p-4 shadow rounded">
              <p>{testimonial}</p>
            </div>
          ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
