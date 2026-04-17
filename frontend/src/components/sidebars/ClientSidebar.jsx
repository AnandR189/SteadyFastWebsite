import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const menuItems = [
  { label: "Home", path: "/client/home", icon: "🏠" },
  { label: "Dashboard", path: "/client/dashboard", icon: "📊" },
  { label: "Set Location", path: "/client/location", icon: "📍" },
  { label: "Reliable Mechanics", path: "/client/mechanics", icon: "👥" },
  { label: "About Us", path: "/client/about", icon: "📋" },
  { label: "Tips", path: "/client/tips", icon: "ℹ️" },
  { label: "My Profile", path: "/client/profile", icon: "👤" },
];

const ClientSidebar = ({ onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const handleLink = () => {
    if (onClose) onClose();
  };

  const initial = user?.name?.charAt(0).toUpperCase() || "C";

  return (
    <div
      className="flex flex-col justify-between h-full w-full py-5 px-4"
      style={{
        background: "linear-gradient(180deg, #020b2d, #00061a)",
      }}
    >
      <div>
        {/* Close button mobile only */}
        <div className="flex justify-end mb-2 md:hidden">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl font-bold p-1"
          >
            ✕
          </button>
        </div>

        {/* Profile */}
        <div className="text-center mb-5">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-2"
            style={{ background: "#3b82f6" }}
          >
            {initial}
          </div>
          <p className="text-white font-semibold text-sm">
            {user?.name || "Jane Client"}
          </p>
          <p className="text-slate-400 text-xs">Client</p>
        </div>

        <hr className="border-slate-700 mb-4" />

        {/* Menu */}
        <nav className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={handleLink}
                className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200"
                style={{
                  color: isActive ? "#ffffff" : "#cbd5e1",
                  background: isActive
                    ? "linear-gradient(to right, #3b82f6, #2563eb)"
                    : "transparent",
                  fontWeight: isActive ? "600" : "400",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = "#1e40af";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.background = "transparent";
                }}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="w-full py-2.5 rounded-lg text-white font-semibold text-sm transition-colors mt-4"
        style={{ background: "#dc2626" }}
        onMouseEnter={(e) => (e.target.style.background = "#b91c1c")}
        onMouseLeave={(e) => (e.target.style.background = "#dc2626")}
      >
        Logout
      </button>
    </div>
  );
};

export default ClientSidebar;
