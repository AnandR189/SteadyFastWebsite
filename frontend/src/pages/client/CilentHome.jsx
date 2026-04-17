import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const vehicles = [
  { name: "Car", icon: "🚗" },
  { name: "Bike", icon: "🏍️" },
  { name: "Truck", icon: "🚛" },
  { name: "Bus", icon: "🚌" },
];

const problems = [
  "Flat Tyre",
  "Battery Dead",
  "Engine Overheat",
  "Out of Fuel",
  "Brake Failure",
  "Other",
];

const fuelTypes = ["Petrol", "Diesel", "Electric", "CNG"];

const problemImages = [
  "/images/problems/battery.jpg",
  "/images/problems/breakdown.jpg",
  "/images/problems/fuel.jpg",
  "/images/problems/glass.jpg",
  "/images/problems/oil.jpg",
  "/images/problems/truck_tyre.jpg",
  "/images/problems/tyre.jpg",
];
const allImages = [...problemImages, ...problemImages];

const ClientHome = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [selectedVehicle, setSelectedVehicle] = useState("Car");
  const [selectedProblem, setSelectedProblem] = useState("Battery Dead");
  const [vehicleDetails, setVehicleDetails] = useState({
    fuelType: "Petrol",
    brand: "",
    model: "",
  });

  const handleContinue = () => {
    if (!vehicleDetails.brand || !vehicleDetails.model) {
      alert("Please fill vehicle brand and model");
      return;
    }
    navigate("/client/location");
  };

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">SteadyFast</h2>
        <p className="text-gray-500 text-sm">24/7 Online Roadside Assistance</p>
        <p className="text-slate-700 text-sm mt-1">
          Welcome,{" "}
          <span className="text-blue-600 font-semibold">
            {user?.name || "Jane Client"}!
          </span>
        </p>
      </div>

      {/* Diagnosis Card */}
      <div className="bg-white rounded-2xl shadow-sm p-6 max-w-3xl mx-auto">
        <h4 className="font-bold text-slate-800 text-lg mb-5">
          Diagnosis & Assistance
        </h4>

        {/* Step 1 — Select Vehicle */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: "#3b82f6" }}
            >
              1
            </span>
            <p className="font-semibold text-slate-700">Select Vehicle</p>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {vehicles.map((v) => (
              <button
                key={v.name}
                onClick={() => setSelectedVehicle(v.name)}
                className="flex flex-col items-center gap-1 py-4 rounded-xl border-2 transition-all"
                style={{
                  borderColor:
                    selectedVehicle === v.name ? "#3b82f6" : "#e2e8f0",
                  background:
                    selectedVehicle === v.name ? "#eff6ff" : "#f8fafc",
                }}
              >
                <span className="text-3xl">{v.icon}</span>
                <span className="text-xs font-medium text-slate-700">
                  {v.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 2 — What's Wrong */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: "#3b82f6" }}
            >
              2
            </span>
            <p className="font-semibold text-slate-700">What's wrong?</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {problems.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedProblem(p)}
                className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all"
                style={{
                  background: selectedProblem === p ? "#3b82f6" : "transparent",
                  color: selectedProblem === p ? "#ffffff" : "#475569",
                  borderColor: selectedProblem === p ? "#3b82f6" : "#cbd5e1",
                }}
              >
                {p}
              </button>
            ))}
          </div>
        </div>

        {/* Step 3 — Vehicle Details */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span
              className="w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center"
              style={{ background: "#3b82f6" }}
            >
              3
            </span>
            <p className="font-semibold text-slate-700">Vehicle Details</p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <select
              value={vehicleDetails.fuelType}
              onChange={(e) =>
                setVehicleDetails({
                  ...vehicleDetails,
                  fuelType: e.target.value,
                })
              }
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 bg-white focus:outline-none focus:border-blue-400"
            >
              {fuelTypes.map((f) => (
                <option key={f}>{f}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Brand (e.g. Toyota)"
              value={vehicleDetails.brand}
              onChange={(e) =>
                setVehicleDetails({
                  ...vehicleDetails,
                  brand: e.target.value,
                })
              }
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Model (e.g. Corolla)"
              value={vehicleDetails.model}
              onChange={(e) =>
                setVehicleDetails({
                  ...vehicleDetails,
                  model: e.target.value,
                })
              }
              className="border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full py-3 rounded-xl text-white font-semibold text-sm transition-colors"
          style={{ background: "#dc2626" }}
          onMouseEnter={(e) => (e.target.style.background = "#b91c1c")}
          onMouseLeave={(e) => (e.target.style.background = "#dc2626")}
        >
          Continue to Pricing →
        </button>
      </div>

      {/* Common Problems Scroll */}
      <div className="mt-10">
        <h5 className="text-center font-semibold text-slate-700 mb-4">
          Common Problems
        </h5>
        <div className="overflow-hidden w-full">
          <div
            style={{
              display: "inline-flex",
              gap: "15px",
              animation: "scrollLeft 20s linear infinite",
              paddingLeft: "15px",
            }}
          >
            {allImages.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`problem-${i}`}
                style={{
                  width: "200px",
                  height: "130px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  flexShrink: 0,
                }}
              />
            ))}
          </div>
        </div>
        <style>{`
          @keyframes scrollLeft {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ClientHome;
