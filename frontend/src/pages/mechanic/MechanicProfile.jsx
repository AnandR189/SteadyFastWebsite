import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

const specialities = [
  {
    key: "engine",
    icon: "⚙️",
    title: "Engine",
    desc: "Internal combustion & performance",
  },
  {
    key: "electrical",
    icon: "⚡",
    title: "Electrical",
    desc: "Wiring, ECUs & lighting",
  },
  {
    key: "drivetrain",
    icon: "🔧",
    title: "Drivetrain",
    desc: "Axles & shafts",
  },
  { key: "tyres", icon: "🛞", title: "Tyres", desc: "Puncture & replacement" },
  { key: "brakes", icon: "🛑", title: "Brakes", desc: "Brake system repair" },
];

const MechanicProfile = () => {
  const { user } = useAuth();
  const initial = user?.name?.charAt(0).toUpperCase() || "J";

  const [form, setForm] = useState({
    name: user?.name || "John Mechanic",
    email: user?.email || "mechanic@example.com",
    phone: "+91 9876543210",
    address: "Rajkot, Gujarat",
    dob: "",
  });
  const [selectedSpec, setSelectedSpec] = useState(["engine"]);
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const toggleSpec = (key) => {
    setSelectedSpec((prev) =>
      prev.includes(key) ? prev.filter((s) => s !== key) : [...prev, key],
    );
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          👤 Mechanic Profile
        </h2>
        <p className="text-gray-400 text-sm mt-1">
          Manage your professional details and account settings
        </p>
      </div>

      {saved && (
        <div className="bg-green-900 border border-green-700 text-green-300 text-sm px-4 py-3 rounded-lg mb-4">
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
            style={{ border: "3px solid #22c55e" }}
          >
            {initial}
          </div>
          <p className="text-white font-semibold">{form.name}</p>
          <span
            className="px-4 py-1 rounded-full text-white text-xs font-semibold"
            style={{ background: "#3b82f6" }}
          >
            Mechanic
          </span>
        </div>

        {/* Form */}
        <div
          className="md:col-span-2 rounded-2xl p-6"
          style={{ background: "#1e293b" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {[
              { label: "Full Name", name: "name", type: "text" },
              { label: "Email Address", name: "email", type: "email" },
              { label: "Phone Number", name: "phone", type: "text" },
              { label: "Address", name: "address", type: "text" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-gray-400 text-xs mb-1 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={form[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                  style={{
                    background: "#0f172a",
                    border: "1px solid #334155",
                  }}
                />
              </div>
            ))}

            <div className="md:col-span-2">
              <label className="text-gray-400 text-xs mb-1 block">
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="w-full md:w-64 rounded-lg px-3 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                style={{
                  background: "#0f172a",
                  border: "1px solid #334155",
                }}
              />
            </div>
          </div>

          {/* Specialities */}
          <div className="mb-5">
            <p className="text-white text-sm font-semibold mb-1">
              Professional Expertise Specialties
            </p>
            <p className="text-gray-500 text-xs mb-3">
              Select your primary area of specialization
            </p>
            <div className="flex flex-wrap gap-3">
              {specialities.map((spec) => {
                const isSelected = selectedSpec.includes(spec.key);
                return (
                  <button
                    key={spec.key}
                    onClick={() => toggleSpec(spec.key)}
                    className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl text-sm transition-all"
                    style={{
                      background: isSelected ? "#134e4a" : "#0f172a",
                      border: isSelected
                        ? "1px solid #22c55e"
                        : "1px solid #334155",
                      color: isSelected ? "#6ee7b7" : "#94a3b8",
                      minWidth: "90px",
                    }}
                  >
                    <span className="text-xl">{spec.icon}</span>
                    <span className="font-semibold text-xs">{spec.title}</span>
                    <span
                      className="text-xs text-center leading-tight"
                      style={{ color: isSelected ? "#a7f3d0" : "#64748b" }}
                    >
                      {spec.desc}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={handleSave}
            className="px-6 py-2.5 rounded-lg text-white text-sm font-semibold transition-colors"
            style={{ background: "#3b82f6" }}
            onMouseEnter={(e) => (e.target.style.background = "#2563eb")}
            onMouseLeave={(e) => (e.target.style.background = "#3b82f6")}
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MechanicProfile;
