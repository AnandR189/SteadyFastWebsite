const TrackingDashboard = () => {
  return (
    <div>
      {/* Status Banner */}
      <div
        className="w-full py-4 rounded-xl text-white text-center mb-6"
        style={{ background: '#166534' }}
      >
        <p className="font-semibold text-base flex items-center justify-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 inline-block animate-pulse" />
          Mechanic On The Way
        </p>
        <p className="text-green-200 text-xs mt-1">
          ETA: 14 Minutes • Distance: 3.4 KM
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

        {/* Mechanic Details */}
        <div
          className="rounded-xl p-5"
          style={{ background: '#1e293b' }}
        >
          <p className="text-blue-400 font-semibold text-sm mb-3 flex items-center gap-2">
            👤 Mechanic Details
          </p>
          <div className="text-gray-300 text-sm space-y-1.5">
            <p>Name: Rajesh Patel</p>
            <p>Phone: +91 9876543210</p>
            <p>Experience: 6 Years</p>
            <p>Current Location: Navrangpura</p>
            <p>Status: <span className="text-green-400 font-medium">On The Way</span></p>
          </div>
          <button
            className="mt-4 px-4 py-2 rounded-lg text-white text-xs font-semibold flex items-center gap-2 transition-colors"
            style={{ background: '#3b82f6' }}
            onMouseEnter={e => e.target.style.background = '#2563eb'}
            onMouseLeave={e => e.target.style.background = '#3b82f6'}
          >
            📞 Call Mechanic
          </button>
        </div>

        {/* Live Tracking */}
        <div
          className="rounded-xl p-5"
          style={{ background: '#1e293b' }}
        >
          <p className="text-orange-400 font-semibold text-sm mb-3 flex items-center gap-2">
            📍 Live Tracking
          </p>
          <div
            className="w-full rounded-lg flex items-center justify-center text-gray-500 text-sm"
            style={{
              height: '130px',
              background: '#0f172a',
            }}
          >
            Map Preview
          </div>
          {/* Progress Bar */}
          <div className="mt-3 w-full rounded-full h-2" style={{ background: '#0f172a' }}>
            <div
              className="h-2 rounded-full"
              style={{ width: '60%', background: '#22c55e' }}
            />
          </div>
        </div>

      </div>

      {/* Service Location */}
      <div
        className="rounded-xl p-5 mb-4"
        style={{ background: '#1e293b' }}
      >
        <p className="text-pink-400 font-semibold text-sm mb-2 flex items-center gap-2">
          🔧 Service Location
        </p>
        <p className="text-gray-300 text-sm">
          Satellite Road, Near Iscon Mall, Ahmedabad
        </p>
        <p className="text-gray-500 text-xs mt-1">Requested At: 4:35 PM</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Vehicle Problem */}
        <div
          className="rounded-xl p-5"
          style={{ background: '#1e293b' }}
        >
          <p className="text-blue-400 font-semibold text-sm mb-3 flex items-center gap-2">
            🚗 Vehicle Problem
          </p>
          <div className="text-gray-300 text-sm space-y-1.5">
            <p>Vehicle: Car</p>
            <p>Brand: Toyota Corolla</p>
            <p>Problem: Battery Dead</p>
          </div>
        </div>

        {/* Pricing Details */}
        <div
          className="rounded-xl p-5"
          style={{ background: '#1e293b' }}
        >
          <p className="text-orange-400 font-semibold text-sm mb-3 flex items-center gap-2">
            💰 Pricing Details
          </p>
          <div className="text-gray-300 text-sm space-y-1.5">
            <p>Visit Charge: ₹300</p>
            <p>Service Charge: ₹900</p>
            <p className="text-green-400 font-semibold text-base mt-2">
              Estimated Total: ₹1200
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TrackingDashboard