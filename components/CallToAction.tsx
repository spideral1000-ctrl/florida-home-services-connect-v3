import Link from "next/link";

export default function CallToAction() {
  return (
    <section className="bg-orange-500 py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">

        <p className="text-sm font-bold uppercase tracking-widest text-orange-100">
          Ready to Get Started?
        </p>

        <h2 className="mt-4 text-4xl font-extrabold text-white lg:text-5xl">
          Connect With Trusted Florida Contractors Today
        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-xl leading-8 text-orange-100">
          Whether you need a new roof, HVAC repair, electrical work,
          plumbing, solar installation, or a complete remodel,
          Florida Home Services Connect makes it easy to receive
          FREE estimates from qualified local professionals.
        </p>

        <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">

          <Link
            href="/#estimate"
            className="rounded-xl bg-white px-8 py-4 text-lg font-bold text-orange-600 transition hover:bg-orange-100"
          >
            Get FREE Estimates
          </Link>

          <Link
            href="#contractors"
            className="rounded-xl border-2 border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-orange-600"
          >
            Join Contractor Network
          </Link>

        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8 text-white">

          <div className="flex items-center gap-2">
            <span className="text-2xl">✔</span>
            <span>Free Estimates</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">✔</span>
            <span>Fast Responses</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-2xl">✔</span>
            <span>Serving Florida</span>
          </div>

        </div>

      </div>
    </section>
  );
}