import Image from "next/image";

const trips = [
  {
    slug: "germany",
    date: "NOVEMBER 15-22, 2025",
    title: "German Christmas Market Trek",
    description:
      "A magical tour of the best Christmas Markets the Rhine region offers.",
    image: "/christmas_market_trip_image.jpg",
    photos: ["/germany1.jpg", "/germany2.jpg", "/germany3.jpg"],
  },
  {
    slug: "england",
    date: "JUNE 10-17, 2026",
    title: "",
    description: "",
    image: "/cotswalds_trip_image.jpg",
    photos: ["/germany1.jpg", "/germany2.jpg", "/germany3.jpg"],
  },
  // Add other trips here
];

export async function generateStaticParams() {
  return trips.map((trip) => ({
    slug: trip.slug,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const trip = trips.find((t) => t.slug === slug);

  if (!trip) {
    return <div>Trip not found</div>;
  }

  return (
    <div className=" text-sjBlueBlack font-outfit">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <Image
          src={trip.image}
          alt={trip.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl font-serif text-sjCream">{trip.title}</h1>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 px-4 lg:px-16">
        <h2 className="text-2xl font-serif mb-4">{trip.date}</h2>
        <p className="text-lg">{trip.description}</p>
      </section>

      {/* Photos Section */}
      <section className="py-8 px-4 lg:px-16">
        <h2 className="text-2xl font-serif mb-4">Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {trip.photos.map((photo, index) => (
            <div key={index} className="relative h-[200px]">
              <Image
                src={photo}
                alt={`Photo ${index + 1}`}
                fill
                className="object-cover rounded-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Book Now Form */}
      <section className="py-8 px-4 lg:px-16 bg-sjMustard text-sjCream">
        <h2 className="text-2xl font-serif mb-4">Book Now</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-lg">
              Name
            </label>
            <input
              id="name"
              type="text"
              className="w-full p-2 rounded-md"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="w-full p-2 rounded-md"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full p-2 rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-sjBrightBlue text-sjCream px-4 py-2 rounded-md hover:opacity-90"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
