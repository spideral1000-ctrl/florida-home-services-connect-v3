export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">

        {/* Left Side */}
        <div>

          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-orange-600">
            Florida's Trusted Contractor Network
          </p>

          <h1 className="mb-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Find Trusted Home Service Professionals Across Florida
          </h1>

          <p className="mb-8 max-w-xl text-xl leading-8 text-slate-600">
            Quickly connect with trusted local contractors for your next home
            improvement project.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">

            <a
              href="#estimate"
              className="rounded-xl bg-orange-500 px-8 py-4 font-bold text-white transition hover:bg-orange-600"
            >
              Get FREE Estimates
            </a>

            <a
              href="#contractors"
              className="rounded-xl border-2 border-orange-500 px-8 py-4 font-bold text-orange-600 transition hover:bg-orange-50"
            >
              Join Contractor Network
            </a>

          </div>

          <div className="flex flex-wrap gap-3">

            {[
              "Roofing",
              "HVAC",
              "Electrical",
              "Plumbing",
              "Solar",
              "Remodeling",
            ].map((service) => (
              <span
                key={service}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold shadow"
              >
                {service}
              </span>
            ))}

          </div>

        </div>

        {/* Right Side */}

        <div className="flex items-center justify-center">

          <div className="flex h-[450px] w-full max-w-md items-center justify-center rounded-3xl border-2 border-dashed border-orange-300 bg-orange-100">

            <div className="text-center">

              <div className="mb-4 text-6xl">
                🏡
              </div>

              <h3 className="text-2xl font-bold text-slate-800">
                Florida Homeowners
              </h3>

              <p className="mt-4 text-slate-600">
                Hero image will be added here.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}