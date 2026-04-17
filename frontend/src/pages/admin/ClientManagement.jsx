import { Users, UserPlus, Search, Eye, Edit2, Trash2 } from "lucide-react";

// Dummy data for clients
const clientsData = [
  { id: 1, name: "Jane Client", email: "client@example.com", role: "Client", joined: "15 Mar 2024", serviceProfessional: "John Mechanic", status: "Active" },
  { id: 2, name: "Alice Smith", email: "alice@example.com", role: "Client", joined: "01 Apr 2024", serviceProfessional: "Not Assigned", status: "Pending" },
  { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Client", joined: "05 Apr 2024", serviceProfessional: "Bob Builder", status: "Active" },
  { id: 4, name: "Emily Davis", email: "emily@example.com", role: "Client", joined: "10 Apr 2024", serviceProfessional: "Not Assigned", status: "Active" },
  { id: 5, name: "Chris Wilson", email: "chris@example.com", role: "Client", joined: "12 Apr 2024", serviceProfessional: "John Mechanic", status: "Active" },
];

const ClientManagement = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-1">Client Management</h1>
          <p className="text-slate-500">Manage and monitor all registered clients</p>
        </div>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200">
          <UserPlus size={18} />
          Add New Client
        </button>
      </div>

      {/* Summary Card */}
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center text-center">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
          <Users className="text-blue-600" size={32} />
        </div>
        <h3 className="text-4xl font-black text-slate-800 mb-1">15</h3>
        <p className="text-slate-500 font-medium uppercase tracking-widest text-xs">Total Clients</p>
      </div>

      {/* Clients Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search clients by name or email..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all text-sm"
            />
          </div>
          <div className="flex items-center gap-2">
            <select className="px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 bg-white font-medium text-slate-600">
              <th value="all">All Status</th>
              <th value="active">Active</th>
              <th value="pending">Pending</th>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">#</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Service Professional</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {clientsData.map((client, idx) => (
                <tr key={client.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-500">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-sm">
                        {client.name.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{client.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{client.email}</td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{client.joined}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${client.serviceProfessional === "Not Assigned" ? "bg-amber-400" : "bg-blue-400"}`} />
                      <span className={`text-sm font-medium ${client.serviceProfessional === "Not Assigned" ? "text-amber-600 italic" : "text-slate-600"}`}>
                        {client.serviceProfessional}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-xl transition-colors shadow-sm bg-white border border-slate-100" title="View Details">
                        <Eye size={16} />
                      </button>
                      <button className="p-2 text-amber-600 hover:bg-amber-50 rounded-xl transition-colors shadow-sm bg-white border border-slate-100" title="Edit Client">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-2 text-rose-600 hover:bg-rose-50 rounded-xl transition-colors shadow-sm bg-white border border-slate-100" title="Remove Client">
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
          <p className="text-sm text-slate-500">Showing <span className="font-bold text-slate-700">5</span> of <span className="font-bold text-slate-700">15</span> clients</p>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-400 cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 rounded-xl bg-blue-600 text-sm font-bold text-white shadow-md shadow-blue-200">1</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-100">2</button>
            <button className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:bg-slate-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientManagement;
