
import { useState, useEffect } from 'react'
import styles from './Home.module.css'
import { Link } from "react-router-dom";


function Home() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
    'https://demo.instikit.com/storage/site/block/slider-image/slider1.webp',
    'https://demo.instikit.com/storage/site/block/slider-image/slider2.webp',
    'https://demo.instikit.com/storage/site/block/slider-image/slider3.webp',
    'https://demo.instikit.com/storage/site/block/slider-image/slider4.webp'
  ];

  const announcements = [
    "Parent-Teacher conference will be help next week.",
    "Get ready for our annual school fundraising event!",
    "We're thrilled to introduce several new extracurricular clubs for our students.",
    "Due to unforeseen circumstances, there has been a change in the upcoming exam schedule.",
    "We're thrilled to announce that our school library renovation has begun!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={styles.app}>


      {/* Top Announcement Bar */}
      <div className="announcement-bar">
        <div className="announcement-scroll">
          {[...announcements, ...announcements].map((announcement, index) => (
            <span key={index} className="announcement-item">{announcement}</span>
          ))}
        </div>
      </div>

      {/* Top Header */}
      <div className="top-header">
        <div className={styles.container}>

          <div className="top-header-content">
            <div className="contact-info">
              <span>Email: mint.school@example.com</span>
              <span className="divider">|</span>
              <span>Phone: +91 1234567890</span>
            </div>
            <div className="quick-links">
              <a href="#payment">Online Fee Payment</a>
              <span className="divider">|</span>
              <a href="#registration">Online Registration</a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.mainNav}>

        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <img src="https://demo.instikit.com/images/logo.png" alt="Mint School Logo" />
            </div>
            
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
              <li><a href="#home">Home</a></li>
              <li className="dropdown" onMouseEnter={() => setActiveDropdown('about')} onMouseLeave={() => setActiveDropdown(null)}>
                <Link to="/about">About</Link>

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
              <li className="dropdown" onMouseEnter={() => setActiveDropdown('academic')} onMouseLeave={() => setActiveDropdown(null)}>
                <a href="#academic">Academic</a>
                {activeDropdown === 'academic' && (
                  <ul className="dropdown-menu">
  <li>
    <Link to="/academic/programs">Programs</Link>
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
    <Link to="/academic/rules">Rules & Regulations</Link>
  </li>
</ul>
                )}
              </li>
              <li className="dropdown" onMouseEnter={() => setActiveDropdown('admission')} onMouseLeave={() => setActiveDropdown(null)}>
                <a href="#admission">Admission</a>
                {activeDropdown === 'admission' && (
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
              <li className="dropdown" onMouseEnter={() => setActiveDropdown('facilities')} onMouseLeave={() => setActiveDropdown(null)}>
                <a href="#facilities">Facilities</a>
                {activeDropdown === 'facilities' && (
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
              <li><a href="#news">News</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

            <a href="#login" className="login-btn">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <section className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
              <img src={slide} alt={`Slide ${index + 1}`} />
            </div>
          ))}
          <button className="slider-btn prev" onClick={prevSlide}>‹</button>
          <button className="slider-btn next" onClick={nextSlide}>›</button>
          <div className="slider-dots">
            {slides.map((_, index) => (
              <span key={index} className={`dot ${index === currentSlide ? 'active' : ''}`} onClick={() => setCurrentSlide(index)}></span>
            ))}
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="container">
          <h1>Welcome to Mint School</h1>
          <h2>Where Learning Meets Excellence</h2>
          <p>At Mint International School, we strive to create an inspiring environment that nurtures the intellectual, emotional, and social growth of every child. With our commitment to excellence, we blend modern teaching methodologies with state-of-the-art technology to empower students to thrive in a globalized world.</p>
          
          <blockquote>
            Education is the most powerful weapon which you can use to change the world.
          </blockquote>

          <div className="content-with-image">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block1.webp" alt="School Cover" />
            <div className="text-content">
              <p>At Mint International School, we strive to create an inspiring environment that nurtures the intellectual, emotional, and social growth of every child. With our commitment to excellence, we blend modern teaching methodologies with state-of-the-art technology to empower students to thrive in a globalized world. The school is located in the heart of the city, with easy access to public transportation and ample parking.</p>
              <p>It is a place where students can learn, grow, and thrive. All the facilities are designed to provide a safe and supportive environment for students to learn and grow. The school offers a wide range of extracurricular activities, including sports, music, art, and more, to help students develop their talents and interests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <div className="container">
          <h2>Why Choose Mint International School?</h2>
          
          <div className="features-grid">
            <div className="feature-item">
              <h3>Comprehensive Curriculum</h3>
              <p>Our curriculum is designed to foster creativity, critical thinking, and holistic development. We ensure every student is prepared to meet the challenges of tomorrow with confidence.</p>
            </div>
            
            <div className="feature-item">
              <h3>Modern Infrastructure</h3>
              <p>From spacious classrooms to well-equipped labs, Mint International School provides facilities that ensure a conducive learning environment for every student.</p>
            </div>
            
            <div className="feature-item">
              <h3>Smart Learning with InstiKit</h3>
              <p>We've partnered with InstiKit School ERP to streamline the school experience for students, parents, and teachers. InstiKit enables:</p>
              <ul>
                <li><strong>Efficient Communication:</strong> Stay updated on your child's progress with instant notifications and messaging.</li>
                <li><strong>Online Exams & Results:</strong> Conduct and access results seamlessly online.</li>
                <li><strong>Fee Management:</strong> Simplified online fee payments with complete transparency.</li>
                <li><strong>Attendance Tracking:</strong> Keep track of your child's attendance in real-time.</li>
              </ul>
            </div>
            
            <div className="feature-item">
              <h3>Dedicated Faculty</h3>
              <p>Our team of highly qualified educators focuses on unlocking each child's potential, ensuring personalized attention and guidance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Features */}
      <section className="smart-features">
        <div className="container">
          <div className="feature-block">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block1.webp" alt="Smart Communication" />
            <div className="feature-content">
              <h2>Smart Communication</h2>
              <h3>Stay Connected Anytime, Anywhere</h3>
              <p>Mint International School leverages InstiKit School ERP to enable seamless communication between parents, teachers, and students. Receive real-time updates on attendance, events, and academic progress through instant notifications and messaging. Stay informed and engaged with your child's education like never before.</p>
            </div>
          </div>

          <div className="feature-block reverse">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block2.webp" alt="Online Exam" />
            <div className="feature-content">
              <h2>Online Exam & Result</h2>
              <h3>Simplify the Assessment Process</h3>
              <p>Our advanced online exam platform allows students to take tests from anywhere with ease. Whether it's MCQs or mixed question types, the system ensures a smooth, time-bound experience. Once evaluated, results are published instantly, providing detailed insights to students and parents.</p>
            </div>
          </div>

          <div className="feature-block">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block3.webp" alt="Fee Management" />
            <div className="feature-content">
              <h2>Transparent Fee Management</h2>
              <h3>Hassle-Free Payments</h3>
              <p>Say goodbye to long queues and manual processes. With our user-friendly fee management system, parents can pay fees online securely and conveniently. The system also provides detailed records of payments and dues, ensuring complete transparency and peace of mind.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Opportunities Section */}
      <section className="opportunities">
        <div className="container">
          <h2>Discover a World of Opportunities</h2>
          <p>At Mint International School, we go beyond academics to offer:</p>
          <div className="opportunities-grid">
            <div className="opportunity-item">
              <strong>Extracurricular Activities:</strong> Sports, music, art, and more to unleash creativity.
            </div>
            <div className="opportunity-item">
              <strong>Skill Development Programs:</strong> Workshops and events that enhance problem-solving, leadership, and teamwork skills.
            </div>
            <div className="opportunity-item">
              <strong>Community Initiatives:</strong> Programs that instill empathy and social responsibility.
            </div>
          </div>
        </div>
      </section>

      {/* About School Section */}
      <section className="about-school">
        <div className="container">
          <h2>About the School</h2>
          <p className="subtitle">Know More About Mint School</p>
          
          <div className="about-grid">
            <div className="about-item">
              <h3>Our Vision</h3>
              <p>We aim to nurture young minds with knowledge, values, and creativity. Our vision is to create confident individuals who are ready to face future challenges with responsibility and compassion.</p>
            </div>
            
            <div className="about-item">
              <h3>Academic Excellence</h3>
              <p>With a well-structured curriculum, experienced faculty, and modern teaching methods, we ensure that every student achieves academic excellence while developing critical thinking skills.</p>
            </div>
            
            <div className="about-item">
              <h3>Beyond the Classroom</h3>
              <p>Learning at our school goes beyond textbooks. We encourage students to explore sports, arts, and cultural activities to build a balanced personality and discover their hidden talents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Info Section */}
      <section className="parent-info">
        <div className="container">
          <h2>Parent & Student Information</h2>
          <p className="subtitle">Things to consider before Admission</p>
          
          <div className="info-grid">
            <div className="info-item">
              <h3>Admissions</h3>
              <p>Our admission process is simple, transparent, and merit-based. Parents can apply online or visit the school office for guidance, and our team will assist at every step.</p>
            </div>
            
            <div className="info-item">
              <h3>Transport Facilities</h3>
              <p>We provide safe and reliable transport services with GPS-enabled buses and trained staff. Our routes are designed to cover major areas, ensuring convenience for families.</p>
            </div>
            
            <div className="info-item">
              <h3>Parent Involvement</h3>
              <p>We believe parents are partners in education. Regular meetings, workshops, and open communication channels help us work together for every child's growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-section" id="news">
        <div className="container">
          <h2>Latest News</h2>
          <p className="subtitle">Remain updated with the latest happenings and developments at Mint International School.</p>
          
          <div className="news-grid">
            <div className="news-card">
              <div className="news-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="News" />
              </div>
              <div className="news-content">
                <h3>School Annual Day Celebrated with Great Enthusiasm</h3>
                <p className="news-date">January 19, 2026 8:05 PM</p>
                <span className="news-category">General</span>
                <p>The much-awaited Annual Day program was held in the school auditorium with parents, teachers...</p>
                <span className="tag">#Future</span>
              </div>
            </div>
            
            <div className="news-card">
              <div className="news-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="News" />
              </div>
              <div className="news-content">
                <h3>Our School Wins District-Level Science Quiz Competition</h3>
                <p className="news-date">January 7, 2026 12:56 AM</p>
                <span className="news-category">General</span>
                <p>A team of three students from Class 9 represented our school at the inter-district science quiz...</p>
                <span className="tag">#Technology</span>
                <span className="tag">#Future</span>
                <span className="tag">#Success</span>
              </div>
            </div>
            
            <div className="news-card">
              <div className="news-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="News" />
              </div>
              <div className="news-content">
                <h3>School Organizes Tree Plantation Drive on Campus</h3>
                <p className="news-date">December 4, 2025 2:52 PM</p>
                <span className="news-category">General</span>
                <p>As part of its environmental awareness program, the school organized a tree plantation drive on...</p>
                <span className="tag">#Education</span>
                <span className="tag">#Future</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="events-section">
        <div className="container">
          <h2>Upcoming Events</h2>
          <p className="subtitle">Check out our upcoming events and activities designed to enrich the student experience.</p>
          
          <div className="events-grid">
            <div className="event-card">
              <div className="event-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Event" />
              </div>
              <div className="event-content">
                <h3>Art Exhibition and Auction</h3>
                <p className="event-date">February 13, 2026 8:30 PM - February 15, 2026</p>
                <p className="event-location">at School Auditorium</p>
                <span className="event-type">Annual Event</span>
                <p>Join us at our Art Exhibition and Auction, where students' artistic talents take center stage. View a stunning display of paintings, sculptures, and crafts created by our talented artists.</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Event" />
              </div>
              <div className="event-content">
                <h3>Sports Day Extravaganza</h3>
                <p className="event-date">February 11, 2026 7:30 PM - February 12, 2026</p>
                <p className="event-location">at School Open Ground</p>
                <span className="event-type">Annual Event</span>
                <p>Get ready for a day filled with athleticism and sportsmanship at our Sports Day Extravaganza. Students will compete in various sports and games, and families are invited to cheer them on.</p>
              </div>
            </div>
            
            <div className="event-card">
              <div className="event-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Event" />
              </div>
              <div className="event-content">
                <h3>School Talent Show</h3>
                <p className="event-date">February 9, 2026 - February 9, 2026</p>
                <p className="event-location">at Open Air Theatre</p>
                <span className="event-type">Activities</span>
                <p>Prepare to be amazed by the incredible talents of our students at the School Talent Show. Singing, dancing, magic, and more!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="announcements-section" id="announcements">
        <div className="container">
          <h2>Latest Announcements</h2>
          <p className="subtitle">Stay informed with the latest news and updates from Mint International School.</p>
          
          <div className="announcements-list">
            <div className="announcement-card">
              <h3>Parent-Teacher Conferences Next Week</h3>
              <p className="announcement-date">February 9, 2026 8:33 PM</p>
              <span className="announcement-type">Notice</span>
              <p>Parent-Teacher conference will be help next week.</p>
            </div>
            
            <div className="announcement-card">
              <h3>Upcoming School Fundraising Event</h3>
              <p className="announcement-date">February 9, 2026 8:33 PM</p>
              <span className="announcement-type">Circular</span>
              <p>Get ready for our annual school fundraising event!</p>
            </div>
            
            <div className="announcement-card">
              <h3>New Extracurricular Clubs Available</h3>
              <p className="announcement-date">February 9, 2026 8:33 PM</p>
              <span className="announcement-type">Notice</span>
              <p>We're thrilled to introduce several new extracurricular clubs for our students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Spaces */}
      <section className="learning-spaces">
        <div className="container">
          <div className="space-block">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block4.webp" alt="Learning Spaces" />
            <div className="space-content">
              <h2>Inspiring Learning Spaces</h2>
              <h3>Designed for Excellence</h3>
              <p>At Mint International School, we believe the right environment nurtures creativity and curiosity. Our state-of-the-art classrooms, well-equipped labs, and resourceful libraries provide students with the tools they need to explore, experiment, and excel.</p>
            </div>
          </div>

          <div className="space-block reverse">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block5.webp" alt="Beyond Classroom" />
            <div className="space-content">
              <h2>Beyond the Classroom</h2>
              <h3>Unleashing Every Student's Potential</h3>
              <p>Education is more than books and exams. That's why we offer a wide array of extracurricular activities, including sports, music, art, drama, and leadership programs. Our holistic approach ensures that every child discovers their unique talents.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="statistics">
        <div className="container">
          <h2>Key Statistics</h2>
          <p className="subtitle">Numbers that Matter</p>
          
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2500+</h3>
              <p>Students</p>
            </div>
            <div className="stat-item">
              <h3>150+</h3>
              <p>Employees</p>
            </div>
            <div className="stat-item">
              <h3>12</h3>
              <p>Departments</p>
            </div>
            <div className="stat-item">
              <h3>50+</h3>
              <p>Classes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section" id="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <p className="subtitle">Explore moments captured at Mint International School through our vibrant gallery.</p>
          
          <div className="gallery-grid">
            <div className="gallery-card">
              <div className="gallery-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Gallery" />
              </div>
              <div className="gallery-content">
                <h3>Investiture Ceremony</h3>
                <p className="gallery-date">January 9, 2026</p>
                <p>Odit quae corporis et rem doloremque sit corporis consequuntur.</p>
              </div>
            </div>
            
            <div className="gallery-card">
              <div className="gallery-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Gallery" />
              </div>
              <div className="gallery-content">
                <h3>Annual Event</h3>
                <p className="gallery-date">January 9, 2026</p>
                <p>Sed laborum ut nihil qui pariatur omnis neque quisquam et.</p>
              </div>
            </div>
            
            <div className="gallery-card">
              <div className="gallery-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Gallery" />
              </div>
              <div className="gallery-content">
                <h3>Graduation Ceremony</h3>
                <p className="gallery-date">January 9, 2026</p>
                <p>Sunt qui id corrupti non iure ipsam.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section" id="blog">
        <div className="container">
          <h2>Latest Blogs</h2>
          <p className="subtitle">Stay informed with the latest news and updates from Mint International School.</p>
          
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Blog" />
              </div>
              <div className="blog-content">
                <h3>The Future of Education: Embracing Technology in the Classroom</h3>
                <p className="blog-date">February 1, 2026 8:37 PM</p>
                <span className="blog-category">Education</span>
                <p>Technology is transforming the way students learn and teachers teach. From interactive...</p>
                <div className="blog-tags">
                  <span className="tag">#Education</span>
                  <span className="tag">#Technology</span>
                  <span className="tag">#Learning</span>
                </div>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Blog" />
              </div>
              <div className="blog-content">
                <h3>The Importance of Extracurricular Activities in Student Development</h3>
                <p className="blog-date">January 12, 2026 10:35 PM</p>
                <span className="blog-category">Education</span>
                <p>Academics are essential, but extracurricular activities play a vital role in shaping...</p>
                <div className="blog-tags">
                  <span className="tag">#Future</span>
                  <span className="tag">#Success</span>
                </div>
              </div>
            </div>
            
            <div className="blog-card">
              <div className="blog-image">
                <img src="https://demo.instikit.com/images/icon.png" alt="Blog" />
              </div>
              <div className="blog-content">
                <h3>How to Foster a Positive School Culture: Tips for Educators</h3>
                <p className="blog-date">January 1, 2026 10:28 AM</p>
                <span className="blog-category">Education</span>
                <p>A positive school culture is the cornerstone of student success. Explore actionable tips for...</p>
                <div className="blog-tags">
                  <span className="tag">#Technology</span>
                  <span className="tag">#Future</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="legacy-section">
        <div className="container">
          <h3>A Legacy of Excellence</h3>
          <p>Mint International School has a proud tradition of academic excellence, nurturing young minds to achieve their dreams. Our innovative approach combines rigorous academics with a supportive environment, empowering students to excel in their chosen fields. With a strong focus on character building and life skills, we have been shaping future leaders who make a positive impact on the world.</p>
        </div>
      </section>

      {/* Global Citizens */}
      <section className="global-citizens">
        <div className="container">
          <div className="citizen-block">
            <img src="https://demo.instikit.com/storage/site/block/assets/cover/block6.webp" alt="Global Citizens" />
            <div className="citizen-content">
              <h2>Nurturing Global Citizens</h2>
              <h3>Values for a Better Tomorrow</h3>
              <p>At Mint International School, we instill values that go beyond academics. Our focus on empathy, respect, and environmental responsibility prepares students to make meaningful contributions to society. Through cultural exchange programs, community service initiatives, and ethical education, we empower our students to embrace diversity and thrive as responsible global citizens.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join the Mint School Community</h2>
          <p>Join the Mint School Community where learning meets excellence and be part of the change.</p>
          <a href="#apply" className="cta-btn">Apply Now</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-info">
              <h3>Mint International School</h3>
              <p>City, Yerwala, Near ABC Square, Pune, Maharastra, India, 411001</p>
              <p>Email: mint.school@example.com</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© InstiKit School ERP. All rights reserved.</p>
            <p>Designed with ❤️ by ScriptMint</p>
          </div>
        </div>
      </footer>
     
    </div>
  )
}

export default Home
