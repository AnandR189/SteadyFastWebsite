import { useState } from "react";

const dummyJobs = [
  {
    id: 1,
    client: "Rahul Sharma",
    vehicle: "Car",
    problem: "Battery Dead",
    location: "Rajkot",
    price: "₹1500",
  },
  {
    id: 2,
    client: "Amit Patel",
    vehicle: "Bike",
    problem: "Tyre Puncture",
    location: "Gondal Road",
    price: "₹300",
  },
  {
    id: 3,
    client: "Priya Mehta",
    vehicle: "Truck",
    problem: "Engine Issue",
    location: "Highway",
    price: "₹2500",
  },
  {
    id: 4,
    client: "Neha Shah",
    vehicle: "Car",
    problem: "Oil Leakage",
    location: "Surat",
    price: "₹800",
  },
  {
    id: 5,
    client: "Ravi Kumar",
    vehicle: "Bus",
    problem: "Brake Failure",
    location: "Vadodara",
    price: "₹3000",
  },
];

const AvailableJobs = () => {
  const [accepted, setAccepted] = useState([]);

  const handleAccept = (id) => {
    setAccepted((prev) => [...prev, id]);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-6">Available Jobs</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyJobs.map((job) => {
          const isAccepted = accepted.includes(job.id);
          return (
            <div
              key={job.id}
              className="rounded-xl p-5 flex flex-col gap-3"
              style={{ background: "#1e293b" }}
            >
              {/* Client Name */}
              <div className="flex items-center justify-between">
                <h5 className="text-white font-semibold">{job.client}</h5>
                <span
                  className="text-xs px-2 py-1 rounded-full font-medium"
                  style={{ background: "#134e4a", color: "#6ee7b7" }}
                >
                  New
                </span>
              </div>

              {/* Details */}
              <div className="flex flex-col gap-1.5 text-sm">
                <p className="text-gray-300">
                  <span className="text-gray-500">Vehicle: </span>
                  {job.vehicle}
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">Problem: </span>
                  {job.problem}
                </p>
                <p className="text-gray-300">
                  <span className="text-gray-500">📍 Location: </span>
                  <span style={{ color: "#f97316" }}>{job.location}</span>
                </p>
                <p className="font-bold text-lg" style={{ color: "#f97316" }}>
                  {job.price}
                </p>
              </div>

              {/* Accept Button */}
              <button
                onClick={() => !isAccepted && handleAccept(job.id)}
                disabled={isAccepted}
                className="w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-colors"
                style={{
                  background: isAccepted ? "#166534" : "#16a34a",
                  cursor: isAccepted ? "default" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isAccepted) e.target.style.background = "#15803d";
                }}
                onMouseLeave={(e) => {
                  if (!isAccepted) e.target.style.background = "#16a34a";
                }}
              >
                {isAccepted ? "✅ Job Accepted" : "Accept Job"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AvailableJobs;
