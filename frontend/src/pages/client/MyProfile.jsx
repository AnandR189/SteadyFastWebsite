import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const MyProfile = () => {
  const { user } = useAuth();
  const initial = user?.name?.charAt(0).toUpperCase() || "J";

  const [form, setForm] = useState({
    name: user?.name || "Jane Client",
    email: user?.email || "client@example.com",
    phone: "+1234 567 8900",
    address: "123 Main St, City",
    newPassword: "",
    confirmPassword: "",
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSave = () => {
    if (form.newPassword && form.newPassword !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    if (form.newPassword && form.newPassword.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          👤 My Profile
        </h3>
        <p className="text-gray-500 text-sm mt-1">
          Manage your account settings and preferences
        </p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}
      {saved && (
        <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-4">
          ✅ Profile saved successfully!
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Avatar Card */}
        <div
          className="rounded-2xl p-6 flex flex-col items-center justify-center gap-3"
          style={{ background: "#1e293b" }}
        >
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-4xl font-bold"
            style={{
              border: "3px solid #22c55e",
              background: "transparent",
            }}
          >
            {initial}
          </div>
          <p className="text-white font-semibold">{form.name}</p>
          <span
            className="px-4 py-1 rounded-full text-white text-xs font-semibold"
            style={{ background: "#22c55e" }}
          >
            Client
          </span>
        </div>

        {/* Form */}
        <div
          className="md:col-span-2 rounded-2xl p-6"
          style={{ background: "#1e293b" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-gray-400 text-xs mb-1 block">
                Full Name
              </label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ background: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1 block">
                Email Address
              </label>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ background: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1 block">
                Phone Number
              </label>
              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ background: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1 block">
                Address
              </label>
              <input
                name="address"
                value={form.address}
                onChange={handleChange}
                className="w-full rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ background: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1 block">
                New Password (optional)
              </label>
              <input
                type="password"
                name="newPassword"
                value={form.newPassword}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ background: "#0f172a", border: "1px solid #334155" }}
              />
            </div>

            <div>
              <label className="text-gray-400 text-xs mb-1 block">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleChange}
                placeholder="Optional"
                className="w-full rounded-lg px-3 py-2.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{ background: "#0f172a", border: "1px solid #334155" }}
              />
            </div>
          </div>

          <div className="flex justify-end mt-5">
            <button
              onClick={handleSave}
              className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors"
              style={{ background: "#22c55e" }}
              onMouseEnter={(e) => (e.target.style.background = "#16a34a")}
              onMouseLeave={(e) => (e.target.style.background = "#22c55e")}
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
