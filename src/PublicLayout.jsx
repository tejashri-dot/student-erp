import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";


const PublicLayout = ({ children }) => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>




 {/* ================= INSIDE CSS ================= */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: Arial, sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 0 15px;
        }

        /* ===== Announcement Bar ===== */
        .announcement-bar {
          position: fixed;
          top: 0;
          width: 100%;
          background: #0a7c5c;
          color: #fff;
          overflow: hidden;
          z-index: 2000;
        }

        .announcement-scroll {
          display: flex;
          gap: 60px;
          white-space: nowrap;
          padding: 8px 0;
          animation: scrollText 20s linear infinite;
        }

        @keyframes scrollText {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(-100%);
          }
        }

        .announcement-item {
          font-size: 14px;
        }

        /* ===== Top Header ===== */
        .top-header {
          margin-top: 40px;
          background: #f5f5f5;
          font-size: 14px;
        }

        .top-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 0;
          flex-wrap: wrap;
        }

        .divider {
          margin: 0 8px;
          color: #999;
        }

        /* ===== Navbar ===== */
        .mainNav {
          position: sticky;
          top: 80px;
          background: #fff;
          border-bottom: 1px solid #ddd;
          z-index: 1500;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo img {
          height: 50px;
        }

        /* ===== Menu ===== */
        .nav-menu {
          list-style: none;
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .nav-menu li {
          position: relative;
        }

        .nav-menu li a {
          padding: 12px 6px;
          font-weight: 500;
          color: #333;
          display: block;
        }

        .nav-menu li a:hover {
          color: #0a7c5c;
        }

        /* ===== Dropdown ===== */
        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #ddd;
          min-width: 220px;
          list-style: none;
          z-index: 999;
        }

        .dropdown-menu li a {
          padding: 10px 14px;
          font-size: 14px;
        }

        .dropdown-menu li a:hover {
          background: #f2f2f2;
        }

        /* ===== Login Button ===== */
        .login-btn {
          background: #0a7c5c;
          color: #fff;
          padding: 8px 18px;
          border-radius: 4px;
          font-size: 14px;
        }

        .login-btn:hover {
          background: #086a4f;
        }

        /* ===== Mobile Menu ===== */
        .mobile-menu-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu-toggle span {
          display: block;
          width: 24px;
          height: 3px;
          background: #333;
          margin: 5px 0;
        }

        /* ===== FOOTER ===== */
.footer {
  background: linear-gradient(135deg, #0a7c5c, #064e3b);
  color: #e5e7eb;
  padding: 60px 0 20px;
  margin-top: 60px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 30px;
  margin-bottom: 30px;
}

.footer-info h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #ffffff;
}

.footer-info p {
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 8px;
  color: #d1fae5;
}

/* ===== FOOTER LINKS ===== */
.footer-links h4 {
  font-size: 16px;
  margin-bottom: 12px;
  color: #ffffff;
}

.footer-links ul {
  list-style: none;
}

.footer-links ul li {
  margin-bottom: 8px;
}

.footer-links ul li a {
  font-size: 14px;
  color: #d1fae5;
  transition: color 0.3s ease, padding-left 0.3s ease;
}

.footer-links ul li a:hover {
  color: #ffffff;
  padding-left: 6px;
}

/* ===== FOOTER BOTTOM ===== */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  padding-top: 15px;
  text-align: center;
  font-size: 13px;
  color: #d1fae5;
}

.footer-bottom p {
  margin: 4px 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
  .footer {
    padding: 50px 0 20px;
  }

  .footer-info h3 {
    text-align: center;
  }

  .footer-info p {
    text-align: center;
  }

  .footer-content {
    text-align: center;
  }
}
  .nav-link{
  display:flex;
  align-items:center;
  gap:4px;
}

.arrow{
  font-size:12px;
  transition:0.3s;
}

.dropdown:hover .arrow{
  transform:rotate(180deg);
}
      `}</style>


    
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
              <span>Email: patiltejashri064@example.com</span>
              <span className="divider">|</span>
              <span>Phone: +91 9529730330</span>
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
                src="/mnt/data/a_vector_style_logo_features_a_stylized_letter_r.pnghttps://chatgpt.com/c/69a166dc-6f6c-8320-b97a-7ebaec39c4cd"
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
             
                
                {/* ABOUT */}
<li
  className="dropdown"
  onMouseEnter={() => setActiveDropdown("about")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <Link to="/about" className="nav-link">
    About <span className="arrow">▾</span>
  </Link>

  {activeDropdown === "about" && (
    <ul className="dropdown-menu">
      <li>
        <Link to="/chairman-message">Message from Chairman</Link>
      </li>
      <li>
        <Link to="/principal-message">Message from Principal</Link>
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
                <Link to="/academic/program" className="nav-link">
    Academic <span className="arrow">▾</span>
  </Link>
                 {activeDropdown === "academic" && (
    <ul className="dropdown-menu">
      <li><Link to="/academic/program">Programs</Link></li>
      <li><Link to="/academic/curriculum">Curriculum</Link></li>
      <li><Link to="/academic/events">Events</Link></li>
      <li><Link to="/academic/announcements">Announcements</Link></li>
      <li><Link to="/academic/rules-regulations">Rules & Regulations</Link></li>
    </ul>
  )}
</li>
             
{/* ADMISSION */}
<li
  className="dropdown"
  onMouseEnter={() => setActiveDropdown("admission")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <Link to="/admission/procedure" className="nav-link">
    Admission <span className="arrow">▾</span>
  </Link>

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

            {/* FACILITIES */}
<li
  className="dropdown"
  onMouseEnter={() => setActiveDropdown("facilities")}
  onMouseLeave={() => setActiveDropdown(null)}
>
  <Link to="/facilities/transport" className="nav-link">
    Facilities <span className="arrow">▾</span>
  </Link>

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
            <div className="footer-links">
  <h4>Quick Links</h4>
  <ul>
    <li><Link to="/about">About Us</Link></li>
    <li><Link to="/admission/procedure">Admissions</Link></li>
    <li><Link to="/academic/program">Academics</Link></li>
    <li><Link to="/contact">Contact</Link></li>
  </ul>
</div>

<div className="footer-links">
  <h4>Useful</h4>
  <ul>
    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
    <li><Link to="/terms">Terms & Conditions</Link></li>
    <li><Link to="/faq">FAQ</Link></li>
  </ul>
</div>
            <div className="footer-info">
              <h3> School</h3>
              <p>
                City, Yerwala, Near ABC Square, Pune, Maharastra, India, 411001
              </p>
              <p>Email: mint.school@example.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© School ERP. All rights reserved.</p>
            <p>Designed with ❤️ by Revertech solution</p>
          </div>
        </div>
      </footer>
    </>
  );
  <Outlet/>
};

export default PublicLayout;
