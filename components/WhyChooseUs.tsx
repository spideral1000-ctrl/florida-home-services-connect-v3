export default function WhyChooseUs() {
  const features = [
    {
      icon: "⭐",
      title: "Trusted Local Professionals",
      description:
        "We connect you with experienced contractors serving homeowners across Florida.",
    },
    {
      icon: "⚡",
      title: "Fast Responses",
      description:
        "Receive estimates quickly from contractors interested in your project.",
    },
    {
      icon: "💲",
      title: "100% FREE Estimates",
      description:
        "Requesting estimates through Florida Home Services Connect is always free.",
    },
    {
      icon: "🤝",
      title: "Simple & Secure",
      description:
        "Submit one request and let qualified professionals compete for your business.",
    },
  ];

  const steps = [
    "Tell Us About Your Project",
    "We Match You With Local Contractors",
    "Receive Multiple Estimates",
    "Choose the Best Contractor",
  ];

  return (
    <section className="bg-slate-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-bold uppercase tracking-widest text-orange-600">
            Why Florida Homeowners Trust Us
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Connecting Homeowners with Trusted Florida Contractors
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Florida Home Services Connect makes finding reliable professionals
            simple, fast, and completely free.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-8 shadow-md transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl">
                {feature.icon}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

        <div className="mt-20 rounded-3xl bg-white p-10 shadow-lg">

          <h3 className="text-center text-3xl font-bold text-slate-900">
            How It Works
          </h3>

          <div className="mt-12 grid gap-8 md:grid-cols-4">

            {steps.map((step, index) => (
              <div key={step} className="text-center">

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
                  {index + 1}
                </div>

                <p className="mt-6 font-semibold text-slate-700">
                  {step}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}