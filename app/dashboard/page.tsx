import DashboardHeader from "@/components/dashboard/DashboardHeader";
import Sidebar from "@/components/dashboard/Sidebar";
import SummaryCards from "@/components/dashboard/SummaryCards";
import LiveLeadTable from "@/components/dashboard/LiveLeadTable";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import QuickActions from "@/components/dashboard/QuickActions";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gray-100">

      <DashboardHeader />

      <div className="flex">

        <Sidebar />

        <section className="flex-1 p-8">

          <SummaryCards />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mt-8">

            <div className="xl:col-span-2">
              <LiveLeadTable />
            </div>

            <div>
              <ActivityFeed />
            </div>

          </div>

          <div className="mt-8">
            <QuickActions />
          </div>

        </section>

      </div>

    </main>
  );
}