const team = [
  {
    name: "Disha Rudakiya",
    role: "Founder & CEO",
    img: "/images/my_photo.jpg",
    initial: "D",
  },
  {
    name: "Anand Raythatha",
    role: "Operations Head",
    img: "/images/anand.jpg",
    initial: "A",
  },
  {
    name: "Martin Patel",
    role: "Technical Lead",
    img: "/images/martin.jpeg",
    initial: "M",
  },
];

const features = [
  "24/7 Instant Support",
  "Verified Mechanics",
  "Nationwide Coverage",
  "Transparent Pricing",
];

const stats = [
  { number: "50,000+", label: "Drivers Helped" },
  { number: "1,200+", label: "Partner Mechanics" },
  { number: "120+", label: "Cities Covered" },
  { number: "4.8 ★", label: "Average Rating" },
];

const TeamCard = ({ member }) => {
  const handleError = (e) => {
    e.target.style.display = "none";
    e.target.nextElementSibling.style.display = "flex";
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={member.img}
        alt={member.name}
        onError={handleError}
        className="w-32 h-32 rounded-full object-cover shadow-md mb-2"
      />
      {/* Fallback avatar */}
      <div
        className="w-32 h-32 rounded-full items-center justify-center text-white text-3xl font-bold mb-2 shadow-md"
        style={{
          display: "none",
          background: "#ff7a1a",
        }}
      >
        {member.initial}
      </div>
      <p className="font-semibold text-slate-800">{member.name}</p>
      <p className="text-sm text-gray-500">{member.role}</p>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="py-20 px-6 text-center" style={{ background: "#f4f6f9" }}>
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-800 mb-4">
          About SteadyFast
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-6">
          SteadyFast is a nationwide 24/7 roadside assistance platform
          connecting stranded drivers to verified mechanics in minutes.
        </p>

        <h4 className="font-bold text-xl text-slate-800 mt-8 mb-3">
          Our Mission
        </h4>
        <p className="text-gray-500 max-w-2xl mx-auto">
          To make every road safer by providing fast, reliable, and affordable
          roadside assistance anywhere.
        </p>

        {/* Why Choose */}
        <h4 className="font-bold text-xl text-slate-800 mt-12 mb-6">
          Why Choose SteadyFast?
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-white rounded-xl px-5 py-4 font-medium text-slate-700 shadow-sm hover:-translate-y-1 transition-transform text-sm"
            >
              {f}
            </div>
          ))}
        </div>

        {/* Stats — blue like ASP.NET */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-14">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="text-3xl font-bold" style={{ color: "#2563eb" }}>
                {s.number}
              </p>
              <p className="text-sm text-gray-500 mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="mt-20">
          <h4 className="font-bold text-xl text-slate-800 mb-10">
            Meet Our Team
          </h4>
          <div className="flex flex-wrap justify-center gap-12">
            {team.map((member, i) => (
              <TeamCard key={i} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
