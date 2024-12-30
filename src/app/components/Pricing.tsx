import React from "react";

const Pricing: React.FC = () => (
  <section id="pricing" className="py-16 bg-gray-100">
    <div className="container mx-auto px-6 text-center">
      <h3 className="text-2xl font-bold mb-6">Pricing</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["Basic", "Pro", "Enterprise"].map((plan) => (
          <div key={plan} className="p-4 shadow rounded">
            <h4 className="font-bold">{plan}</h4>
            <p>$XX/month</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Pricing;
