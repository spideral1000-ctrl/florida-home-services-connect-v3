const actions = [
  {
    title: "Assign Lead",
    description: "Assign a homeowner lead to a contractor.",
    icon: "👷",
    color: "bg-blue-600 hover:bg-blue-700",
  },
  {
    title: "Refresh Leads",
    description: "Reload the newest homeowner requests.",
    icon: "🔄",
    color: "bg-green-600 hover:bg-green-700",
  },
  {
    title: "Export CSV",
    description: "Download all leads as a spreadsheet.",
    icon: "📄",
    color: "bg-purple-600 hover:bg-purple-700",
  },
  {
    title: "Send Email",
    description: "Email homeowners or contractors.",
    icon: "📧",
    color: "bg-orange-500 hover:bg-orange-600",
  },
  {
    title: "Reports",
    description: "View business performance reports.",
    icon: "📊",
    color: "bg-cyan-600 hover:bg-cyan-700",
  },
  {
    title: "Settings",
    description: "Manage your company preferences.",
    icon: "⚙️",
    color: "bg-gray-700 hover:bg-gray-800",
  },
];

export default function QuickActions() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold mb-6">
        Quick Actions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

        {actions.map((action) => (

          <button
            key={action.title}
            className={`${action.color} text-white rounded-xl p-5 text-left transition-all duration-200 hover:scale-105`}
          >

            <div className="text-4xl mb-3">
              {action.icon}
            </div>

            <h3 className="text-xl font-bold">
              {action.title}
            </h3>

            <p className="text-sm opacity-90 mt-2">
              {action.description}
            </p>

          </button>

        ))}

      </div>

    </section>
  );
}