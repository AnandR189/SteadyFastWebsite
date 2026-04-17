import { Routes, Route, Navigate } from "react-router-dom";

// layouts
// import GuestLayout from "./components/layouts/GuestLayout";
import GuestLayout from "./components/layouts/GuestLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";

// guest pages
// import HomePage from "../pages/guest/HomePage";
import HomePage from "./pages/guest/HomePage";
import AboutPage from "./pages/guest/About";
import TipsPage from "./pages/guest/Tips";
import ContactPage from "./pages/guest/ContactPage";

// auth pages
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";

// client pages
import ClientHome from "./pages/client/CilentHome";
import SetLocation from "./pages/client/SetLocation";
import ReliableMechanics from "./pages/client/ReliableMechanics";
import TrackingDashboard from "./pages/client/TrackingDashbord";
import MyProfile from "./pages/client/MyProfile";
// add these imports at top of App.jsx

// mechanic pages
import MechanicDashboard from "./pages/mechanic/MechanicDashboard";
import AvailableJobs from "./pages/mechanic/AvailableJobs";
import MyClients from "./pages/mechanic/MyClients";
import Reviews from "./pages/mechanic/Reviews";
import JobHistory from "./pages/mechanic/JobHistory";
import Revenue from "./pages/mechanic/Revenue";
import MechanicProfile from "./pages/mechanic/MechanicProfile";

// admin pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ClientManagement from "./pages/admin/ClientManagement";
import MechanicManagement from "./pages/admin/MechanicManagement";
import JobManagement from "./pages/admin/JobsManagement";
import SystemReports from "./pages/admin/SystemReports";
import AdminProfile from "./pages/admin/AdminProfile";

// protected route
import ProtectedRoute from "./components/common/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* ───── GUEST ROUTES ───── */}
      <Route element={<GuestLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/tips" element={<TipsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* ───── CLIENT ROUTES ───── */}
      <Route element={<ProtectedRoute allowedRoles={["client"]} />}>
        <Route element={<DashboardLayout role="client" />}>
          <Route path="/client/home" element={<ClientHome />} />
          <Route path="/client/location" element={<SetLocation />} />
          <Route path="/client/about" element={<AboutPage />} />
          <Route path="/client/tips" element={<TipsPage />} />
          <Route path="/client/mechanics" element={<ReliableMechanics />} />
          <Route path="/client/dashboard" element={<TrackingDashboard />} />
          <Route path="/client/profile" element={<MyProfile />} />
        </Route>
      </Route>

      {/* ───── MECHANIC ROUTES ───── */}
      <Route element={<ProtectedRoute allowedRoles={["mechanic"]} />}>
        <Route element={<DashboardLayout role="mechanic" />}>
          <Route path="/mechanic/dashboard" element={<MechanicDashboard />} />
          <Route path="/mechanic/jobs" element={<AvailableJobs />} />
          <Route path="/mechanic/clients" element={<MyClients />} />
          <Route path="/mechanic/reviews" element={<Reviews />} />
          <Route path="/mechanic/history" element={<JobHistory />} />
          <Route path="/mechanic/revenue" element={<Revenue />} />
          <Route path="/mechanic/profile" element={<MechanicProfile />} />
        </Route>
      </Route>

      {/* ───── ADMIN ROUTES ───── */}
      <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
        <Route element={<DashboardLayout role="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/clients" element={<ClientManagement />} />
          <Route path="/admin/mechanics" element={<MechanicManagement />} />
          <Route path="/admin/jobs" element={<JobManagement />} />
          <Route path="/admin/reports" element={<SystemReports />} />
          <Route path="/admin/profile" element={<AdminProfile />} />
        </Route>
      </Route>

      {/* ───── FALLBACK ───── */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
