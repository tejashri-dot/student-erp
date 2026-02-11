import React, { useState } from "react";
import { Link } from "react-router-dom";

const PublicLayout = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-scroll">
          {[
            "Parent-Teacher conference will be help next week.",
            "Get ready for our annual school fundraising event!",
            "We're thrilled to introduce several new extracurricular clubs for our students.",
            "Due to unforeseen circumstances, there has been a change in the upcoming exam schedule.",
            "We're thrilled to announce that our school library renovation has begun!",
          ].map((announcement, index) => (
            <span key={index} className="announcement-item">
              {announcement}
            </span>
          ))}
        </div>
      </div>

      {/* Top Header */}
      <div className="top-header">
        <div className="container">
          <div className="top-header-content">
            <div className="contact-info">
              <span>Email: mint.school@example.com</span>
              <span className="divider">|</span>
              <span>Phone: +91 1234567890</span>
            </div>
            <div className="quick-links">
              <Link to="/fee-payment">Online Fee Payment</Link>
              <span className="divider">|</span>
              <Link to="/online-registration">Online Registration</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="mainNav">
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img
                src="https://demo.instikit.com/images/logo.png"
                alt="Mint School Logo"
              />
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("about")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/about">About</Link>
                {activeDropdown === "about" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/chairman-message">Message from Chairman</Link>
                    </li>
                    <li>
                      <Link to="/principal-message">
                        Message from Principal
                      </Link>
                    </li>
                    <li>
                      <Link to="/vision-mission">Vision & Mission</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("academic")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/academic/program">Academic</Link>
                {activeDropdown === "academic" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/academic/program">Programs</Link>
                    </li>
                    <li>
                      <Link to="/academic/curriculum">Curriculum</Link>
                    </li>
                    <li>
                      <Link to="/academic/events">Events</Link>
                    </li>
                    <li>
                      <Link to="/academic/announcements">Announcements</Link>
                    </li>
                    <li>
                      <Link to="/academic/rules-regulations">
                        Rules & Regulations
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("admission")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/admission/procedure">Admission</Link>
                {activeDropdown === "admission" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/admission/procedure">Procedure</Link>
                    </li>
                    <li>
                      <Link to="/admission/form">Admission Form</Link>
                    </li>
                    <li>
                      <Link to="/admission/fee-structure">Fee Structure</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setActiveDropdown("facilities")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link to="/facilities/transport">Facilities</Link>
                {activeDropdown === "facilities" && (
                  <ul className="dropdown-menu">
                    <li>
                      <Link to="/facilities/transport">Transport</Link>
                    </li>
                    <li>
                      <Link to="/facilities/library">Library</Link>
                    </li>
                    <li>
                      <Link to="/facilities/sports">Sports</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

            <Link to="/login" className="login-btn">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Mint International School</h3>
              <p>
                City, Yerwala, Near ABC Square, Pune, Maharastra, India, 411001
              </p>
              <p>Email: mint.school@example.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© InstiKit School ERP. All rights reserved.</p>
            <p>Designed with ❤️ by ScriptMint</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PublicLayout;
