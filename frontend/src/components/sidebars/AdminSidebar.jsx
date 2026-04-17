import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { LayoutDashboard, Users, UserCog, Briefcase, FileText, User, LogOut } from "lucide-react";

const menuItems = [
  { label: "Dashboard", path: "/admin/dashboard", icon: <LayoutDashboard size={20} /> },
  { label: "Clients", path: "/admin/clients", icon: <Users size={20} /> },
  { label: "Mecanics", path: "/admin/mechanics", icon: <UserCog size={20} /> },
  { label: "Jobs", path: "/admin/jobs", icon: <Briefcase size={20} /> },
  { label: "Reports", path: "/admin/reports", icon: <FileText size={20} /> },
  { label: "My Profile", path: "/admin/profile", icon: <User size={20} /> },
];

const AdminSidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLinkClick = () => {
    if (onClose) onClose();
  };

  const initial = user?.name?.charAt(0).toUpperCase() || "J";

  return (
    <div
      className="flex flex-col justify-between h-full w-full py-6 px-4 text-white shadow-xl"
      style={{
        background: "linear-gradient(180deg, #020b2d, #00061a)",
      }}
    >
      <div>
        {/* Mobile Close Button */}
        <div className="flex justify-end mb-2 md:hidden">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors"
          >
            <span className="text-2xl">✕</span>
          </button>
        </div>

        {/* Admin Profile */}
        <div className="flex flex-col items-center mb-8">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-3 shadow-lg ring-4 ring-blue-500/30"
            style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}
          >
            {initial}
          </div>
          <h2 className="text-lg font-bold text-white mb-0.5 tracking-tight">
            {user?.name || "Jane Admin"}
          </h2>
          <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">
            Admin
          </p>
        </div>

        <div className="h-px bg-slate-800 mb-6 mx-2" />

        {/* Navigation Menu */}
        <nav className="flex flex-col gap-1.5">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLinkClick}
                className={`flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-900/20"
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-white"
                }`}
              >
                <span
                  className={`${
                    isActive ? "text-white" : "text-slate-500 group-hover:text-blue-400"
                  } transition-colors`}
                >
                  {item.icon}
                </span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-white font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-red-900/20 active:scale-[0.98]"
        style={{ background: "linear-gradient(to right, #ef4444, #dc2626)" }}
      >
        <LogOut size={18} />
        Logout
      </button>
    </div>
  );
};

export default AdminSidebar;
