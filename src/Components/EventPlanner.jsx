import React, { useState, useEffect } from 'react';
import './EventPlanner.css';
import EventClock from './EventClock';

const EventPlanner = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const testimonials = [
    {
      text: "Event Planner made organizing my wedding a breeze. Highly recommended!",
      author: "Emily Johnson",
      role: "Bride"
    },
    {
      text: "I use Event Planner for all my corporate events. It saves me so much time and effort!",
      author: "John Smith",
      role: "Event Manager"
    },
    {
      text: "The customizable templates saved our team countless hours of planning for our annual conference.",
      author: "Sarah Davis",
      role: "Marketing Director"
    }
  ];

  const eventCategories = [
    {
      title: "Social Events",
      items: [
        "Birthday parties",
        "Anniversary celebrations",
        "Wedding receptions",
        "Baby showers",
        "Graduation parties",
        "Family reunions"
      ],
      icon: "🎉"
    },
    {
      title: "Entertainment Events",
      items: [
        "Concerts",
        "Music festivals",
        "Film screenings",
        "Comedy shows",
        "Art exhibitions",
        "Cultural events"
      ],
      icon: "🎭"
    },
    {
      title: "Community Events",
      items: [
        "Fundraising events",
        "Charity galas",
        "Volunteer drives",
        "Neighborhood block parties",
        "Community festivals",
        "Cultural celebrations"
      ],
      icon: "🤝"
    }
  ];

  const features = [
    {
      title: "Easy event creation",
      description: "Create and manage events in minutes with our intuitive interface",
      icon: "✏️"
    },
    {
      title: "Customizable templates",
      description: "Choose from dozens of templates or create your own from scratch",
      icon: "📝"
    },
    {
      title: "Guest list management",
      description: "Effortlessly manage invitations, RSVPs, and attendee information",
      icon: "👥"
    },
    {
      title: "Real-time collaboration",
      description: "Work together with your team in real-time for seamless planning",
      icon: "🔄"
    },
    {
      title: "Reminders & notifications",
      description: "Never miss a deadline with automated reminders and notifications",
      icon: "🔔"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send the form data to your backend here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="event-planner">
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">📅</span>
          <span className="logo-text">EventPlanner</span>
        </div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#features" onClick={() => setIsMenuOpen(false)}>Features</a></li>
          <li><a href="#categories" onClick={() => setIsMenuOpen(false)}>Categories</a></li>
          <li><a href="#gallery" onClick={() => setIsMenuOpen(false)}>Gallery</a></li>
          <li><a href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <header id="home" className="hero-section">
      <div className="hero-content">
  <EventClock />
  <h1 className="title">Plan Your Perfect Event</h1>
  <p className="subtitle">From birthdays to corporate meetings, we've got you covered</p>
  <button className="cta-button">Get Started</button>
</div>
        <div className="wave-container">
          <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#ffffff" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,165.3C672,171,768,213,864,218.7C960,224,1056,192,1152,170.7C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </header>

      <section id="features" className="features-section">
        <div className="section-header">
          <h2>Powerful Features</h2>
          <p>Everything you need to create successful events</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="categories" className="categories-section">
        <div className="section-header">
          <h2>Event Categories</h2>
          <p>We support a wide range of events for any occasion</p>
        </div>
        <div className="categories-container">
          {eventCategories.map((category, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{category.icon}</div>
              <h3>{category.title}</h3>
              <ul>
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="gallery" className="gallery-section">
        <div className="section-header">
          <h2>Event Gallery</h2>
          <p>See what we've helped create</p>
        </div>
        <div className="gallery-grid">
          {[1, 2, 3, 4, 5].map(num => (
            <div className="gallery-item" key={num}>
              <img src={`/img${num}.jpg`} alt={`Event ${num}`} />
              <div className="gallery-overlay">
                <span>View Event</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="testimonials" className="testimonials-section">
        <div className="section-header">
          <h2>Client Testimonials</h2>
          <p>What our customers are saying</p>
        </div>
        <div className="testimonials-slider">
          <div className="testimonials-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div className="testimonial-card" key={index}>
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="testimonial-indicators">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${activeTestimonial === index ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <p>Have questions about our services? Reach out to our team.</p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <p>info@eventplanner.com</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <p>+1 (555) 123-4567</p>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <p>123 Event St, Planning City</p>
              </div>
            </div>
          </div>
          <div className="contact-form-container">
            {isSubmitted ? (
              <div className="form-success">
                <span className="success-icon">✅</span>
                <h3>Thank you!</h3>
                <p>Your message has been sent successfully.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <span className="logo-icon">📅</span>
            <span className="logo-text">EventPlanner</span>
          </div>
          <div className="footer-links">
            <div className="footer-column">
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><a href="#social">Social Events</a></li>
                <li><a href="#corporate">Corporate Events</a></li>
                <li><a href="#weddings">Weddings</a></li>
                <li><a href="#concerts">Concerts</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h4>Resources</h4>
              <ul>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#guides">Planning Guides</a></li>
                <li><a href="#templates">Templates</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} EventPlanner. All rights reserved.</p>
          <div className="social-links">
            <a href="#facebook" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      <a href="#home" className="scroll-to-top">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      </a>
    </div>
  );
};

export default EventPlanner;