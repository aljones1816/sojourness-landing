import React from "react";

import {
  UserGroupIcon,
  DeviceMobileIcon,
  GlobeIcon,
  HeartIcon,
} from "@heroicons/react/outline";

const features = [
  { icon: UserGroupIcon, title: "SMALL GROUP & PRIVATE GROUP JOURNEYS" },
  { icon: DeviceMobileIcon, title: "24/7 FREE APP ACCESS" },
  { icon: GlobeIcon, title: "FORGING A GLOBAL SISTERHOOD" },
  { icon: HeartIcon, title: "A FOCUS ON RESPONSIBLE TRAVEL" },
];

const Features: React.FC = () => {
  return (
    <section className="relative lg:h-[30vh] h-auto py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        {/* Overlay */}
        <div className="absolute inset-0 bg-sjMustard bg-opacity-10"></div>
      </div>
      {/* Content */}
      <div className="h-full relative z-10 container mx-auto px-4 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 h-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center h-full p-6"
            >
              {/* Render Icon Component */}
              <feature.icon className="w-12 h-12 text-sjLightBlue mb-4" />
              <h3 className="text-lg font-andika text-sm">{feature.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
