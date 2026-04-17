import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Tips", path: "/tips" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="text-white px-6 py-3"
      style={{
        background: "linear-gradient(90deg, #0d1b2a, #1b263b)",
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-semibold text-white">
          SteadyFast
        </Link>

        {/* Desktop Nav Links — center */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className="text-sm font-medium transition-colors relative pb-1"
                style={{
                  color: isActive ? "#ff7a1a" : "#ffffff",
                }}
              >
                {link.name}
                {isActive && (
                  <span
                    className="absolute bottom-0 left-0 w-full h-0.5"
                    style={{ background: "#ff7a1a" }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm font-medium transition-colors"
            style={{ color: "#ff7a1a" }}
          >
            Login
          </Link>
          <Link
            to="/register"
            className="text-sm font-medium text-white px-4 py-2 rounded-md transition-colors"
            style={{ background: "#ff7a1a" }}
            onMouseEnter={(e) => (e.target.style.background = "#e66a00")}
            onMouseLeave={(e) => (e.target.style.background = "#ff7a1a")}
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 bg-white transition-all duration-300"
            style={{
              transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="md:hidden mt-3 pb-4 flex flex-col gap-3 px-2"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "12px",
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium py-2 px-3 rounded-lg transition-colors"
                style={{
                  color: isActive ? "#ff7a1a" : "#ffffff",
                  background: isActive ? "rgba(255,122,26,0.1)" : "transparent",
                }}
              >
                {link.name}
              </Link>
            );
          })}

          {/* Mobile Auth */}
          <div className="flex gap-3 mt-2 px-3">
            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-sm font-medium py-2 rounded-lg border transition-colors"
              style={{
                color: "#ff7a1a",
                borderColor: "#ff7a1a",
              }}
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setMenuOpen(false)}
              className="flex-1 text-center text-sm font-medium py-2 rounded-lg text-white transition-colors"
              style={{ background: "#ff7a1a" }}
            >
              Sign up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
