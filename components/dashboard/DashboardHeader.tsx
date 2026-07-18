export default function DashboardHeader() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white shadow-lg">
      <div className="max-w-full px-8 py-5 flex items-center justify-between">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl font-bold tracking-wide">
            Florida Home Services Connect
          </h1>

          <p className="text-blue-200 mt-1">
            Contractor Dashboard
          </p>
        </div>

        {/* Center */}
        <div className="hidden lg:block text-center">
          <h2 className="text-xl font-semibold">
            Welcome Back
          </h2>

          <p className="text-blue-200">
            {today}
          </p>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <button className="relative hover:scale-110 transition">
            <span className="text-2xl">🔔</span>

            <span className="absolute -top-1 -right-1 bg-red-600 text-white rounded-full text-xs px-1">
              3
            </span>
          </button>

          <div className="flex items-center gap-3">

            <div className="w-12 h-12 rounded-full bg-white text-blue-800 flex items-center justify-center font-bold text-xl">
              A
            </div>

            <div className="hidden md:block">
              <p className="font-semibold">
                Allen
              </p>

              <p className="text-blue-200 text-sm">
                Administrator
              </p>
            </div>

          </div>

        </div>

      </div>
    </header>
  );
}