"use client";

import { useState, ChangeEvent, FormEvent } from "react";

const initialFormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  address: "",
  city: "",
  zip: "",
  timeframe: "",
  description: "",
};

export default function EstimateForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitMessage, setSubmitMessage] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (submitMessage) {
      setSubmitMessage("");
    }
  };

  const handleSubmit = async (e: FormEvent) => {
  e.preventDefault();

  if (
    !formData.firstName ||
    !formData.lastName ||
    !formData.email ||
    !formData.phone ||
    !formData.service
  ) {
    setSubmitMessage("Please complete all required fields.");
    return;
  }

  try {
    setIsSubmitting(true);
    setSubmitMessage("");

    const response = await fetch("/api/estimate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok) {
      setSubmitMessage(
        result.message || "Unable to submit your estimate request."
      );
      return;
    }

    setSubmitMessage(result.message);

    setFormData(initialFormData);
  } catch (error) {
    console.error(error);

    setSubmitMessage(
      "An unexpected error occurred. Please try again."
    );
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <section
      id="estimate"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-5xl px-6">

        <div className="mb-14 text-center">

          <p className="font-bold uppercase tracking-widest text-orange-600">
            Free Estimate Request
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Tell Us About Your Project
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Complete the form below and we'll match you with trusted Florida
            contractors.
          </p>

        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-3xl bg-slate-50 p-10 shadow-lg"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div>
              <label className="mb-2 block font-semibold">
                First Name *
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Last Name *
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Email Address *
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold">
                Service Needed *
              </label>

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              >
                <option value="">Select a Service</option>
                <option>Roofing</option>
                <option>HVAC</option>
                <option>Electrical</option>
                <option>Plumbing</option>
                <option>Solar</option>
                <option>Remodeling</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold">
                Street Address
              </label>

              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                City
              </label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div>
              <label className="mb-2 block font-semibold">
                ZIP Code
              </label>

              <input
                type="text"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold">
                Preferred Timeline
              </label>

              <select
                name="timeframe"
                value={formData.timeframe}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              >
                <option value="">Select Timeline</option>
                <option>ASAP</option>
                <option>Within 30 Days</option>
                <option>1–3 Months</option>
                <option>Just Planning</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="mb-2 block font-semibold">
                Project Description
              </label>

              <textarea
                rows={5}
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full rounded-xl border p-4"
              />
            </div>

          </div>

          {submitMessage && (
            <div className="mt-8 rounded-xl bg-green-100 p-4 text-green-800">
              {submitMessage}
            </div>
          )}

          <button
            type="submit"
            className="mt-10 w-full rounded-xl bg-orange-500 py-4 text-xl font-bold text-white transition hover:bg-orange-600"
          >
            Get My FREE Estimates
          </button>

        </form>

      </div>
    </section>
  );
}