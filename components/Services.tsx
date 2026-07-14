export default function Services() {
  const services = [
    {
      title: "Roofing",
      icon: "🏠",
      description:
        "Roof repairs, replacements, inspections, and storm damage restoration.",
    },
    {
      title: "HVAC",
      icon: "❄️",
      description:
        "Heating and cooling installation, repairs, and maintenance.",
    },
    {
      title: "Electrical",
      icon: "⚡",
      description:
        "Licensed electrical repairs, panel upgrades, and installations.",
    },
    {
      title: "Plumbing",
      icon: "🚰",
      description:
        "Professional plumbing repairs, leak detection, and installations.",
    },
    {
      title: "Solar",
      icon: "☀️",
      description:
        "Residential and commercial solar energy solutions.",
    },
    {
      title: "Remodeling",
      icon: "🔨",
      description:
        "Kitchen, bathroom, flooring, and complete home renovations.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="font-bold uppercase tracking-widest text-orange-600">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Find the Right Professional for Your Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Florida Home Services Connect makes it easy to connect with trusted
            local contractors for nearly every home improvement project.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-5xl">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {service.title}
              </h3>

              <p className="mt-4 text-slate-600">
                {service.description}
              </p>

              <button className="mt-8 rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                Learn More
              </button>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}