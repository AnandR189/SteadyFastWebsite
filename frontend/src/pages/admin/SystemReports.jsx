import { TrendingUp, DollarSign, Users, Briefcase, BarChart3, PieChart, ArrowUpRight, ArrowDownRight } from "lucide-react";

const ReportCard = ({ title, value, change, isPositive, icon, color }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col gap-4">
    <div className="flex items-center justify-between">
      <div className={`p-2.5 rounded-xl ${color} bg-opacity-10`}>
        {icon}
      </div>
      <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? "text-emerald-600" : "text-rose-600"}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {change}
      </div>
    </div>
    <div>
      <p className="text-slate-500 text-sm font-medium mb-1">{title}</p>
      <h3 className="text-2xl font-black text-slate-800">{value}</h3>
    </div>
  </div>
);

const SystemReports = () => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-slate-800 mb-1">System Reports</h1>
        <p className="text-slate-500">Analyze platform performance and financial metrics</p>
      </div>

      {/* Primary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ReportCard
          title="Monthly Revenue"
          value="$12,450"
          change="+12.5%"
          isPositive={true}
          icon={<DollarSign className="text-emerald-600" size={20} />}
          color="bg-emerald-600"
        />
        <ReportCard
          title="New Users"
          value="48"
          change="+18.2%"
          isPositive={true}
          icon={<Users className="text-blue-600" size={20} />}
          color="bg-blue-600"
        />
        <ReportCard
          title="Total Jobs"
          value="156"
          change="+5.4%"
          isPositive={true}
          icon={<Briefcase className="text-purple-600" size={20} />}
          color="bg-purple-600"
        />
        <ReportCard
          title="Cancellation Rate"
          value="2.4%"
          change="-0.8%"
          isPositive={true} // lower is better
          icon={<TrendingUp className="text-rose-600" size={20} />}
          color="bg-rose-600"
        />
      </div>

      {/* Visual Data (Mock Charts) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue Chart Placeholder */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-80">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
              <BarChart3 size={20} className="text-blue-600" />
              Revenue Growth
            </h3>
            <select className="text-xs font-bold border-none bg-slate-50 rounded-lg px-2 py-1 outline-none">
              <th value="7d">Last 7 Days</th>
              <th value="30d">Last 30 Days</th>
            </select>
          </div>
          <div className="flex-1 flex items-end justify-between gap-2 px-2">
            {[40, 65, 45, 90, 55, 80, 70].map((height, i) => (
              <div key={i} className="flex-1 group relative flex flex-col items-center">
                <div 
                  className="w-full bg-blue-100 rounded-t-lg transition-all duration-500 group-hover:bg-blue-600" 
                  style={{ height: `${height}%` }}
                />
                <span className="text-[10px] text-slate-400 mt-2 font-bold">{["M", "T", "W", "T", "F", "S", "S"][i]}</span>
                {/* Tooltip */}
                <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[10px] font-black px-2 py-1 rounded shadow-lg pointer-events-none z-10">
                  ${height * 10}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Roles Distribution Placeholder */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-80">
          <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-8">
            <PieChart size={20} className="text-purple-600" />
            User Distribution
          </h3>
          <div className="flex-1 flex items-center justify-center relative">
            {/* Simple circle representation for a pie chart */}
            <div className="w-40 h-40 rounded-full border-[16px] border-blue-500 relative flex items-center justify-center">
              <div className="absolute inset-0 border-[16px] border-purple-500 rounded-full" style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)" }} />
              <div className="absolute inset-0 border-[16px] border-emerald-500 rounded-full" style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)" }} />
              <div className="text-center">
                <p className="text-2xl font-black text-slate-800">100%</p>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Active</p>
              </div>
            </div>
            {/* Legend */}
            <div className="ml-8 space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-blue-500" />
                <span className="text-xs font-bold text-slate-600">Clients (60%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emerald-500" />
                <span className="text-xs font-bold text-slate-600">Mechanics (35%)</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-purple-500" />
                <span className="text-xs font-bold text-slate-600">Admins (5%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemReports;
