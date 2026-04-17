import { useState } from "react";
import { useNavigate } from "react-router-dom";

const dummyMechanics = [
  {
    id: 1,
    name: "Rahul Sharma",
    location: "Ahmedabad",
    speciality: "Engine, Battery",
    status: "Active",
    img: "/Images/approved.jpg",
    exp: "5 Years",
  },
  {
    id: 2,
    name: "Amit Patel",
    location: "Surat",
    speciality: "Tyre, Brake",
    status: "Offline",
    img: "/Images/anand.jpg",
    exp: "3 Years",
  },
  {
    id: 3,
    name: "Vikas Singh",
    location: "Rajkot",
    speciality: "Fuel, Electrical",
    status: "Active",
    img: "/Images/h.jpg",
    exp: "7 Years",
  },
  {
    id: 4,
    name: "Suresh Mehta",
    location: "Vadodara",
    speciality: "Engine, Oil",
    status: "Active",
    img: "/Images/approved.jpg",
    exp: "4 Years",
  },
  {
    id: 5,
    name: "Karan Dave",
    location: "Gandhinagar",
    speciality: "Tyre, Battery",
    status: "Active",
    img: "/Images/h.jpg",
    exp: "6 Years",
  },
  {
    id: 6,
    name: "Ravi Kumar",
    location: "Surat",
    speciality: "Brake, Electrical",
    status: "Offline",
    img: "/Images/anand.jpg",
    exp: "2 Years",
  },
];

const ReliableMechanics = () => {
  const navigate = useNavigate();
  const [assigned, setAssigned] = useState(null);

  const handleAssign = (mechanic) => {
    setAssigned(mechanic.id);
    setTimeout(() => {
      navigate("/client/dashboard");
    }, 1000);
  };

  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <span className="text-xl">🔧</span>
        <h3 className="text-2xl font-bold text-slate-800">Choose Mechanic</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyMechanics.map((m) => (
          <div
            key={m.id}
            className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={m.img}
                  alt={m.name}
                  className="w-12 h-12 rounded-full object-cover"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                <div
                  className="w-12 h-12 rounded-full items-center justify-center text-white font-bold text-lg"
                  style={{ display: "none", background: "#3b82f6" }}
                >
                  {m.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-slate-800 text-sm">
                    {m.name}
                  </p>
                </div>
              </div>
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{
                  background: m.status === "Active" ? "#dcfce7" : "#fee2e2",
                  color: m.status === "Active" ? "#166534" : "#991b1b",
                }}
              >
                {m.status}
              </span>
            </div>

            <div className="text-xs text-gray-500 flex flex-col gap-1 mb-3">
              <p>📍 {m.location}</p>
              <p>⚙️ {m.speciality}</p>
              <p>🏆 Experience: {m.exp}</p>
            </div>

            <button
              onClick={() => m.status === "Active" && handleAssign(m)}
              disabled={m.status !== "Active" || assigned === m.id}
              className="w-full py-2 rounded-lg text-white text-sm font-semibold transition-colors"
              style={{
                background:
                  assigned === m.id
                    ? "#22c55e"
                    : m.status !== "Active"
                      ? "#94a3b8"
                      : "#3b82f6",
                cursor: m.status !== "Active" ? "not-allowed" : "pointer",
              }}
            >
              {assigned === m.id
                ? "✅ Request Sent"
                : m.status !== "Active"
                  ? "Not Available"
                  : "View Details"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReliableMechanics;
