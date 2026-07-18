export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      location: "Ocala, FL",
      text: "Florida Home Services Connect made finding a roofing contractor incredibly easy. I received multiple estimates within a day and found the perfect company for my roof replacement.",
    },
    {
      name: "Michael R.",
      location: "Tampa, FL",
      text: "The process was simple and completely free. I submitted one request and quickly connected with a licensed HVAC contractor who solved my issue the same week.",
    },
    {
      name: "Jennifer L.",
      location: "Orlando, FL",
      text: "I needed electrical work done after purchasing my home. Within hours I had qualified professionals contacting me with competitive estimates.",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-bold uppercase tracking-widest text-orange-600">
            Testimonials
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Homeowners Across Florida Trust Our Network
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Our goal is to make finding trusted home service professionals fast,
            simple, and stress-free.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 text-2xl text-orange-500">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="leading-7 text-slate-600">
                "{testimonial.text}"
              </p>

              <div className="mt-8 border-t pt-6">
                <h3 className="font-bold text-slate-900">
                  {testimonial.name}
                </h3>

                <p className="text-sm text-slate-500">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-3xl bg-orange-50 p-10 text-center">
          <h3 className="text-3xl font-bold text-slate-900">
            Ready to Start Your Next Home Project?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Submit one request and receive free estimates from trusted local
            contractors serving your area.
          </p>
        </div>
      </div>
    </section>
  );
}