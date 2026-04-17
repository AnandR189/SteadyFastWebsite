const stats = [
  { label: "Average Rating", value: "4.6 ⭐", bg: "#1d4ed8", light: "#bfdbfe" },
  { label: "Total Reviews", value: "28", bg: "#166534", light: "#bbf7d0" },
  { label: "5 Star Ratings", value: "20", bg: "#b45309", light: "#fde68a" },
];

const reviews = [
  {
    name: "Rahul Sharma",
    service: "Car - Battery Issue",
    rating: 5,
    comment:
      "Very quick service! The mechanic arrived on time and fixed the issue professionally.",
  },
  {
    name: "Amit Patel",
    service: "Bike - Tyre Puncture",
    rating: 4,
    comment:
      "Good service, reasonable price. Slight delay but overall satisfied.",
  },
  {
    name: "Priya Mehta",
    service: "Truck - Engine Repair",
    rating: 5,
    comment:
      "Excellent work! Highly recommended mechanic for emergency repairs.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <span
        key={s}
        className="text-sm"
        style={{ color: s <= rating ? "#facc15" : "#374151" }}
      >
        ★
      </span>
    ))}
  </div>
);

const Reviews = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">Reviews</h2>
        <p className="text-gray-400 text-sm mt-1">Client Reviews</p>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl p-5" style={{ background: s.bg }}>
            <p className="text-xs font-medium mb-1" style={{ color: s.light }}>
              {s.label}
            </p>
            <p className="text-white text-2xl font-bold">{s.value}</p>
          </div>
        ))}
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="rounded-xl p-5"
            style={{ background: "#1e293b" }}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="text-white font-semibold text-sm">{r.name}</p>
                <p className="text-gray-500 text-xs mt-0.5">{r.service}</p>
              </div>
              <StarRating rating={r.rating} />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mt-3">
              {r.comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
