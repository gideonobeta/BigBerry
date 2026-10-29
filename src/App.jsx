import { useState } from 'react';
import './App.css'

const portalItems = [
  {
    className: 'card-fees',
    number: '01 / FAMILY',
    title: 'School fees',
    description: 'View fee information and continue to the payment portal.',
    link: 'Visit fees portal',
    href: '#school-fees',
    icon: 'fees',
  },
  {
    className: 'card-results',
    number: '02 / STUDENT',
    title: 'Result checking',
    description: 'Access academic results and follow your learning progress.',
    link: 'Check results',
    href: '#result-checking',
    icon: 'results',
  },
  {
    className: 'card-admission',
    number: '03 / APPLICANT',
    title: 'New intake',
    description: 'Find admission guidance and begin an application for your child.',
    link: 'Start an application',
    href: '#new-intake',
    icon: 'admission',
  },
  {
    className: 'card-staff',
    number: '04 / STAFF',
    title: 'Staff portal',
    description: 'Secure access for staff to school tools, updates, and resources.',
    link: 'Staff sign in',
    href: '#staff-portal',
    icon: 'staff',
  },
];

function PortalIcon({ name }) {
  const common = { viewBox: '0 0 48 48', 'aria-hidden': true };

  if (name === 'fees') {
    return (
      <svg {...common}>
        <rect x="9" y="7" width="30" height="34" rx="5" />
        <path d="M17 17h14M17 24h14M17 31h7M31 30v7m-4-3.5h8" />
      </svg>
    );
  }

  if (name === 'results') {
    return (
      <svg {...common}>
        <path d="M10 8h28v32H10zM17 16h14M17 23h5m5 0h4M17 30h14" />
        <circle cx="24" cy="23" r="2" />
      </svg>
    );
  }

  if (name === 'admission') {
    return (
      <svg {...common}>
        <circle cx="20" cy="16" r="7" />
        <path d="M7 39c1-8 5-12 13-12s12 4 13 12M36 16v14m-7-7h14" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <rect x="7" y="13" width="34" height="26" rx="4" />
      <path d="M17 13V9h14v4M7 23h34M20 23v4h8v-4" />
    </svg>
  );
}

function PortalCard({ item }) {
  return (
    <a className={`portal-card ${item.className}`} href={item.href}>
      <span className="card-index">{item.number}</span>
      <span className="portal-icon">
        <PortalIcon name={item.icon} />
      </span>
      <strong>{item.title}</strong>
      <p>{item.description}</p>
      <span className="card-link">
        {item.link}<b aria-hidden="true">↗</b>
      </span>
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <header className="site-header">
        <div className="container header-inner">
          <a
            className="brand"
            href="#home"
            aria-label="King Comprehensive College Abuja home"
          >
            <img src="/logo.svg" alt="" width="58" height="68" />
            <span className="brand-copy">
              <strong>King Comprehensive</strong>
              <small>College · Abuja</small>
            </span>
          </a>

          <nav
            className={`main-nav${menuOpen ? ' is-open' : ''}`}
            aria-label="Main navigation"
          >
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#learning" onClick={closeMenu}>Learning</a>
            <a href="#portals" onClick={closeMenu}>Portals</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </nav>

          <a className="header-cta" href="#portals">
            Access a portal <span aria-hidden="true">↗</span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-orb orb-one" />
          <div className="hero-orb orb-two" />

          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span /> A place to grow, a future to shape
              </p>

              <h1>
                Knowledge with purpose.
                <br />
                <em>Character for life.</em>
              </h1>

              <p className="hero-intro">
                Welcome to King Comprehensive College Abuja — where every learner
                is encouraged to think boldly, act with integrity, and reach their
                full potential.
              </p>

              <div className="hero-actions">
                <a className="button button-light" href="#admissions">
                  Explore admission <span aria-hidden="true">→</span>
                </a>
                <a className="text-link" href="#about">
                  Discover our school <span aria-hidden="true">↓</span>
                </a>
              </div>

              <div className="hero-note">
                <span className="note-mark">K</span>
                <span>
                  <strong>Learn with purpose</strong>
                  <small>Lead with confidence</small>
                </span>
              </div>
            </div>

            <div
              className="hero-art"
              aria-label="Illustration of a student reading beneath an arch"
            >
              <div className="art-frame">
                <div className="sun-disc" />
                <div className="arch" />
                <div className="book book-left" />
                <div className="book book-right" />
                <div className="student-head" />
                <div className="student-body" />
                <div className="plant plant-a"><i /><i /><i /></div>
                <div className="plant plant-b"><i /><i /><i /></div>
                <div className="art-caption">
                  <span>EST.</span>
                  <strong>Excellence<br />in every step</strong>
                </div>
              </div>
              <div className="art-tag">
                <span className="tag-dot" /> Abuja, Nigeria
              </div>
            </div>
          </div>

          <div className="hero-bottom">
            <span>01 / 04</span>
            <span className="bottom-line" />
            <span>Education for a brighter tomorrow</span>
          </div>
        </section>

        <section className="welcome section-pad" id="about">
          <div className="container welcome-grid">
            <div>
              <p className="eyebrow eyebrow-dark"><span /> Welcome to KCC</p>
              <h2>
                Every great future
                <br />
                starts <em>with a foundation.</em>
              </h2>
            </div>

            <div className="welcome-text">
              <p>
                At King Comprehensive College, we believe education is more than
                what happens in a classroom. It is the confidence to ask questions,
                the discipline to keep going, and the values to make a difference.
              </p>
              <a className="under-link" href="#learning">
                Get to know us <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>

          <div className="container value-row">
            <div>
              <span>01</span>
              <strong>Academic ambition</strong>
              <small>Curiosity that goes further</small>
            </div>
            <div>
              <span>02</span>
              <strong>Strong character</strong>
              <small>Respect, courage, integrity</small>
            </div>
            <div>
              <span>03</span>
              <strong>Shared community</strong>
              <small>Room for everyone to thrive</small>
            </div>
          </div>
        </section>

        <section className="learning section-pad" id="learning">
          <div className="container learning-grid">
            <div className="learning-image">
              <div className="image-shape">
                <div className="window-grid">
                  <i /><i /><i /><i />
                </div>
                <div className="desk" />
                <div className="desk-book" />
                <span className="image-label">A brighter way to learn</span>
              </div>
              <div className="image-stamp">
                KCC<br /><small>ABUJA</small>
              </div>
            </div>

            <div className="learning-copy">
              <p className="eyebrow eyebrow-dark"><span /> Learning at KCC</p>
              <h2>
                Prepared for
                <br />
                <em>what comes next.</em>
              </h2>
              <p>
                Our school brings thoughtful teaching, a supportive environment,
                and meaningful opportunities together. Students build the
                knowledge and confidence to make their next step count.
              </p>

              <div className="learning-points">
                <div>
                  <span className="point-icon">✳</span>
                  <span>
                    <strong>Purposeful teaching</strong>
                    <small>Lessons designed to inspire progress.</small>
                  </span>
                </div>
                <div>
                  <span className="point-icon">✳</span>
                  <span>
                    <strong>Whole-person growth</strong>
                    <small>Learning, wellbeing, and character in balance.</small>
                  </span>
                </div>
              </div>

              <a className="under-link" href="#contact">
                Learn about our approach <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="portals section-pad" id="portals">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span /> Your KCC online</p>
                <h2>
                  Everything you need,
                  <br />
                  <em>in one place.</em>
                </h2>
              </div>
              <p>
                Choose a portal to get started. Each space is designed to make
                school life simpler for students, families, applicants, and staff.
              </p>
            </div>

            <div className="portal-grid">
              {portalItems.map(item => (
                <PortalCard key={item.title} item={item} />
              ))}
            </div>

            <p className="portal-note">
              <span>i</span> Portal links can be connected to the school’s secure systems.
            </p>
          </div>
        </section>

        <section className="community section-pad">
          <div className="container community-panel">
            <div className="community-mark">
              <img
                src="/logo.svg"
                alt="King Comprehensive College crest"
                width="98"
                height="116"
              />
            </div>

            <div className="community-copy">
              <p className="eyebrow"><span /> The KCC community</p>
              <h2>
                Good things happen
                <br />
                when we <em>grow together.</em>
              </h2>
              <p>
                Whether you are joining our school or already part of it, we are
                glad you are here.
              </p>
            </div>

            <a className="button button-light" href="#contact">
              Get in touch <span aria-hidden="true">→</span>
            </a>
            <div className="community-spark" aria-hidden="true">✳</div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="container footer-main">
          <a className="brand footer-brand" href="#home">
            <img src="/logo.svg" alt="" width="58" height="68" />
            <span className="brand-copy">
              <strong>King Comprehensive</strong>
              <small>College · Abuja</small>
            </span>
          </a>

          <div className="footer-about">
            <p>Knowledge with purpose.<br />Character for life.</p>
            <small>A school community built on possibility.</small>
          </div>

          <div className="footer-nav">
            <strong>Explore</strong>
            <a href="#about">About the school</a>
            <a href="#learning">Learning at KCC</a>
            <a href="#admissions">Admissions</a>
          </div>

          <div className="footer-nav">
            <strong>Get in touch</strong>
            <span>Contact the school office</span>
            <span>Abuja, Nigeria</span>
            <a href="#portals">School portals</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} King Comprehensive College Abuja
          </span>
          <span>Learning with purpose, leading with care.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}