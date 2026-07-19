"use client";

import { useState } from "react";
import Link from "next/link";

const plans = [
  { id: "pay-per-lead", name: "Pay Per Lead", price: "$35 / Qualified Lead" },
  { id: "starter", name: "Starter", price: "$199 / Month" },
  { id: "professional", name: "Professional", price: "$499 / Month" },
  { id: "enterprise", name: "Enterprise", price: "Custom Pricing" },
];

export default function ContractorPaymentPage() {
  const [selectedPlan, setSelectedPlan] = useState("starter");

  return (
    <main className="min-h-screen bg-slate-100">

      {/* Header */}

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16">

          <Link
            href="/contractors"
            className="text-orange-400 hover:text-orange-300"
          >
            ← Back to Contractor Plans
          </Link>

          <h1 className="mt-6 text-5xl font-extrabold">
            Contractor Registration
          </h1>

          <p className="mt-4 max-w-3xl text-xl text-slate-300">
            Complete your registration to begin receiving qualified homeowner
            leads from Florida Home Services Connect.
          </p>

        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3">

        {/* Registration Form */}

        <div className="rounded-3xl bg-white p-10 shadow-lg lg:col-span-2">

          <h2 className="mb-8 text-3xl font-bold text-slate-900">
            Contractor Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">
                Company Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="ABC Roofing"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Contact Name
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="John Smith"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Email Address
              </label>

              <input
                type="email"
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="john@company.com"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Phone Number
              </label>

              <input
                type="tel"
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="(555) 555-5555"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Website (Optional)
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="https://yourcompany.com"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                License Number (Optional)
              </label>

              <input
                type="text"
                className="w-full rounded-xl border border-slate-300 p-3"
                placeholder="CCC123456"
              />
            </div>

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-semibold">
              Primary Service
            </label>

            <select className="w-full rounded-xl border border-slate-300 p-3">

              <option>Roofing</option>
              <option>HVAC</option>
              <option>Electrical</option>
              <option>Plumbing</option>
              <option>Solar</option>
              <option>Remodeling</option>

            </select>

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-semibold">
              Counties / Service Areas
            </label>

            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-300 p-3"
              placeholder="Marion County, Lake County, Sumter County..."
            />

          </div>

          <div className="mt-8">

            <label className="mb-2 block font-semibold">
              Select Your Plan
            </label>

            <select
              value={selectedPlan}
              onChange={(e) => setSelectedPlan(e.target.value)}
              className="w-full rounded-xl border border-slate-300 p-3"
            >
              {plans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name} — {plan.price}
                </option>
              ))}
            </select>

          </div>

        </div>

        {/* Order Summary */}

        <div className="rounded-3xl bg-white p-8 shadow-lg">

          <h2 className="text-3xl font-bold">
            Order Summary
          </h2>

          <div className="mt-8 rounded-2xl bg-slate-100 p-6">

            <p className="text-lg font-semibold">
              Selected Plan
            </p>

            <p className="mt-3 text-2xl font-bold text-orange-600">
              {
                plans.find((plan) => plan.id === selectedPlan)?.name
              }
            </p>

            <p className="mt-2 text-slate-600">
              {
                plans.find((plan) => plan.id === selectedPlan)?.price
              }
            </p>

          </div>

          <div className="mt-8 space-y-3">

            <div className="flex justify-between">
              <span>Registration</span>
              <span>Included</span>
            </div>

            <div className="flex justify-between">
              <span>Contractor Dashboard</span>
              <span>Included</span>
            </div>

            <div className="flex justify-between">
              <span>Lead Notifications</span>
              <span>Included</span>
            </div>

            <div className="flex justify-between">
              <span>Email Support</span>
              <span>Included</span>
            </div>

          </div>

          <button
            className="mt-10 w-full rounded-xl bg-orange-500 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
          >
            Continue to Secure Checkout
          </button>

          <div className="mt-10 rounded-xl border border-green-300 bg-green-50 p-5">

            <h3 className="font-bold text-green-700">
              Secure Registration
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-slate-700">
              <li>✔ SSL Encrypted Connection</li>
              <li>✔ Secure Payment Processing</li>
              <li>✔ Stripe Integration Coming Next</li>
              <li>✔ Your Information Is Protected</li>
            </ul>

          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            Florida Home Services Connect will never sell your information.
          </p>

        </div>

      </section>

    </main>
  );
}