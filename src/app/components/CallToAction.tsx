import React from "react";
import Image from "next/image";

const trips = [
  {
    date: "NOVEMBER 15-22, 2025",
    title: "German Christmas Market Trek",
    description:
      "A magical tour of the best Christmas Markets the Rhine region offers.",
    image: "/christmas_market_trip_image.jpg",
    link: "/trips/germany",
  },
  {
    date: "JUNE 10-17, 2026",
    title: "Cotswald Wander",
    description:
      "Walk through the historic Cotswalds region of England and see the sheeps.",
    image: "/cotswalds_trip_image.jpg",
    link: "/trips/england",
  },
];

const CallToAction: React.FC = () => {
  return (
    <section className="py-1 bg-sjCream">
      <div className="w-full ">
        {trips.map((trip, index) => {
          // Determine colors based on index (alternating colors)
          const isEven = index % 2 === 0;
          const textBgColor = isEven ? "bg-sjBrightBlue" : "bg-sjMustard";
          const textTextColor = "text-sjCream";
          const buttonBgColor = isEven ? "bg-sjMustard" : "bg-sjBrightBlue";

          return (
            <div
              key={index}
              className={`flex flex-col ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              } items-stretch mb-1 last:mb-0 shadow-lg h-[40vh]`}
            >
              {/* Text Section */}
              <div
                className={`w-full md:w-2/3 ${textBgColor} ${textTextColor} p-6 flex flex-col justify-center items-center`}
              >
                <div>
                  <h2 className="font-outfit text-xl flex justify-center">
                    {trip.date}
                  </h2>
                  <h3 className="flex justify-center font-serif text-4xl mt-2">
                    {trip.title}
                  </h3>
                  <p className="flex font-outfit justify-center mt-4">
                    {trip.description}
                  </p>
                </div>
                <a
                  href={trip.link}
                  className={`${buttonBgColor} ${textTextColor} font-outfit text-xl px-4 py-1 mt-8 self-center shadow hover:opacity-90 transition`}
                >
                  LET&apos;S GO
                </a>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/3 relative">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CallToAction;
