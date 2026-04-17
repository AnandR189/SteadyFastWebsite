const clients = [
  {
    name: "Rahul Sharma",
    vehicle: "Car",
    phone: "9876543210",
    location: "Rajkot",
    jobs: 3,
  },
  {
    name: "Amit Patel",
    vehicle: "Bike",
    phone: "9123456780",
    location: "Gondal Road",
    jobs: 1,
  },
  {
    name: "Priya Mehta",
    vehicle: "Truck",
    phone: "9988776655",
    location: "Highway",
    jobs: 2,
  },
  {
    name: "Neha Shah",
    vehicle: "Car",
    phone: "9876512345",
    location: "Surat",
    jobs: 4,
  },
  {
    name: "Karan Dave",
    vehicle: "Bus",
    phone: "9123498765",
    location: "Vadodara",
    jobs: 1,
  },
];

const MyClients = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">My Clients</h2>

      {/* Desktop Table */}
      <div
        className="hidden md:block rounded-xl overflow-hidden"
        style={{ background: "#1e293b" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ background: "#0f172a" }}>
                {["Name", "Vehicle", "Phone", "Location", "Total Jobs"].map(
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
              {clients.map((c, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-800 hover:bg-slate-800 transition-colors"
                >
                  <td className="px-5 py-4 text-white font-medium">{c.name}</td>
                  <td className="px-5 py-4 text-gray-300">{c.vehicle}</td>
                  <td className="px-5 py-4 text-gray-300">{c.phone}</td>
                  <td className="px-5 py-4 text-gray-300">{c.location}</td>
                  <td className="px-5 py-4">
                    <span
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: "#3b82f6" }}
                    >
                      {c.jobs}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-3">
        {clients.map((c, i) => (
          <div
            key={i}
            className="rounded-xl p-4"
            style={{ background: "#1e293b" }}
          >
            <div className="flex items-center justify-between mb-2">
              <p className="text-white font-semibold">{c.name}</p>
              <span
                className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold"
                style={{ background: "#3b82f6" }}
              >
                {c.jobs}
              </span>
            </div>
            <div className="text-sm text-gray-400 flex flex-col gap-1">
              <p>🚗 {c.vehicle}</p>
              <p>📞 {c.phone}</p>
              <p>📍 {c.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyClients;
