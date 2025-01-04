import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="bg-sjCream text-sjBlueBlack font-outfit min-h-screen flex flex-col mt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src="/about-hero.jpg" // Replace with your hero image
          alt="About Us Hero Image"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-sjCream">About Us</h1>
        </div>
      </section>

      {/* Company Description Section */}
      <section className="py-16 px-6 lg:px-16">
        <h2 className="text-3xl font-serif mb-8 text-center">Who We Are</h2>
        <p className="text-lg leading-relaxed">
          {/* Add your company description here */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          vehicula velit quis urna sodales, nec interdum lectus sollicitudin.
          Duis at sapien quis magna ullamcorper hendrerit.
        </p>
      </section>
    </div>
  );
}
