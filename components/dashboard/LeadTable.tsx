const leads = [
  {
    id: 1,
    name: "John Smith",
    service: "Roofing",
    city: "Ocala",
    phone: "(352) 555-1234",
    date: "Today",
    status: "New",
  },
  {
    id: 2,
    name: "Mary Johnson",
    service: "HVAC",
    city: "Gainesville",
    phone: "(352) 555-8888",
    date: "Yesterday",
    status: "Contacted",
  },
  {
    id: 3,
    name: "David Brown",
    service: "Electrical",
    city: "The Villages",
    phone: "(352) 555-4433",
    date: "2 Days Ago",
    status: "Scheduled",
  },
];

export default function LeadTable() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center justify-between mb-6">

        <div>
          <h2 className="text-2xl font-bold">
            Recent Homeowner Leads
          </h2>

          <p className="text-gray-500">
            Latest homeowner estimate requests
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg">
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

              <th className="text-left p-4">Submitted</th>

              <th className="text-left p-4">Status</th>

              <th className="text-left p-4">Action</th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (

              <tr
                key={lead.id}
                className="border-b hover:bg-blue-50"
              >

                <td className="p-4 font-semibold">
                  {lead.name}
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
                  {lead.date}
                </td>

                <td className="p-4">

                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">

                    {lead.status}

                  </span>

                </td>

                <td className="p-4">

                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">

                    View

                  </button>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </section>
  );
}