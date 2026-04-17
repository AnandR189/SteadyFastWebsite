const recentJobs = [
  {
    client: "Rahul",
    vehicle: "Car",
    problem: "Battery Issue",
    status: "completed",
    price: "₹1500",
  },
  {
    client: "Amit",
    vehicle: "Bike",
    problem: "Tyre Puncture",
    status: "active",
    price: "₹300",
  },
  {
    client: "Priya",
    vehicle: "Truck",
    problem: "Engine Issue",
    status: "pending",
    price: "₹2500",
  },
];

const statusStyle = {
  completed: { bg: "#166534", color: "#bbf7d0", label: "Completed" },
  active: { bg: "#065f46", color: "#6ee7b7", label: "Active" },
  pending: { bg: "#92400e", color: "#fde68a", label: "Pending" },
  cancelled: { bg: "#7f1d1d", color: "#fecaca", label: "Cancelled" },
};

const MechanicDashboard = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Mechanic Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="rounded-xl p-5" style={{ background: "#1d4ed8" }}>
          <p className="text-blue-200 text-xs font-medium mb-1">Total Jobs</p>
          <p className="text-white text-3xl font-bold">25</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#15803d" }}>
          <p className="text-green-200 text-xs font-medium mb-1">Active Jobs</p>
          <p className="text-white text-3xl font-bold">5</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#b45309" }}>
          <p className="text-yellow-200 text-xs font-medium mb-1">
            Completed Jobs
          </p>
          <p className="text-white text-3xl font-bold">18</p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#b91c1c" }}>
          <p className="text-red-200 text-xs font-medium mb-1">Total Revenue</p>
          <p className="text-white text-2xl font-bold">₹12,500</p>
        </div>
      </div>

      {/* Second Row */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="rounded-xl p-5" style={{ background: "#1e293b" }}>
          <p className="text-gray-400 text-xs mb-1">Average Rating</p>
          <p className="text-white text-2xl font-bold">
            4.5 <span className="text-yellow-400">⭐</span>
          </p>
        </div>
        <div className="rounded-xl p-5" style={{ background: "#1e293b" }}>
          <p className="text-gray-400 text-xs mb-1">Pending Jobs</p>
          <p className="text-white text-2xl font-bold">2</p>
        </div>
      </div>

      {/* Recent Jobs Table */}
      <div
        className="rounded-xl overflow-hidden"
        style={{ background: "#1e293b" }}
      >
        <div className="px-5 py-4 border-b border-gray-700">
          <h4 className="text-white font-semibold">Recent Jobs</h4>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0f172a" }}>
                {["Client", "Vehicle", "Problem", "Status", "Price"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-3 text-gray-400 font-medium text-xs uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {recentJobs.map((job, i) => {
                const s = statusStyle[job.status];
                return (
                  <tr
                    key={i}
                    className="border-t border-gray-800 hover:bg-slate-800 transition-colors"
                  >
                    <td className="px-5 py-3 text-white">{job.client}</td>
                    <td className="px-5 py-3 text-gray-300">{job.vehicle}</td>
                    <td className="px-5 py-3 text-gray-300">{job.problem}</td>
                    <td className="px-5 py-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {s.label}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-300">{job.price}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MechanicDashboard;
