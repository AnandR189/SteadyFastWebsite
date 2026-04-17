import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      if (form.email === "client@test.com" && form.password === "123456") {
        login(
          { name: "Jane Client", email: form.email, role: "client" },
          "dummy-token-client",
        );
        navigate("/client/home");
      } else if (
        form.email === "mechanic@test.com" &&
        form.password === "123456"
      ) {
        login(
          { name: "John Mechanic", email: form.email, role: "mechanic" },
          "dummy-token-mechanic",
        );
        navigate("/mechanic/dashboard");
      } else if (
        form.email === "admin@test.com" &&
        form.password === "123456"
      ) {
        login(
          { name: "Admin User", email: form.email, role: "admin" },
          "dummy-token-admin",
        );
        navigate("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
      setLoading(false);
    }, 800);
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12"
      style={{ background: "#eef1f5" }}
    >
      <div
        className="bg-white w-full max-w-md rounded-2xl shadow-md p-8"
        style={{ border: "2px solid #ff7a1a" }}
      >
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-semibold text-slate-800">SteadyFast</h3>
          {/* <p className="text-gray-500 text-sm mt-1">Welcome back!</p> */}
        </div>

        {error && (
          <div className="bg-red-50 border border-red-300 text-red-600 text-sm px-4 py-3 rounded-lg mb-4">
            {error}
          </div>
        )}

        <div className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />

          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-slate-800 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all"
          />

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
              <input type="checkbox" className="accent-orange-500 w-4 h-4" />
              Remember me
            </label>
            <span className="text-gray-500 hover:text-orange-500 cursor-pointer text-xs">
              Forgot Password?
            </span>
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full text-white font-medium py-3 rounded-lg transition-colors mt-1"
            style={{
              background: loading ? "#fdba74" : "#ff7a1a",
              boxShadow: "0 4px 8px rgba(255,122,26,0.3)",
            }}
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <p className="text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>

        {/* Test hint */}
        <div className="mt-6 bg-gray-50 rounded-lg p-3 text-xs text-gray-400">
          <p className="font-medium text-gray-500 mb-1">Test logins:</p>
          <p>client@test.com / 123456</p>
          <p>mechanic@test.com / 123456</p>
          <p>admin@test.com / 123456</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
