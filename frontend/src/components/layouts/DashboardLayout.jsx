import { useState } from "react";
import { Outlet } from "react-router-dom";
import ClientSidebar from "../sidebars/ClientSidebar";
import MechanicSidebar from "../sidebars/MechanicSidebar";
import AdminSidebar from "../sidebars/AdminSidebar";

const DashboardLayout = ({ role }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderSidebar = () => {
    const props = { onClose: () => setSidebarOpen(false) };
    switch (role) {
      case "client":
        return <ClientSidebar {...props} />;
      case "mechanic":
        return <MechanicSidebar {...props} />;
      case "admin":
        return <AdminSidebar {...props} />;
      default:
        return null;
    }
  };

  const bgColor = role === "mechanic" ? "#0f172a" : "#f1f5f9";

  const footerBg = role === "mechanic" ? "#000000" : "#0d1b2a";

  return (
    <div className="flex min-h-screen" style={{ background: bgColor }}>
      {/* ── Sidebar Desktop (always visible md+) ── */}
      <div
        className="hidden md:flex fixed top-0 left-0 h-full z-20 flex-col"
        style={{ width: "260px" }}
      >
        {renderSidebar()}
      </div>

      {/* ── Sidebar Mobile (overlay) ── */}
      {sidebarOpen && (
        <>
          {/* dark backdrop */}
          <div
            className="fixed inset-0 z-30 bg-black bg-opacity-60 md:hidden"
            onClick={() => setSidebarOpen(false)}
          />
          {/* sidebar drawer */}
          <div
            className="fixed top-0 left-0 h-full z-40 flex flex-col md:hidden"
            style={{ width: "260px" }}
          >
            {renderSidebar()}
          </div>
        </>
      )}

      {/* ── Main Content ── */}
      <div
        className="flex flex-col min-h-screen w-full"
        style={{ marginLeft: "0px" }}
        // shift on desktop
      >
        {/* desktop margin wrapper */}
        <div className="md:ml-64 flex flex-col flex-1">
          {/* ── Mobile Top Bar ── */}
          <div
            className="flex md:hidden items-center justify-between px-4 py-3 sticky top-0 z-20"
            style={{
              background: role === "mechanic" ? "#0f172a" : "#1e293b",
              borderBottom: "1px solid #334155",
            }}
          >
            {/* hamburger */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex flex-col gap-1.5 p-1.5"
            >
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>

            <p className="text-white font-bold text-base">SteadyFast</p>

            {/* spacer */}
            <div className="w-9" />
          </div>

          {/* ── Page Content ── */}
          <div className="flex-1 p-4 md:p-6">
            <Outlet />
          </div>

          {/* ── Footer ── */}
          <footer
            className="text-white text-center py-5"
            style={{ background: footerBg }}
          >
            <p className="font-semibold text-base">SteadyFast</p>
            <p className="text-gray-400 text-sm">
              Reliable mechanical repairs at your doorstep © 2026
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
