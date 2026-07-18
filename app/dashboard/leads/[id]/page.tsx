"use client";

import Link from "next/link";
import { use, useEffect, useState } from "react";
import { supabase } from "../../../lib/supabase";

type Lead = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  service: string;
  timeframe: string;
  project_description: string;
  status: string;
  created_at: string;
};

export default function LeadDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLead();
  }, [id]);

  async function loadLead() {
    const { data, error } = await supabase
      .from("homeowner_leads")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      console.error(error);
    } else {
      setLead(data);
    }

    setLoading(false);
  }

  if (loading) {
    return <p className="p-8">Loading lead...</p>;
  }

  if (!lead) {
    return <p className="p-8">Lead not found.</p>;
  }

  return (
    <main className="max-w-4xl mx-auto p-8">
      <Link
        href="/dashboard"
        className="text-blue-600 hover:underline"
      >
        ← Back to Dashboard
      </Link>

      <h1 className="text-3xl font-bold mt-6 mb-8">
        Homeowner Lead Details
      </h1>

      <div className="space-y-4 rounded-lg border bg-white p-6 shadow">

        <p><strong>Name:</strong> {lead.first_name} {lead.last_name}</p>

        <p><strong>Email:</strong> {lead.email}</p>

        <p><strong>Phone:</strong> {lead.phone}</p>

        <p><strong>Address:</strong> {lead.address}</p>

        <p><strong>City:</strong> {lead.city}</p>

        <p><strong>ZIP:</strong> {lead.zip}</p>

        <p><strong>Service:</strong> {lead.service}</p>

        <p><strong>Timeframe:</strong> {lead.timeframe}</p>

        <p><strong>Status:</strong> {lead.status}</p>

        <p>
          <strong>Submitted:</strong>{" "}
          {new Date(lead.created_at).toLocaleString()}
        </p>

        <div>
          <strong>Project Description</strong>

          <div className="mt-2 rounded border bg-gray-50 p-4">
            {lead.project_description}
          </div>
        </div>

      </div>
    </main>
  );
}