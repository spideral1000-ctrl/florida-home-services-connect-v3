import Link from "next/link";

export default function ContractorSuccessPage() {
  return (
    <main className="min-h-screen bg-slate-100">

      {/* Hero */}

      <section className="bg-green-600 text-white">
        <div className="mx-auto max-w-5xl px-6 py-20 text-center">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-6xl text-green-600">
            ✓
          </div>

          <h1 className="mt-8 text-5xl font-extrabold">
            Registration Successful!
          </h1>

          <p className="mt-6 text-xl text-green-100">
            Welcome to Florida Home Services Connect.
          </p>

        </div>
      </section>

      {/* Main Content */}

      <section className="mx-auto max-w-6xl px-6 py-16">

        <div className="rounded-3xl bg-white p-10 shadow-lg">

          <h2 className="text-3xl font-bold text-slate-900">
            Thank You for Joining Our Contractor Network
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Your registration has been received successfully. Once your payment
            has been verified and your account is activated, you'll begin
            receiving qualified homeowner lead opportunities based on your
            selected service area.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">

            <div className="rounded-2xl border border-slate-200 p-8">

              <h3 className="text-2xl font-bold text-orange-500">
                What Happens Next?
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">

                <li>✅ Contractor account created</li>

                <li>✅ Registration received</li>

                <li>✅ Payment confirmation</li>

                <li>✅ Account review and verification</li>

                <li>✅ Contractor dashboard activation</li>

                <li>✅ Qualified homeowner leads begin arriving</li>

              </ul>

            </div>

            <div className="rounded-2xl border border-slate-200 p-8">

              <h3 className="text-2xl font-bold text-orange-500">
                Included With Your Membership
              </h3>

              <ul className="mt-6 space-y-4 text-slate-700">

                <li>✔ Qualified homeowner leads</li>

                <li>✔ Contractor dashboard</li>

                <li>✔ Lead tracking</li>

                <li>✔ Email notifications</li>

                <li>✔ Secure payment history</li>

                <li>✔ Future business growth tools</li>

              </ul>

            </div>

          </div>

        </div>

      </section>

      {/* Call To Action */}

      <section className="pb-20">

        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-8 py-16 text-center text-white">

          <h2 className="text-4xl font-bold">
            Thank You for Choosing Florida Home Services Connect
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl text-slate-300">
            We're excited to help grow your business by connecting you with
            homeowners actively looking for trusted professionals across
            Florida.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              href="/contractors/dashboard"
              className="rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
            >
              Go To Contractor Dashboard
            </Link>

            <Link
              href="/"
              className="rounded-xl border border-white px-8 py-4 text-lg font-bold text-white transition hover:bg-slate-800"
            >
              Return Home
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}