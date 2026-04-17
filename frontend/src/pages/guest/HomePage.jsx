import { Link } from "react-router-dom";

const vehicles = [
  { name: "Car", icon: "🚗", desc: "Diagnose and repair all car problems" },
  { name: "Bike", icon: "🏍️", desc: "Find best bike repair services nearby" },
  { name: "Bus", icon: "🚌", desc: "Commercial vehicle roadside support" },
];

const steps = [
  { icon: "🔍", title: "Search & Select", desc: "Find mechanics by location" },
  { icon: "📅", title: "Book a Service", desc: "Choose time & request help" },
  { icon: "📍", title: "Track Repair", desc: "Real-time updates" },
  { icon: "💳", title: "Pay & Rate", desc: "Secure pay and review" },
];

const problemImages = [
  "/images/problems/battery.jpg",
  "/images/problems/breakdown.jpg",
  "/images/problems/fuel.jpg",
  "/images/problems/glass.jpg",
  "/images/problems/oil.jpg",
  "/images/problems/truck_tyre.jpg",
  "/images/problems/tyre.jpg",
];

// duplicate for seamless infinite scroll
const allImages = [...problemImages, ...problemImages];

const HomePage = () => {
  return (
    <div style={{ background: "#f4f6f9" }} className="min-h-screen">
      {/* ── Hero Section ── */}
      <section className="py-16 px-6 text-center">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">SteadyFast</h2>
          <p className="text-gray-500 mb-1">
            24/7 Online Roadside Assistance, Let's get you back on the road
            fast!
          </p>
          <p className="font-semibold text-slate-700 mb-10">
            Tell us the problem and get solution in just 10 minutes.
          </p>

          {/* Vehicle Cards */}
          <div className="flex flex-wrap justify-center gap-6">
            {vehicles.map((v) => (
              <div
                key={v.name}
                className="rounded-2xl p-6 flex flex-col items-center gap-2 cursor-pointer hover:-translate-y-1 transition-transform shadow-sm"
                style={{
                  background: "#e9eef5",
                  width: "180px",
                }}
              >
                <span className="text-6xl">{v.icon}</span>
                <h6 className="font-semibold text-slate-800">{v.name}</h6>
                <small className="text-gray-500 text-xs text-center">
                  {v.desc}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-slate-800 mb-1">
            How SteadyFast Works
          </h3>
          <p className="text-gray-500 mb-8">Verified professionals near you</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {steps.map((step, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 flex flex-col items-center gap-2 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl">{step.icon}</span>
                <h6 className="font-semibold text-slate-800 text-sm">
                  {step.title}
                </h6>
                <small className="text-gray-500 text-xs text-center">
                  {step.desc}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Problems Auto Scroll ── */}
      <section className="py-10">
        <div className="max-w-5xl mx-auto text-center mb-8 px-6">
          <h3 className="text-2xl font-bold text-slate-800">
            Common Roadside Problems
          </h3>
        </div>

        {/* Scroll Track */}
        <div
          className="overflow-hidden w-full"
          style={{ whiteSpace: "nowrap" }}
        >
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
                  width: "220px",
                  height: "150px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  flexShrink: 0,
                  display: "inline-block",
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
      </section>
    </div>
  );
};

export default HomePage;
