import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SetLocation = () => {
  const navigate = useNavigate();
  const [detected, setDetected] = useState("");
  const [detecting, setDetecting] = useState(false);
  const [manual, setManual] = useState({
    city: "",
    state: "",
    area: "",
    pincode: "",
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");

  const handleDetect = () => {
    setDetecting(true);
    setError("");
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setDetecting(false);
      return;
    }
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
          );
          const data = await res.json();
          const address = data.display_name || `${latitude}, ${longitude}`;
          setDetected(address);
        } catch {
          setDetected(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        }
        setDetecting(false);
      },
      () => {
        setError("Could not detect location. Please allow location access.");
        setDetecting(false);
      },
    );
  };

  const handleSave = () => {
    if (!detected && !manual.city) {
      setError("Please detect or enter your location first");
      return;
    }
    setSaved(true);
    setTimeout(() => {
      navigate("/client/mechanics");
    }, 1200);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm p-6">
        {/* Title */}
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xl">📍</span>
          <h3 className="text-xl font-bold text-slate-800">
            Set Your Location
          </h3>
        </div>
        <p className="text-gray-500 text-sm mb-6">
          Choose your current location or enter manually
        </p>

        {/* Detect Button */}
        <button
          onClick={handleDetect}
          disabled={detecting}
          className="w-full py-3 rounded-lg text-white font-semibold text-sm mb-4 transition-colors flex items-center justify-center gap-2"
          style={{
            background: detecting ? "#93c5fd" : "#3b82f6",
          }}
        >
          📍 {detecting ? "Detecting..." : "Use Current Location"}
        </button>

        {/* Detected Result */}
        <div className="mb-5">
          <p className="text-sm text-slate-600 font-medium mb-1">
            Detected Location
          </p>
          <div className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm text-gray-500 bg-gray-50 min-h-10">
            {detected || "Your location will appear here"}
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        {saved && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg mb-4">
            ✅ Location saved! Redirecting to mechanics...
          </div>
        )}

        {/* Manual Entry */}
        <div className="mb-5">
          <p className="text-sm font-semibold text-slate-700 mb-3">
            Enter Address Manually
          </p>
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="City"
              value={manual.city}
              onChange={(e) => setManual({ ...manual, city: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="State"
              value={manual.state}
              onChange={(e) => setManual({ ...manual, state: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Area / Street"
              value={manual.area}
              onChange={(e) => setManual({ ...manual, area: e.target.value })}
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400"
            />
            <input
              type="text"
              placeholder="Pincode"
              value={manual.pincode}
              onChange={(e) =>
                setManual({ ...manual, pincode: e.target.value })
              }
              className="border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-slate-700 focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* Save Button */}
        <button
          onClick={handleSave}
          className="w-full py-3 rounded-lg text-white font-semibold text-sm transition-colors"
          style={{ background: "#dc2626" }}
          onMouseEnter={(e) => (e.target.style.background = "#b91c1c")}
          onMouseLeave={(e) => (e.target.style.background = "#dc2626")}
        >
          Save Location
        </button>
      </div>
    </div>
  );
};

export default SetLocation;
