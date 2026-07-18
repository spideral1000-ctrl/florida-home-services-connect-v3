const activities = [
  {
    id: 1,
    icon: "🏠",
    title: "New Roofing Lead",
    description: "John Smith requested a roofing estimate in Ocala.",
    time: "2 minutes ago",
  },
  {
    id: 2,
    icon: "📞",
    title: "Lead Contacted",
    description: "Mary Johnson was contacted by ABC Roofing.",
    time: "18 minutes ago",
  },
  {
    id: 3,
    icon: "📅",
    title: "Appointment Scheduled",
    description: "Electrical estimate scheduled for tomorrow.",
    time: "1 hour ago",
  },
  {
    id: 4,
    icon: "💰",
    title: "Lead Purchased",
    description: "Sunshine HVAC purchased a premium lead.",
    time: "2 hours ago",
  },
  {
    id: 5,
    icon: "✅",
    title: "Job Completed",
    description: "Roof replacement marked as completed.",
    time: "Yesterday",
  },
];

export default function ActivityFeed() {
  return (
    <section className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center justify-between mb-6">

        <h2 className="text-2xl font-bold">
          Recent Activity
        </h2>

        <button className="text-blue-600 hover:text-blue-800 font-semibold">
          View All
        </button>

      </div>

      <div className="space-y-5">

        {activities.map((activity) => (

          <div
            key={activity.id}
            className="flex items-start gap-4 border-b pb-4 last:border-b-0"
          >

            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-2xl">

              {activity.icon}

            </div>

            <div className="flex-1">

              <h3 className="font-semibold text-gray-800">
                {activity.title}
              </h3>

              <p className="text-gray-600 text-sm mt-1">
                {activity.description}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                {activity.time}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}