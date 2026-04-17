import { Users, UserCheck, Wrench, Eye, Edit2, Trash2 } from "lucide-react";

// Dummy data for users
const usersData = [
  { id: 1, name: "Admin User", email: "admin@example.com", role: "Admin", joined: "10 Jan 2024", service: "N/A", status: "Active" },
  { id: 2, name: "John Mechanic", email: "mechanic@example.com", role: "Mechanic", joined: "12 Feb 2024", service: "N/A", status: "Active" },
  { id: 3, name: "Jane Client", email: "client@example.com", role: "Client", joined: "15 Mar 2024", service: "Not Assigned", status: "Active" },
  { id: 4, name: "Bob Builder", email: "bob@example.com", role: "Mechanic", joined: "20 Mar 2024", service: "N/A", status: "Active" },
  { id: 5, name: "Alice Smith", email: "alice@example.com", role: "Client", joined: "01 Apr 2024", service: "Assigned", status: "Active" },
];

const StatCard = ({ title, value, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex items-center justify-between transition-all hover:shadow-md">
    <div>
      <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-slate-800">{value}</h3>
    </div>
    <div className={`p-3 rounded-xl ${color} bg-opacity-10`}>
      {icon}
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-2">Admin Dashboard</h1>
        <p className="text-slate-500">Manage all users and system settings</p>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Users"
          value="26"
          icon={<Users className="text-blue-600" size={24} />}
          
        />
        <StatCard
          title="Clients"
          value="15"
          icon={<UserCheck className="text-purple-600" size={24} />}
        />
        <StatCard
          title="Mechanics"
          value="11"
          icon={<Wrench className="text-orange-600" size={24} />}
        />
      </div>

      {/* User Management Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
        <div className="p-6 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-slate-800">User Management</h2>
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Search users..."
              className="px-4 py-2 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors shadow-sm">
              Add User
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
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Joined</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Service</th>
                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {usersData.map((user, idx) => (
                <tr key={user.id} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4 text-sm text-slate-600">{idx + 1}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold"
                        style={{ background: user.role === "Admin" ? "#f43f5e" : user.role === "Mechanic" ? "#10b981" : "#3b82f6" }}
                      >
                        {user.name.charAt(0)}
                      </div>
                      <span className="text-sm font-semibold text-slate-700">{user.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500">{user.email}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      user.role === "Admin" ? "bg-rose-100 text-rose-600" :
                      user.role === "Mechanic" ? "bg-emerald-100 text-emerald-600" :
                      "bg-blue-100 text-blue-600"
                    }`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-slate-500 font-medium">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      user.service === "N/A" ? "bg-slate-100 text-slate-500" :
                      user.service === "Not Assigned" ? "bg-amber-100 text-amber-600" :
                      "bg-blue-100 text-blue-600"
                    }`}>
                      {user.service}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors shadow-sm bg-white border border-slate-100" title="View">
                        <Eye size={16} />
                      </button>
                      <button className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg transition-colors shadow-sm bg-white border border-slate-100" title="Edit">
                        <Edit2 size={16} />
                      </button>
                      <button className="p-1.5 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors shadow-sm bg-white border border-slate-100" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
          <p className="text-xs text-slate-500">Showing 5 of 26 users</p>
          <div className="flex items-center gap-1">
            <button className="px-3 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-600 cursor-not-allowed opacity-50">Prev</button>
            <button className="px-3 py-1 rounded bg-blue-600 text-xs font-semibold text-white">1</button>
            <button className="px-3 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100">2</button>
            <button className="px-3 py-1 rounded bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-slate-100">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
