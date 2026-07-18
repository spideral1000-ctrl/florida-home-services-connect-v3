const stats = [
  {
    title: "New Leads",
    value: "12",
    change: "+3 Today",
    color: "bg-blue-600",
    icon: "📋",
  },
  {
    title: "Active Leads",
    value: "28",
    change: "18 Contacted",
    color: "bg-green-600",
    icon: "📞",
  },
  {
    title: "Contractors",
    value: "14",
    change: "4 Online",
    color: "bg-purple-600",
    icon: "👷",
  },
  {
    title: "Revenue",
    value: "$12,480",
    change: "This Month",
    color: "bg-orange-500",
    icon: "💰",
  },
  {
    title: "Appointments",
    value: "9",
    change: "Today",
    color: "bg-cyan-600",
    icon: "📅",
  },
  {
    title: "Conversion",
    value: "64%",
    change: "+8%",
    color: "bg-pink-600",
    icon: "📈",
  },
];

export default function SummaryCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      {stats.map((card) => (
        <div
          key={card.title}
          className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
        >

          <div className={`${card.color} text-white px-6 py-4 flex justify-between items-center`}>

            <div>

              <p className="text-sm opacity-90">
                {card.title}
              </p>

              <h2 className="text-4xl font-bold mt-2">
                {card.value}
              </h2>

            </div>

            <span className="text-5xl">
              {card.icon}
            </span>

          </div>

          <div className="px-6 py-4">

            <p className="text-gray-600">
              {card.change}
            </p>

          </div>

        </div>
      ))}

    </section>
  );
}