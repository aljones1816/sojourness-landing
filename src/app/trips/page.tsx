import Image from "next/image";
import Link from "next/link";

const trips = [
  {
    slug: "germany",
    date: "NOVEMBER 15-22, 2025",
    title: "German Christmas Market Trek",
    description:
      "A magical tour of the best Christmas Markets the Rhine region offers.",
    image: "/christmas_market_trip_image.jpg",
  },
  {
    slug: "england",
    date: "JUNE 10-17, 2026",
    title: "Cotswold Wander",
    description:
      "Walk through the historic Cotswolds region of England and see the charming villages.",
    image: "/cotswolds_trip_image.jpg",
  },
  // Add more trips here
];

export default function TripsPage() {
  return (
    <div className="bg-sjCream text-sjBlueBlack font-outfit">
      <section className="py-16 px-6 lg:px-16">
        <h1 className="text-4xl font-serif mb-8 text-center">Our Trips</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trips.map((trip) => (
            <div
              key={trip.slug}
              className="border border-sjLightBlue rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="relative h-40">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-serif mb-2">{trip.title}</h2>
                <p className="text-sm mb-4">{trip.date}</p>
                <p className="text-base text-gray-700 mb-4">
                  {trip.description}
                </p>
                <Link
                  href={`/trips/${trip.slug}`}
                  className="text-sjBrightBlue hover:underline"
                >
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
