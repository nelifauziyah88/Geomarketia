"use client";

import Link from "next/link";
import Navbar from "../../components/user/NavbarSection";
import Footer from "../../components/user/FooterSection";

/* ─── tiny helpers ─────────────────────────────── */

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="gm-badge">
      <span className="gm-badge-dot" />
      {children}
    </span>
  );
}

function SectionTag({ children }: { children: React.ReactNode }) {
  return <p className="gm-section-tag">{children}</p>;
}

function GridBg() {
  return (
    <div
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "linear-gradient(rgba(26,86,219,0.055) 1px, transparent 1px), linear-gradient(90deg, rgba(26,86,219,0.055) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
        pointerEvents: "none",
      }}
    />
  );
}

/* ─── STAT STRIP ────────────────────────────────── */

const STATS = [
  { value: "50K+", label: "Businesses Analyzed" },
  { value: "120+", label: "Cities Covered" },
  { value: "98%", label: "Data Accuracy" },
  { value: "4.9★", label: "Average Rating" },
];

function StatStrip() {
  return (
    <div className="gm-stat-strip">
      {STATS.map((s) => (
        <div key={s.label} className="gm-stat-item">
          <span className="gm-stat-value">{s.value}</span>
          <span className="gm-stat-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

/* ─── HERO / INTRO ──────────────────────────────── */

function HeroAbout() {
  return (
    <section className="gm-hero-about">
      <GridBg />
      {/* blue glow top-right */}
      <div className="gm-glow gm-glow-tr" />
      <div className="gm-glow gm-glow-bl" />

      <div className="gm-container gm-hero-inner">
        {/* left */}
        <div className="gm-hero-text">
          <Badge>About GeoMarket Analytica</Badge>
          <h1 className="gm-h1">
            The Geospatial Intelligence<br />
            Platform for <span className="gm-accent">Smarter Markets</span>
          </h1>
          <p className="gm-lead">
            GeoMarket Analytica transforms raw location data into strategic
            business intelligence — helping companies find the right markets,
            outpace competitors, and make decisions rooted in geographic reality.
          </p>
          <div className="gm-hero-actions">
            <Link href="/analyze" className="gm-btn-primary">
              Explore the Platform
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 7h8M7 3l4 4-4 4" /></svg>
            </Link>
            <Link href="/contact" className="gm-btn-outline">
              Talk to Sales
            </Link>
          </div>
        </div>

        {/* right — mini map illustration */}
        <div className="gm-hero-visual">
          <div className="gm-map-card">
            <GridBg />
            {/* dashed route lines */}
            <svg className="gm-map-svg" viewBox="0 0 380 280">
              <line x1="110" y1="70"  x2="200" y2="140" stroke="#1A56DB" strokeWidth="1.2" strokeDasharray="5 4" opacity=".4"/>
              <line x1="200" y1="140" x2="290" y2="90"  stroke="#1A56DB" strokeWidth="1.2" strokeDasharray="5 4" opacity=".4"/>
              <line x1="200" y1="140" x2="160" y2="220" stroke="#1A56DB" strokeWidth="1.2" strokeDasharray="5 4" opacity=".4"/>
              <line x1="200" y1="140" x2="310" y2="200" stroke="#1A56DB" strokeWidth="1.2" strokeDasharray="5 4" opacity=".4"/>
            </svg>
            {/* pins */}
            {[
              { x: "28%", y: "24%", size: 26, color: "#1A56DB", delay: "0s" },
              { x: "52%", y: "48%", size: 22, color: "#2563EB", delay: "0.5s" },
              { x: "77%", y: "28%", size: 18, color: "#3B82F6", delay: "1s" },
              { x: "41%", y: "76%", size: 16, color: "#60A5FA", delay: "1.5s" },
              { x: "82%", y: "68%", size: 14, color: "#93C5FD", delay: "2s" },
            ].map((p, i) => (
              <span
                key={i}
                className="gm-pin"
                style={{ left: p.x, top: p.y, animationDelay: p.delay }}
              >
                <svg width={p.size} height={p.size * 1.35} viewBox="0 0 22 30" fill="none">
                  <path d="M11 0C4.925 0 0 4.925 0 11C0 19.25 11 30 11 30C11 30 22 19.25 22 11C22 4.925 17.075 0 11 0Z" fill={p.color} />
                  <circle cx="11" cy="11" r="4.5" fill="white" opacity=".9" />
                </svg>
                <span className="gm-pin-pulse" style={{ borderColor: p.color }} />
              </span>
            ))}
            {/* float chips */}
            <div className="gm-chip gm-chip-1">
              <span className="gm-chip-dot" style={{ background: "#22c55e" }} />
              High Potential Zone
            </div>
            <div className="gm-chip gm-chip-2">
              <span className="gm-chip-dot" style={{ background: "#1A56DB" }} />
              94.2 Location Score
            </div>
          </div>
        </div>
      </div>

      <StatStrip />
    </section>
  );
}

/* ─── MISSION ───────────────────────────────────── */

function Mission() {
  return (
    <section className="gm-section gm-section-alt">
      <div className="gm-container gm-two-col">
        <div className="gm-mission-text">
          <SectionTag>Our Mission</SectionTag>
          <h2 className="gm-h2">
            Turning Location Data into<br />
            <span className="gm-accent">Competitive Advantage</span>
          </h2>
          <p className="gm-body">
            Every business decision has a geographic dimension. We built
            GeoMarket Analytica to make that dimension accessible — combining
            satellite-grade geospatial datasets, real-time foot-traffic signals,
            and AI-powered analytics into one unified platform.
          </p>
          <p className="gm-body">
            Whether you're scouting the next store location, mapping competitor
            density, or evaluating city-level market potential, our tools give
            you the spatial clarity to act with confidence.
          </p>
          <div className="gm-check-list">
            {[
              "Real-time geospatial intelligence",
              "AI-driven competitor mapping",
              "City & regional market scoring",
              "Integrated demographic overlays",
            ].map((t) => (
              <div key={t} className="gm-check-row">
                <span className="gm-check-icon">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7l3.5 3.5L12 3" stroke="#1A56DB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>{t}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="gm-mission-visual">
          <div className="gm-score-card">
            <p className="gm-score-label">Overall Market Score</p>
            <p className="gm-score-num">94<span style={{ fontSize: 28, color: "#60A5FA" }}>.2</span></p>
            <div className="gm-score-bar-track">
              <div className="gm-score-bar-fill" style={{ width: "94%" }} />
            </div>
            <div className="gm-score-metrics">
              {[
                { name: "Foot Traffic", pct: 88 },
                { name: "Competitor Gap", pct: 76 },
                { name: "Demographics", pct: 95 },
                { name: "Growth Index", pct: 82 },
              ].map((m) => (
                <div key={m.name} className="gm-metric-row">
                  <span className="gm-metric-name">{m.name}</span>
                  <div className="gm-metric-track">
                    <div className="gm-metric-fill" style={{ width: `${m.pct}%` }} />
                  </div>
                  <span className="gm-metric-pct">{m.pct}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── SOLUTIONS ─────────────────────────────────── */

const SOLUTIONS = [
  {
    icon: "🏪",
    title: "Retail",
    desc: "Identify optimal store locations and analyze retail market trends with demographic precision.",
    tags: ["Foot Traffic", "Store Siting", "Trade Area"],
  },
  {
    icon: "🍽️",
    title: "Food & Beverage",
    desc: "Analyze and find strategic locations for F&B businesses based on demand signals and competition gaps.",
    tags: ["Demand Signals", "Competitor Gap", "Visibility Score"],
  },
  {
    icon: "🏥",
    title: "Healthcare",
    desc: "Optimize clinic and hospital placement using population health data and service-area modeling.",
    tags: ["Catchment Area", "Demographics", "Service Gap"],
  },
  {
    icon: "🏗️",
    title: "Real Estate",
    desc: "Evaluate land parcels and commercial zones with geospatial value indicators and growth forecasts.",
    tags: ["Parcel Analysis", "Growth Index", "Zoning"],
  },
  {
    icon: "🏦",
    title: "Financial Services",
    desc: "Map branch and ATM network coverage, understand economic zones, and spot underserved markets.",
    tags: ["Network Coverage", "Economic Zones", "Market Gap"],
  },
  {
    icon: "📦",
    title: "Logistics & Supply Chain",
    desc: "Optimize warehouse placement and last-mile delivery routes with real-time road and density data.",
    tags: ["Route Optimization", "Depot Siting", "Density Map"],
  },
];

function Solutions() {
  return (
    <section className="gm-section">
      <GridBg />
      <div className="gm-container">
        <div className="gm-section-header">
          <SectionTag>Solutions</SectionTag>
          <h2 className="gm-h2">Built for Every Industry</h2>
          <p className="gm-sub">
            GeoMarket Analytica powers location intelligence across verticals —
            each solution tailored to the unique spatial questions your sector demands.
          </p>
        </div>

        {/* Featured card + grid */}
        <div className="gm-solutions-layout">
          {/* big featured left */}
          <div className="gm-featured-card">
            <div className="gm-featured-inner">
              <GridBg />
              {/* isometric map icon */}
              <div className="gm-featured-iso">
                <div className="gm-iso-base" />
                <div className="gm-iso-pin">
                  <svg width="28" height="38" viewBox="0 0 22 30" fill="none">
                    <path d="M11 0C4.925 0 0 4.925 0 11C0 19.25 11 30 11 30C11 30 22 19.25 22 11C22 4.925 17.075 0 11 0Z" fill="white"/>
                    <circle cx="11" cy="11" r="5" fill="#1A56DB" opacity=".85"/>
                  </svg>
                </div>
                <div className="gm-iso-bar" style={{ height: 40, animationDelay: "0s" }} />
                <div className="gm-iso-bar" style={{ height: 58, animationDelay: "0.15s" }} />
                <div className="gm-iso-bar" style={{ height: 30, animationDelay: "0.3s" }} />
              </div>
              <div className="gm-featured-copy">
                <p className="gm-featured-eyebrow">Platform Capability</p>
                <h3 className="gm-featured-title">Geospatial Market Intelligence</h3>
                <p className="gm-featured-desc">
                  One unified platform to visualize market conditions, score locations,
                  track competitors, and forecast growth — all layered on an interactive
                  geospatial canvas.
                </p>
                <Link href="/solutions" className="gm-btn-primary" style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, padding: "9px 20px" }}>
                  See All Solutions
                  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 7h8M7 3l4 4-4 4"/></svg>
                </Link>
              </div>
            </div>
          </div>

          {/* right 2×2 grid */}
          <div className="gm-sol-grid">
            {SOLUTIONS.slice(0, 4).map((s) => (
              <div key={s.title} className="gm-sol-card">
                <div className="gm-sol-icon">{s.icon}</div>
                <h4 className="gm-sol-title">{s.title}</h4>
                <p className="gm-sol-desc">{s.desc}</p>
                <div className="gm-sol-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="gm-tag">{t}</span>
                  ))}
                </div>
                <Link href={`/solutions/${s.title.toLowerCase().replace(/ /g, "-")}`} className="gm-learn-more">
                  Learn more
                  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* bottom two cards */}
        <div className="gm-sol-bottom">
          {SOLUTIONS.slice(4).map((s) => (
            <div key={s.title} className="gm-sol-card gm-sol-card-wide">
              <div className="gm-sol-icon">{s.icon}</div>
              <div>
                <h4 className="gm-sol-title">{s.title}</h4>
                <p className="gm-sol-desc">{s.desc}</p>
                <div className="gm-sol-tags">
                  {s.tags.map((t) => (
                    <span key={t} className="gm-tag">{t}</span>
                  ))}
                </div>
              </div>
              <Link href={`/solutions/${s.title.toLowerCase().replace(/ /g, "-")}`} className="gm-learn-more" style={{ marginLeft: "auto", flexShrink: 0 }}>
                Learn more
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M2 6h8M6 2l4 4-4 4"/></svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ──────────────────────────────── */

const STEPS = [
  {
    num: "01",
    title: "Define Your Market Area",
    desc: "Draw or select a geographic boundary — city, district, radius, or custom polygon — to scope your analysis.",
  },
  {
    num: "02",
    title: "Ingest Geospatial Data",
    desc: "The platform layers foot-traffic, POI density, competitor locations, demographics, and economic indicators.",
  },
  {
    num: "03",
    title: "Score & Rank Locations",
    desc: "Our AI model generates a composite Location Score, ranking candidate sites by market opportunity.",
  },
  {
    num: "04",
    title: "Generate Strategic Insight",
    desc: "Export reports, share interactive maps, and integrate findings into your decision workflow.",
  },
];

function HowItWorks() {
  return (
    <section className="gm-section gm-section-alt">
      <div className="gm-container">
        <div className="gm-section-header">
          <SectionTag>How It Works</SectionTag>
          <h2 className="gm-h2">From Data to Decision in Four Steps</h2>
          <p className="gm-sub">
            A streamlined workflow designed for analysts, strategists, and operators alike.
          </p>
        </div>

        <div className="gm-steps">
          {STEPS.map((s, i) => (
            <div key={s.num} className="gm-step">
              <div className="gm-step-num">{s.num}</div>
              {i < STEPS.length - 1 && <div className="gm-step-connector" />}
              <h4 className="gm-step-title">{s.title}</h4>
              <p className="gm-step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CORE FEATURES ─────────────────────────────── */

const FEATURES = [
  { icon: "🗺️", title: "Interactive Map Canvas", desc: "Pan, zoom, and layer datasets on a responsive geospatial canvas with real-time rendering." },
  { icon: "📊", title: "Market Scoring Engine", desc: "Composite AI scoring across 12+ signals including traffic, competition, and demographics." },
  { icon: "🔍", title: "Competitor Radar", desc: "Detect, cluster, and benchmark competitors within any defined catchment area." },
  { icon: "📈", title: "Growth Forecasting", desc: "Project market growth trends using historical patterns and predictive modeling." },
  { icon: "🧩", title: "Data Integration API", desc: "Connect your own CRM, BI tools, or third-party datasets via our open REST API." },
  { icon: "📄", title: "Automated Reports", desc: "Generate branded PDF or interactive reports with one click, ready to share with stakeholders." },
];

function Features() {
  return (
    <section className="gm-section">
      <GridBg />
      <div className="gm-container">
        <div className="gm-section-header">
          <SectionTag>Core Features</SectionTag>
          <h2 className="gm-h2">Everything You Need to Analyze Markets</h2>
          <p className="gm-sub">
            Purpose-built tools that cover the full geospatial analytics workflow — from data ingestion to actionable output.
          </p>
        </div>
        <div className="gm-features-grid">
          {FEATURES.map((f) => (
            <div key={f.title} className="gm-feature-card">
              <div className="gm-feature-icon">{f.icon}</div>
              <h4 className="gm-feature-title">{f.title}</h4>
              <p className="gm-feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ──────────────────────────────── */

const TESTIMONIALS = [
  {
    quote: "GeoMarket Analytica cut our site-selection time from 3 months to 2 weeks. The Location Score alone is worth the subscription.",
    name: "Sarah Lim",
    role: "Head of Expansion, RetailCo Asia",
    avatar: "SL",
    color: "#1A56DB",
  },
  {
    quote: "The competitor radar feature revealed three underserved pockets in our city that we'd completely missed. We opened there — all three exceeded targets.",
    name: "David Tan",
    role: "Strategy Director, FreshChain F&B",
    avatar: "DT",
    color: "#2563EB",
  },
  {
    quote: "As a healthcare network operator, accurate catchment modeling is non-negotiable. This platform delivers it at a level no other tool has matched.",
    name: "Dr. Ayu Pratiwi",
    role: "Operations Lead, MedGroup",
    avatar: "AP",
    color: "#3B82F6",
  },
];

function Testimonials() {
  return (
    <section className="gm-section gm-section-alt">
      <div className="gm-container">
        <div className="gm-section-header">
          <SectionTag>Testimonials</SectionTag>
          <h2 className="gm-h2">Trusted by Industry Leaders</h2>
        </div>
        <div className="gm-testi-grid">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="gm-testi-card">
              <div className="gm-testi-quote">"</div>
              <p className="gm-testi-text">{t.quote}</p>
              <div className="gm-testi-author">
                <div className="gm-avatar" style={{ background: t.color }}>{t.avatar}</div>
                <div>
                  <p className="gm-author-name">{t.name}</p>
                  <p className="gm-author-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA BANNER ────────────────────────────────── */

function CtaBanner() {
  return (
    <section className="gm-cta-section">
      <div className="gm-glow gm-glow-cta" />
      <GridBg />
      <div className="gm-container gm-cta-inner">
        <div>
          <h2 className="gm-cta-title">Ready to Discover Your Best Markets?</h2>
          <p className="gm-cta-sub">
            Join thousands of businesses using location intelligence to make sharper, faster, more confident decisions.
          </p>
        </div>
        <div className="gm-cta-actions">
          <Link href="/analyze" className="gm-btn-primary gm-btn-lg">
            Get Started Free
            <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M3 7.5h9M8 3l4.5 4.5L8 12"/></svg>
          </Link>
          <Link href="/contact" className="gm-btn-ghost">
            Book a Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── PAGE ROOT ─────────────────────────────────── */

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <HeroAbout />
      <Mission />
      <Solutions />
      <HowItWorks />
      <Features />
      <Testimonials />
      <CtaBanner />
      <Footer />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:ital,wght@0,400;0,500;1,400&display=swap');

        /* ── reset / base ───────────────── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .gm-container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 40px;
          position: relative;
          z-index: 1;
        }

        /* ── typography ─────────────────── */
        .gm-h1 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(30px, 4.2vw, 52px);
          font-weight: 800;
          color: #0f172a;
          line-height: 1.12;
          letter-spacing: -0.03em;
          margin: 18px 0 20px;
        }
        .gm-h2 {
          font-family: 'Sora', sans-serif;
          font-size: clamp(24px, 3vw, 36px);
          font-weight: 700;
          color: #0f172a;
          line-height: 1.18;
          letter-spacing: -0.025em;
          margin: 10px 0 14px;
        }
        .gm-accent { color: #1A56DB; }
        .gm-lead {
          font-family: 'DM Sans', sans-serif;
          font-size: 16.5px;
          color: #475569;
          line-height: 1.75;
          max-width: 480px;
          margin-bottom: 32px;
        }
        .gm-body {
          font-family: 'DM Sans', sans-serif;
          font-size: 15.5px;
          color: #64748b;
          line-height: 1.75;
          margin-bottom: 14px;
        }
        .gm-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          color: #64748b;
          line-height: 1.7;
          max-width: 560px;
          margin: 0 auto;
        }

        /* ── badge ──────────────────────── */
        .gm-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 100px;
          padding: 5px 14px 5px 10px;
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 600;
          color: #1A56DB;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .gm-badge-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #1A56DB;
          box-shadow: 0 0 0 3px rgba(26,86,219,.18);
          animation: gmDotPulse 2s infinite;
        }
        @keyframes gmDotPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(26,86,219,.18); }
          50%      { box-shadow: 0 0 0 6px rgba(26,86,219,.06); }
        }

        .gm-section-tag {
          font-family: 'Sora', sans-serif;
          font-size: 11px;
          font-weight: 700;
          color: #1A56DB;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 4px;
        }

        /* ── buttons ────────────────────── */
        .gm-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #1A56DB;
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(26,86,219,.3);
          transition: background .2s, transform .15s, box-shadow .2s;
          letter-spacing: -0.01em;
        }
        .gm-btn-primary:hover {
          background: #1648C0;
          transform: translateY(-2px);
          box-shadow: 0 8px 28px rgba(26,86,219,.4);
        }
        .gm-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          color: #1A56DB;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 12px;
          border: 1.5px solid #BFDBFE;
          text-decoration: none;
          transition: border-color .2s, background .15s;
        }
        .gm-btn-outline:hover { border-color: #1A56DB; background: #EFF6FF; }

        .gm-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,.12);
          color: #fff;
          font-family: 'Sora', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 12px;
          border: 1.5px solid rgba(255,255,255,.3);
          text-decoration: none;
          transition: background .2s;
        }
        .gm-btn-ghost:hover { background: rgba(255,255,255,.2); }
        .gm-btn-lg { padding: 15px 32px; font-size: 15px; }

        /* ── glows ──────────────────────── */
        .gm-glow {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
        }
        .gm-glow-tr {
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(26,86,219,.12) 0%, transparent 65%);
          top: -200px; right: -160px;
        }
        .gm-glow-bl {
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(96,165,250,.1) 0%, transparent 70%);
          bottom: -120px; left: -80px;
        }
        .gm-glow-cta {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(59,130,246,.18) 0%, transparent 65%);
          top: 50%; left: 50%;
          transform: translate(-50%,-50%);
        }

        /* ── sections ───────────────────── */
        .gm-section {
          padding: 96px 0;
          background: #ffffff;
          position: relative;
          overflow: hidden;
        }
        .gm-section-alt {
          background: #f8faff;
        }
        .gm-section-header {
          text-align: center;
          margin-bottom: 56px;
        }

        /* ── HERO ABOUT ─────────────────── */
        .gm-hero-about {
          background: #ffffff;
          position: relative;
          overflow: hidden;
          padding: 96px 0 0;
        }
        .gm-hero-inner {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          padding-bottom: 72px;
        }
        .gm-hero-text {}
        .gm-hero-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        /* map card */
        .gm-hero-visual { display: flex; align-items: center; justify-content: center; }
        .gm-map-card {
          position: relative;
          width: 100%;
          max-width: 460px;
          height: 340px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          border-radius: 24px;
          overflow: hidden;
        }
        .gm-map-svg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
        }
        .gm-pin {
          position: absolute;
          display: flex;
          flex-direction: column;
          align-items: center;
          animation: gmFloat 3s ease-in-out infinite;
        }
        .gm-pin-pulse {
          position: absolute;
          bottom: -3px;
          width: 16px; height: 16px;
          border-radius: 50%;
          border: 1px solid;
          animation: gmPulse 2s infinite;
        }
        @keyframes gmFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        @keyframes gmPulse { 0%{transform:scale(.8);opacity:1} 100%{transform:scale(2.4);opacity:0} }

        .gm-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #BFDBFE;
          border-radius: 50px;
          padding: 6px 14px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #1e40af;
          box-shadow: 0 4px 14px rgba(26,86,219,.1);
        }
        .gm-chip-1 { bottom: 24px; left: 20px; animation: gmFloat 4s .3s ease-in-out infinite; }
        .gm-chip-2 { top: 20px;   right: 18px; animation: gmFloat 3.5s .8s ease-in-out infinite; }
        .gm-chip-dot { width: 8px; height: 8px; border-radius: 50%; }

        /* stat strip */
        .gm-stat-strip {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border-top: 1px solid #E2EEFF;
          position: relative;
          z-index: 1;
        }
        .gm-stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 28px 20px;
          border-right: 1px solid #E2EEFF;
        }
        .gm-stat-item:last-child { border-right: none; }
        .gm-stat-value {
          font-family: 'Sora', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #1A56DB;
          letter-spacing: -0.03em;
        }
        .gm-stat-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #64748b;
        }

        /* ── MISSION ────────────────────── */
        .gm-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px;
          align-items: center;
        }
        .gm-check-list { display: flex; flex-direction: column; gap: 10px; margin-top: 24px; }
        .gm-check-row {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px;
          color: #334155;
          font-weight: 500;
        }
        .gm-check-icon {
          width: 24px; height: 24px;
          border-radius: 8px;
          background: #EFF6FF;
          border: 1px solid #BFDBFE;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* score card */
        .gm-score-card {
          background: #ffffff;
          border: 1px solid #DBEAFE;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 8px 40px rgba(26,86,219,.08);
        }
        .gm-score-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: .07em;
          margin-bottom: 6px;
        }
        .gm-score-num {
          font-family: 'Sora', sans-serif;
          font-size: 56px;
          font-weight: 800;
          color: #1A56DB;
          letter-spacing: -0.04em;
          margin-bottom: 12px;
        }
        .gm-score-bar-track {
          height: 6px;
          background: #EFF6FF;
          border-radius: 10px;
          margin-bottom: 24px;
          overflow: hidden;
        }
        .gm-score-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #1A56DB, #60A5FA);
          border-radius: 10px;
          animation: gmBarGrow 1s ease both;
        }
        @keyframes gmBarGrow { from{width:0} }
        .gm-score-metrics { display: flex; flex-direction: column; gap: 12px; }
        .gm-metric-row { display: flex; align-items: center; gap: 10px; }
        .gm-metric-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #64748b;
          width: 120px;
          flex-shrink: 0;
        }
        .gm-metric-track {
          flex: 1;
          height: 5px;
          background: #EFF6FF;
          border-radius: 10px;
          overflow: hidden;
        }
        .gm-metric-fill {
          height: 100%;
          background: linear-gradient(90deg, #1A56DB, #93C5FD);
          border-radius: 10px;
          animation: gmBarGrow 1.2s ease both;
        }
        .gm-metric-pct {
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #1A56DB;
          width: 36px;
          text-align: right;
        }

        /* ── SOLUTIONS ──────────────────── */
        .gm-solutions-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        /* featured card */
        .gm-featured-card {
          border-radius: 20px;
          overflow: hidden;
          background: linear-gradient(160deg, #1A56DB 0%, #2563EB 60%, #3B82F6 100%);
          position: relative;
        }
        .gm-featured-inner {
          position: relative;
          height: 100%;
          min-height: 460px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 32px;
          overflow: hidden;
        }
        .gm-featured-iso {
          position: absolute;
          top: 32px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: flex-end;
          gap: 8px;
          filter: drop-shadow(0 8px 24px rgba(0,0,0,.2));
        }
        .gm-iso-base {
          position: absolute;
          bottom: -12px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px; height: 60px;
          background: rgba(255,255,255,.12);
          border-radius: 6px;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
        .gm-iso-pin {
          position: absolute;
          top: -48px; left: 50%;
          transform: translateX(-50%);
          animation: gmFloat 3s ease-in-out infinite;
        }
        .gm-iso-bar {
          width: 22px;
          background: rgba(255,255,255,.85);
          border-radius: 4px 4px 0 0;
          animation: gmBarRise 1s ease both;
        }
        @keyframes gmBarRise { from{transform:scaleY(0);transform-origin:bottom} to{transform:scaleY(1)} }

        .gm-featured-eyebrow {
          font-family: 'Sora', sans-serif;
          font-size: 10px;
          font-weight: 700;
          color: rgba(255,255,255,.6);
          text-transform: uppercase;
          letter-spacing: .1em;
          margin-bottom: 6px;
        }
        .gm-featured-title {
          font-family: 'Sora', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          letter-spacing: -0.02em;
        }
        .gm-featured-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: rgba(255,255,255,.75);
          line-height: 1.65;
        }

        /* sol grid */
        .gm-sol-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .gm-sol-card {
          background: #ffffff;
          border: 1px solid #E2EEFF;
          border-radius: 16px;
          padding: 24px;
          transition: border-color .2s, box-shadow .2s, transform .2s;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .gm-sol-card:hover {
          border-color: #93C5FD;
          box-shadow: 0 8px 32px rgba(26,86,219,.1);
          transform: translateY(-3px);
        }
        .gm-sol-card-wide {
          flex-direction: row;
          align-items: flex-start;
          gap: 18px;
        }
        .gm-sol-icon { font-size: 26px; line-height: 1; margin-bottom: 4px; }
        .gm-sol-title {
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #1A56DB;
          margin-bottom: 2px;
        }
        .gm-sol-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.6;
          flex: 1;
        }
        .gm-sol-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 8px; }
        .gm-tag {
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 500;
          background: #EFF6FF;
          color: #1A56DB;
          border: 1px solid #BFDBFE;
          border-radius: 100px;
          padding: 3px 9px;
        }
        .gm-learn-more {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 600;
          color: #1A56DB;
          text-decoration: none;
          margin-top: 10px;
          transition: gap .15s;
        }
        .gm-learn-more:hover { gap: 8px; }

        .gm-sol-bottom {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* ── HOW IT WORKS ───────────────── */
        .gm-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
          position: relative;
        }
        .gm-step {
          position: relative;
          padding-top: 16px;
        }
        .gm-step-num {
          font-family: 'Sora', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: #DBEAFE;
          line-height: 1;
          margin-bottom: 12px;
          letter-spacing: -0.03em;
        }
        .gm-step-connector {
          position: absolute;
          top: 32px;
          left: calc(100% - 12px);
          width: calc(100% - 12px);
          height: 1px;
          background: linear-gradient(90deg, #BFDBFE, transparent);
          pointer-events: none;
        }
        .gm-step-title {
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .gm-step-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 13.5px;
          color: #64748b;
          line-height: 1.65;
        }

        /* ── FEATURES ───────────────────── */
        .gm-features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .gm-feature-card {
          background: #ffffff;
          border: 1px solid #E2EEFF;
          border-radius: 16px;
          padding: 28px 24px;
          transition: border-color .2s, box-shadow .2s, transform .2s;
        }
        .gm-feature-card:hover {
          border-color: #93C5FD;
          box-shadow: 0 8px 28px rgba(26,86,219,.08);
          transform: translateY(-3px);
        }
        .gm-feature-icon { font-size: 30px; margin-bottom: 14px; }
        .gm-feature-title {
          font-family: 'Sora', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .gm-feature-desc {
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: #64748b;
          line-height: 1.65;
        }

        /* ── TESTIMONIALS ───────────────── */
        .gm-testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .gm-testi-card {
          background: #ffffff;
          border: 1px solid #E2EEFF;
          border-radius: 16px;
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: box-shadow .2s;
        }
        .gm-testi-card:hover { box-shadow: 0 8px 28px rgba(26,86,219,.08); }
        .gm-testi-quote {
          font-family: 'Sora', sans-serif;
          font-size: 48px;
          font-weight: 800;
          color: #DBEAFE;
          line-height: .8;
        }
        .gm-testi-text {
          font-family: 'DM Sans', sans-serif;
          font-style: italic;
          font-size: 14.5px;
          color: #475569;
          line-height: 1.7;
          flex: 1;
        }
        .gm-testi-author { display: flex; align-items: center; gap: 12px; }
        .gm-avatar {
          width: 40px; height: 40px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Sora', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
        }
        .gm-author-name {
          font-family: 'Sora', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #0f172a;
        }
        .gm-author-role {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #94a3b8;
          margin-top: 2px;
        }

        /* ── CTA ────────────────────────── */
        .gm-cta-section {
          background: linear-gradient(135deg, #0f172a 0%, #1e3a8a 60%, #1d4ed8 100%);
          padding: 96px 0;
          position: relative;
          overflow: hidden;
        }
        .gm-cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
        }
        .gm-cta-title {
          font-family: 'Sora', sans-serif;
          font-size: clamp(22px, 3vw, 34px);
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.025em;
          margin-bottom: 10px;
        }
        .gm-cta-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          color: rgba(255,255,255,.65);
          line-height: 1.7;
          max-width: 480px;
        }
        .gm-cta-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }

        /* ── responsive ─────────────────── */
        @media (max-width: 980px) {
          .gm-hero-inner, .gm-two-col {
            grid-template-columns: 1fr !important;
          }
          .gm-solutions-layout {
            grid-template-columns: 1fr !important;
          }
          .gm-sol-grid {
            grid-template-columns: 1fr 1fr;
          }
          .gm-steps {
            grid-template-columns: 1fr 1fr;
          }
          .gm-step-connector { display: none; }
          .gm-features-grid {
            grid-template-columns: 1fr 1fr;
          }
          .gm-testi-grid {
            grid-template-columns: 1fr;
          }
          .gm-stat-strip {
            grid-template-columns: 1fr 1fr;
          }
          .gm-stat-item:nth-child(2) { border-right: none; }
          .gm-cta-inner {
            flex-direction: column;
            text-align: center;
          }
        }
        @media (max-width: 600px) {
          .gm-container { padding: 0 20px; }
          .gm-sol-grid, .gm-sol-bottom, .gm-steps, .gm-features-grid {
            grid-template-columns: 1fr !important;
          }
          .gm-hero-actions, .gm-cta-actions { flex-direction: column; }
          .gm-sol-card-wide { flex-direction: column; }
          .gm-stat-strip { grid-template-columns: 1fr 1fr; }
        }
      `}</style>
    </>
  );
}