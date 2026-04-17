import { Wrench, UserPlus, Search, Eye, Edit2, Trash2, ShieldCheck } from "lucide-react";

// Dummy data for mechanics
const mechanicsData = [
  { id: 1, name: "John Mechanic", email: "john@example.com", specialization: "Engine Expert", joined: "10 Jan 2024", jobsCompleted: 45, status: "Active" },
  { id: 2, name: "Bob Builder", email: "bob@example.com", specialization: "Brake Specialist", joined: "12 Feb 2024", jobsCompleted: 32, status: "Active" },
  { id: 3, name: "Alice Mechanic", email: "alice@example.com", specialization: "Electrical Systems", joined: "15 Mar 2024", jobsCompleted: 28, status: "Active" },
  { id: 4, name: "Steve Gear", email: "steve@example.com", specialization: "Transmission", joined: "20 Mar 2024", jobsCompleted: 15, status: "Busy" },
  { id: 5, name: "Maria Tool", email: "maria@example.com", specialization: "General Service", joined: "01 Apr 2024", jobsCompleted: 50, status: "Active" },
];

const MechanicManagement = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-1">Mechanic Management</h1>
          <p className="text-slate-500">Oversee and verify mechanical service providers</p>
        </div>
        <button className="flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200">
          <UserPlus size={18} />
          Register New Mechanic
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-4">
          <Wrench className="text-emerald-600" size={32} />
        </div>
        <h3 className="text-4xl font-black text-slate-800 mb-1">11</h3>
        <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">Verified Mechanics</p>
      </div>

      {/* Mechanics Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search mechanics by name or spec..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white font-semibold text-slate-600 hover:bg-slate-50 transition-colors">
              Filter by Specialization
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Specialization</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Jobs</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {mechanicsData.map((mechanic, idx) => (
                <tr key={mechanic.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-500">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-sm">
                          {mechanic.name.charAt(0)}
                        </div>
                        <div className="absolute -bottom-0.5 -right-0.5 bg-white rounded-full p-0.5">
                          <ShieldCheck size={12} className="text-emerald-500 fill-emerald-50" />
                        </div>
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{mechanic.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{mechanic.email}</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold">
                      {mechanic.specialization}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-bold text-slate-700">{mechanic.jobsCompleted}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      mechanic.status === "Active" ? "bg-emerald-100 text-emerald-600" : "bg-amber-100 text-amber-600"
                    }`}>
                      {mechanic.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors shadow-sm bg-white border border-slate-100" title="View Portfolio">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-colors shadow-sm bg-white border border-slate-100" title="Edit Profile">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shadow-sm bg-white border border-slate-100" title="Deactivate">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-sm text-slate-500">Showing <span className="font-bold text-emerald-700">5</span> of <span className="font-bold text-emerald-700">11</span> mechanics</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 rounded-xl bg-emerald-600 text-sm font-bold text-white shadow-md shadow-emerald-200">1</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-100">2</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:bg-white transition-opacity opacity-50 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicManagement;
