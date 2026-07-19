import Link from "next/link";

const plans = [
  {
    name: "Pay Per Lead",
    price: "$35",
    period: "Per Qualified Lead",
    description:
      "Perfect for contractors who want to purchase leads only when they need them.",
    features: [
      "No monthly commitment",
      "Qualified homeowner leads",
      "Buy only what you need",
      "Email lead delivery",
    ],
    button: "Purchase Leads",
    featured: false,
  },
  {
    name: "Starter",
    price: "$199",
    period: "Per Month",
    description:
      "Great for growing contractors looking for a steady flow of leads.",
    features: [
      "Up to 10 qualified leads",
      "Priority email support",
      "Contractor dashboard",
      "Lead history",
    ],
    button: "Choose Starter",
    featured: true,
  },
  {
    name: "Professional",
    price: "$499",
    period: "Per Month",
    description:
      "Designed for established companies ready to scale their business.",
    features: [
      "Up to 30 qualified leads",
      "Priority lead distribution",
      "Premium contractor listing",
      "Business reporting",
    ],
    button: "Choose Professional",
    featured: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact Us",
    description:
      "For large contractors serving multiple cities or the entire state.",
    features: [
      "Unlimited service areas",
      "Custom lead packages",
      "Dedicated account manager",
      "Custom integrations",
    ],
    button: "Contact Sales",
    featured: false,
  },
];

export default function ContractorsPage() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-700 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center">

          <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold">
            Florida Contractor Network
          </span>

          <h1 className="mt-8 text-5xl font-extrabold">
            Grow Your Business With Qualified Homeowner Leads
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-200">
            Join Florida Home Services Connect and receive verified homeowner
            leads looking for Roofing, HVAC, Electrical, Plumbing, Solar,
            and Remodeling services across Florida.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <Link
              href="/contractors/payment"
              className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
              Become a Contractor
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white hover:bg-white hover:text-slate-900"
            >
              Back to Home
            </Link>

          </div>

        </div>
      </section>

      {/* Why Join */}
      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-slate-900">
            Why Contractors Join Us
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We connect qualified homeowners directly with trusted contractors.
          </p>

        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl bg-white p-8 shadow">
            <h3 className="text-xl font-bold text-orange-500">
              Qualified Leads
            </h3>

            <p className="mt-4 text-slate-600">
              Every homeowner is actively requesting estimates.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <h3 className="text-xl font-bold text-orange-500">
              No Cold Calling
            </h3>

            <p className="mt-4 text-slate-600">
              Receive homeowners already interested in your services.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow">
            <h3 className="text-xl font-bold text-orange-500">
              Grow Faster
            </h3>

            <p className="mt-4 text-slate-600">
              Spend more time closing jobs and less time searching for customers.
            </p>
          </div>

        </div>

      </section>

      {/* Pricing */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-slate-900">
              Contractor Pricing
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Choose the plan that fits your business.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-4">

            {plans.map((plan) => (

              <div
                key={plan.name}
                className={`rounded-3xl border bg-white p-8 shadow-lg ${
                  plan.featured
                    ? "border-orange-500 ring-2 ring-orange-500"
                    : "border-slate-200"
                }`}
              >

                {plan.featured && (
                  <div className="mb-6 rounded-full bg-orange-500 py-2 text-center text-sm font-bold text-white">
                    MOST POPULAR
                  </div>
                )}

                <h3 className="text-2xl font-bold">
                  {plan.name}
                </h3>

                <div className="mt-6">

                  <span className="text-5xl font-extrabold">
                    {plan.price}
                  </span>

                  <p className="mt-2 text-slate-500">
                    {plan.period}
                  </p>

                </div>

                <p className="mt-6 text-slate-600">
                  {plan.description}
                </p>

                <ul className="mt-8 space-y-3">

                  {plan.features.map((feature) => (

                    <li key={feature} className="flex items-center gap-3">

                      <span className="text-green-600">✔</span>

                      {feature}

                    </li>

                  ))}

                </ul>

                <Link
                  href="/contractors/payment"
                  className="mt-10 block rounded-xl bg-orange-500 py-4 text-center font-bold text-white transition hover:bg-orange-600"
                >
                  {plan.button}
                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-orange-500 py-20 text-white">

        <div className="mx-auto max-w-5xl text-center">

          <h2 className="text-4xl font-bold">
            Ready To Grow Your Business?
          </h2>

          <p className="mt-6 text-xl">
            Join Florida Home Services Connect today and start receiving qualified homeowner leads.
          </p>

          <Link
            href="/contractors/payment"
            className="mt-10 inline-block rounded-xl bg-white px-10 py-5 text-lg font-bold text-orange-600 transition hover:bg-slate-100"
          >
            Get Started Today
          </Link>

        </div>

      </section>

    </main>
  );
}