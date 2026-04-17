const jobs = [
  {
    date: "10-02-2026",
    client: "Anand Raythatha",
    vehicle: "Volvo",
    service: "Engine",
    status: "completed",
    cost: "₹1500",
  },
  {
    date: "01-01-2026",
    client: "Martin",
    vehicle: "Audi",
    service: "Steering Problem",
    status: "in_progress",
    cost: "₹800",
  },
  {
    date: "02-02-2025",
    client: "Neel",
    vehicle: "Alto",
    service: "Puncture",
    status: "cancelled",
    cost: "₹300",
  },
  {
    date: "15-03-2026",
    client: "Rahul Sharma",
    vehicle: "Car",
    service: "Battery Repair",
    status: "completed",
    cost: "₹1500",
  },
  {
    date: "14-03-2026",
    client: "Priya Mehta",
    vehicle: "Truck",
    service: "Engine Work",
    status: "in_progress",
    cost: "₹2500",
  },
  {
    date: "12-03-2026",
    client: "Amit Patel",
    vehicle: "Bike",
    service: "Tyre Puncture",
    status: "pending",
    cost: "₹300",
  },
];

const statusConfig = {
  completed: { bg: "#166834", color: "#bbf7d0", label: "Completed" },
  in_progress: { bg: "#1e40af", color: "#bfdbfe", label: "In Progress" },
  cancelled: { bg: "#991b1b", color: "#fecaca", label: "Cancelled" },
  pending: { bg: "#92400e", color: "#fde68a", label: "Pending" },
};

const JobHistory = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Job History</h2>

      {/* Desktop Table */}
      <div
        className="hidden md:block rounded-xl overflow-hidden"
        style={{ background: "#1e293b" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0f172a" }}>
                {["Date", "Client", "Vehicle", "Service", "Status", "Cost"].map(
                  (h) => (
                    <th
                      key={h}
                      className="text-left px-5 py-4 text-gray-400 font-medium text-xs uppercase tracking-wide"
                    >
                      {h}
                    </th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, i) => {
                const s = statusConfig[job.status];
                return (
                  <tr
                    key={i}
                    className="border-t border-gray-800 hover:bg-slate-800 transition-colors"
                  >
                    <td className="px-5 py-3 text-gray-400 text-xs">
                      {job.date}
                    </td>
                    <td className="px-5 py-3 text-white">{job.client}</td>
                    <td className="px-5 py-3 text-gray-300">{job.vehicle}</td>
                    <td className="px-5 py-3 text-gray-300">{job.service}</td>
                    <td className="px-5 py-3">
                      <span
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: s.bg, color: s.color }}
                      >
                        {s.label}
                      </span>
                    </td>
                    <td className="px-5 py-3 text-gray-300 font-medium">
                      {job.cost}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-3">
        {jobs.map((job, i) => {
          const s = statusConfig[job.status];
          return (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{ background: "#1e293b" }}
            >
              <div className="flex items-center justify-between mb-2">
                <p className="text-white font-semibold">{job.client}</p>
                <span
                  className="px-2 py-1 rounded-full text-xs font-semibold"
                  style={{ background: s.bg, color: s.color }}
                >
                  {s.label}
                </span>
              </div>
              <div className="text-sm text-gray-400 flex flex-col gap-1">
                <p>📅 {job.date}</p>
                <p>
                  🚗 {job.vehicle} — {job.service}
                </p>
                <p className="text-green-400 font-semibold">{job.cost}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default JobHistory;
