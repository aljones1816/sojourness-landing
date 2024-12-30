import React from "react";
import Image from "next/image";
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
    <section className="relative bg-sjCream lg:h-[30vh] h-auto py-0">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/background-features.jpg"
          alt="Features Background"
          fill
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-white bg-opacity-60"></div>
      </div>

      {/* Content */}
      <div className="h-full relative z-10 container mx-auto px-4 text-center">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 h-full">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center h-full bg-white bg-opacity-60 p-6"
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
