const menuItems = [
  { icon: "🏠", label: "Dashboard" },
  { icon: "📋", label: "Homeowner Leads" },
  { icon: "👷", label: "Contractors" },
  { icon: "📅", label: "Appointments" },
  { icon: "💬", label: "Messages" },
  { icon: "💳", label: "Billing" },
  { icon: "📈", label: "Reports" },
  { icon: "⚙️", label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-white border-r min-h-screen shadow-sm">

      <div className="p-6 border-b">
        <h2 className="text-xl font-bold text-gray-800">
          Navigation
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Contractor Control Center
        </p>
      </div>

      <nav className="p-4">

        {menuItems.map((item) => (
          <button
            key={item.label}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 mb-2"
          >
            <span className="text-2xl">
              {item.icon}
            </span>

            <span className="font-medium">
              {item.label}
            </span>
          </button>
        ))}

      </nav>

      <div className="absolute bottom-6 w-72 px-6">

        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition">
          🚪 Logout
        </button>

      </div>

    </aside>
  );
}