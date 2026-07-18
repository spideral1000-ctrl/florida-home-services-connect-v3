import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-sky-50 via-white to-orange-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:flex lg:items-center lg:gap-16">

        {/* Left Side */}
        <div className="lg:w-1/2">

          <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-700">
            Florida&apos;s Trusted Contractor Network
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Find Trusted Home Service Professionals Across Florida
          </h1>

          <p className="mt-6 text-xl leading-8 text-slate-600">
            Connect with qualified contractors for Roofing, HVAC, Electrical,
            Plumbing, Solar, and Remodeling. Compare multiple estimates from
            trusted local professionals—all at no cost.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#estimate"
              className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
            >
              Get FREE Estimates
            </Link>

            <Link
              href="#contractors"
              className="rounded-xl border-2 border-slate-300 px-8 py-4 text-lg font-semibold text-slate-800 transition hover:border-orange-500 hover:text-orange-600"
            >
              Join Contractor Network
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
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
                className="rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow"
              >
                {service}
              </span>
            ))}
          </div>

        </div>

        {/* Right Side Image */}
        <div className="mt-14 lg:mt-0 lg:w-1/2">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/images/hero-homepage.png"
              alt="Beautiful Florida waterfront home"
              width={900}
              height={650}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}