import { Briefcase, Clock, CheckCircle2, XCircle, Search, Filter, Eye, MoreVertical } from "lucide-react";

// Dummy data for jobs
const jobsData = [
  { id: "JOB-1024", type: "Engine Repair", client: "Jane Client", mechanic: "John Mechanic", status: "Active", price: "$250", date: "02 Apr 2024" },
  { id: "JOB-1023", type: "Brake Pad Replacement", client: "Michael Brown", mechanic: "Bob Builder", status: "Completed", price: "$120", date: "01 Apr 2024" },
  { id: "JOB-1022", type: "Oil Change", client: "Alice Smith", mechanic: "Maria Tool", status: "Completed", price: "$60", date: "31 Mar 2024" },
  { id: "JOB-1021", type: "Electric Checkup", client: "Emily Davis", mechanic: "Alice Mechanic", status: "Cancelled", price: "$45", date: "30 Mar 2024" },
  { id: "JOB-1020", type: "Tire Rotation", client: "Chris Wilson", mechanic: "Not Assigned", status: "Pending", price: "$80", date: "29 Mar 2024" },
];

const StatusCard = ({ title, count, icon, color, bgColor }) => (
  <div className={`p-6 rounded-2xl border ${color} bg-white shadow-sm flex items-center gap-4`}>
    <div className={`w-12 h-12 rounded-xl ${bgColor} flex items-center justify-center`}>
      {icon}
    </div>
    <div>
      <p className="text-slate-500 text-xs font-bold uppercase tracking-wider">{title}</p>
      <h3 className="text-2xl font-black text-slate-800">{count}</h3>
    </div>
  </div>
);

const JobsManagement = () => {
  return (
    <div className="space-y-8 animate-in zoom-in-95 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-1">Job Management</h1>
        <p className="text-slate-500">Track and manage all service requests in real-time</p>
      </div>

      {/* Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatusCard
          title="Active Jobs"
          count="2"
          icon={<Briefcase className="text-blue-600" size={24} />}
          color="border-blue-100"
          bgColor="bg-blue-50"
        />
        <StatusCard
          title="Pending Requests"
          count="0"
          icon={<Clock className="text-amber-600" size={24} />}
          color="border-amber-100"
          bgColor="bg-amber-50"
        />
        <StatusCard
          title="Completed"
          count="15"
          icon={<CheckCircle2 className="text-emerald-600" size={24} />}
          color="border-emerald-100"
          bgColor="bg-emerald-50"
        />
        <StatusCard
          title="Cancelled"
          count="1"
          icon={<XCircle className="text-rose-600" size={24} />}
          color="border-rose-100"
          bgColor="bg-rose-50"
        />
      </div>

      {/* Recent Job Requests */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-800">Recent Job Requests</h2>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
              <input
                type="text"
                placeholder="Search jobs..."
                className="pl-9 pr-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
            <button className="p-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors">
              <Filter size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">ID</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Service Type</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Mechanic</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {jobsData.map((job) => (
                <tr key={job.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 text-xs font-bold text-blue-600 text-center">{job.id}</td>
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-slate-700">{job.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{job.client}</td>
                  <td className="px-6 py-4">
                    <span className={`text-sm font-medium ${job.mechanic === "Not Assigned" ? "text-amber-600 italic underline decoration-dotted" : "text-slate-600"}`}>
                      {job.mechanic}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest border ${
                      job.status === "Active" ? "bg-blue-50 text-blue-600 border-blue-100" :
                      job.status === "Completed" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
                      job.status === "Pending" ? "bg-amber-50 text-amber-600 border-amber-100" :
                      "bg-rose-50 text-rose-600 border-rose-100"
                    }`}>
                      {job.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-800">{job.price}</td>
                  <td className="px-6 py-4 text-sm text-slate-500">{job.date}</td>
                  <td className="px-6 py-4">
                    <button className="p-1.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                      <Eye size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500 font-medium">All jobs are synchronized with the central tracking system.</p>
          <button className="text-sm font-bold text-blue-600 hover:underline">View All Job History</button>
        </div>
      </div>
    </div>
  );
};

export default JobsManagement;
