import React from "react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 bg-sjCream text-center px-6 scroll-mt-16"
    >
      <div className="container mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-outfit text-xl mb-8">
          Want to connect with like-minded women? Have your own group of ladies
          looking for a private shared experience? Travel with us!
        </h2>

        {/* Paragraphs */}
        <div className="font-outfit text-lg text-sjBlueBlack mb-8 space-y-6">
          <p>
            Sojourness strives to make travel accessible, enriching, and
            transformative for every woman. Our itineraries balance shared
            experience and solo vibes, so you’ll have plenty of independent time
            along with the comfort and connection of your fellow travelers.
            There’s no better way to embrace new landscapes and vibrant cultures
            than by lacing up your boots and stepping into adventure.
          </p>
          <p>
            Join our community in our quest to redefine the boundaries of female
            exploration and empowerment!
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
          <a
            href="#small-group-trips"
            className="font-outfit border border-sjBrightRed text-sjBrightRed px-6 py-3  bg-sjCream hover:bg-sjBrightRed/10 transition"
          >
            Small Group Trips
          </a>
          <a
            href="#private-groups"
            className="font-outfit border border-sjBrightRed text-sjBrightRed px-6 py-3 bg-sjCream hover:bg-sjBrightRed/10 transition"
          >
            Private Groups
          </a>
          <a
            href="#custom-groups"
            className="font-outfit border border-sjBrightRed text-sjBrightRed px-6 py-3 bg-sjCream hover:bg-sjBrightRed/10 transition"
          >
            Custom Groups
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
