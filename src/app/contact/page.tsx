import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function ContactPage() {
  return (
    <div className="bg-sjCream text-sjBlueBlack font-outfit min-h-screen flex flex-col">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-lg bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-2xl font-serif text-center mb-6">Contact Us</h1>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg mb-2">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full p-2 border border-sjLightBlue rounded-md"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg mb-2">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 border border-sjLightBlue rounded-md"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Enter your message"
                className="w-full p-2 border border-sjLightBlue rounded-md"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sjBrightBlue text-sjCream py-2 rounded-md text-lg hover:opacity-90 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
