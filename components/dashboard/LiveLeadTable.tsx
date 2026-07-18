"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../app/lib/supabase";

type Lead = {
  id: number;
  first_name: string;
  last_name: string;
  service: string;
  city: string;
  phone: string;
  status: string;
  created_at: string;
};

export default function LiveLeadTable() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  async function loadLeads() {
    setLoading(true);

    const { data, error } = await supabase
      .from("homeowner_leads")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase Error:", error);
      setLoading(false);
      return;
    }

    setLeads(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    loadLeads();
  }, []);

  if (loading) {
    return (
      <section className="bg-white rounded-2xl shadow-lg p-6">
        <p className="text-gray-600">Loading homeowner leads...</p>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold">
            Live Homeowner Leads
          </h2>

          <p className="text-gray-500">
            Connected to Supabase
          </p>
        </div>

        <button
          onClick={loadLeads}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
        >
          Refresh
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">

          <thead className="bg-gray-100">
            <tr>
              <th className="text-left p-4">Homeowner</th>
              <th className="text-left p-4">Service</th>
              <th className="text-left p-4">City</th>
              <th className="text-left p-4">Phone</th>
              <th className="text-left p-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="p-6 text-center text-gray-500"
                >
                  No homeowner leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b hover:bg-blue-50"
                >
                  <td className="p-4 font-semibold">
                    {lead.first_name} {lead.last_name}
                  </td>

                  <td className="p-4">
                    {lead.service}
                  </td>

                  <td className="p-4">
                    {lead.city}
                  </td>

                  <td className="p-4">
                    {lead.phone}
                  </td>

                  <td className="p-4">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>

        </table>
      </div>
    </section>
  );
}