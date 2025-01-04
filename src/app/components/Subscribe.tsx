export default function SubscribeForm() {
  return (
    <div className=" text-sjBlueBlack py-20 w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-serif mb-6 text-center">
          Subscribe to Our Email List
        </h2>
        <form className="flex flex-col md:flex-row md:items-end md:space-x-4 space-y-4 md:space-y-0">
          {/* First Name */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="first-name" className="block text-sm mb-1">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="First Name"
              className="w-full p-2 border border-sjLightBlue rounded-md"
              required
            />
          </div>

          {/* Last Name */}
          <div className="flex-1 flex flex-col">
            <label htmlFor="last-name" className="block text-sm mb-1">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="Last Name"
              className="w-full p-2 border border-sjLightBlue rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div className="flex-2 flex flex-col">
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border border-sjLightBlue rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="w-full bg-sjBrightBlue text-sjCream py-2 px-4 rounded-md text-lg font-outfit hover:opacity-90 transition"
            >
              Sign Me Up!
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
