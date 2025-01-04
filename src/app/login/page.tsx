export default function LoginPage() {
  return (
    <div className="text-sjBlueBlack font-outfit min-h-screen flex flex-col">
      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="w-full max-w-md p-8 rounded-md shadow-lg">
          <h1 className="text-2xl font-serif text-center mb-6">Login</h1>
          <form className="space-y-6">
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

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-lg mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 border border-sjLightBlue rounded-md"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-sjBrightBlue text-sjCream py-2 rounded-md text-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          {/* Additional Options */}
          <div className="mt-4 text-center space-y-2">
            <a
              href="/forgot-password"
              className="text-sjBrightBlue hover:underline text-sm"
            >
              Forgot password?
            </a>
            <p className="text-sm">
              Don’t have an account?{" "}
              <a
                href="/signup"
                className="text-sjBrightBlue hover:underline font-medium"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
