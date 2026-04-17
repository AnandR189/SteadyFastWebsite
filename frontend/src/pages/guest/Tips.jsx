const tips = [
  {
    icon: "🟡",
    iconColor: "text-yellow-400",
    title: "Flat Tyre",
    desc: "Move to a safe spot, use a jack to lift the car, and replace with a spare or call for assistance.",
  },
  {
    icon: "🔋",
    iconColor: "text-green-400",
    title: "Dead Battery",
    desc: "Try jump-starting with cables. If it still won't start, the battery might need replacement.",
  },
  {
    icon: "🌡️",
    iconColor: "text-red-400",
    title: "Engine Overheating",
    desc: "Pull over immediately, turn off the engine, and wait for it to cool before checking coolant levels.",
  },
  {
    icon: "⛽",
    iconColor: "text-red-400",
    title: "Out of Fuel",
    desc: "Avoid frequent low-fuel driving. If empty, call for fuel delivery or walk to the nearest station.",
  },
  {
    icon: "🛑",
    iconColor: "text-red-400",
    title: "Brake Failure",
    desc: "Downshift to use engine braking, pump the brakes rapidly, and use the parking brake gently.",
  },
  {
    icon: "⚙️",
    iconColor: "text-gray-300",
    title: "Engine Fault",
    desc: 'Stop driving if the "Check Engine" light is flashing. Get a professional diagnostic as soon as possible.',
  },
];

const TipsPage = () => {
  return (
    <div
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#1a1a2e", // fallback if image missing
      }}
    >
      {/* Dark overlay with blur */}
      <div
        className="absolute inset-0"
        style={{
          background: "rgba(0,0,0,0.65)",
          backdropFilter: "blur(4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-white text-center w-full px-6 py-16">
        <h2 className="text-4xl font-semibold mb-12">
          Roadside Troubleshooting Tips
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 text-left hover:-translate-y-2 transition-transform"
              style={{
                background: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div className={`text-5xl mb-5 ${tip.iconColor}`}>{tip.icon}</div>
              <h5 className="font-semibold text-xl mb-3 text-green-400">
                {tip.title}
              </h5>
              <p className="text-sm opacity-90 leading-relaxed">{tip.desc}</p>
              <a
                href="#"
                className="inline-block mt-5 italic text-white text-sm hover:underline"
              >
                Quick solution
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TipsPage;
