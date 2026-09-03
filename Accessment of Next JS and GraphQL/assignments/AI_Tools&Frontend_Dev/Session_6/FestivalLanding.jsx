import React, { useState, useEffect } from 'react';
import heroImg from './hero-image.png';

/**
 * TASK 4 & 5: FestivalLanding Component
 * Responsive BookMyShow + IPL vibe Nightlife Music Festival Ticketing Landing Page.
 */
export default function FestivalLanding() {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  // Task 3 Generated Content
  const headline = "ELECTRA FEST 2026: Feel The Sonic Energy!";
  const description = "Experience India's biggest nightlife music festival featuring world-class DJs, immersive laser lightshows, and non-stop beats. Book your early bird tickets now!";

  // Headliner Artists Data
  const artists = [
    { id: 1, name: 'Martin Garrix', genre: 'EDM / Progressive House', time: 'Day 1 • 9:00 PM', image: 'https://via.placeholder.com/200x200?text=Martin+Garrix' },
    { id: 2, name: 'Illenium', genre: 'Future Bass / Melodic', time: 'Day 2 • 8:30 PM', image: 'https://via.placeholder.com/200x200?text=Illenium' },
    { id: 3, name: 'Fisher', genre: 'Tech House', time: 'Day 2 • 10:00 PM', image: 'https://via.placeholder.com/200x200?text=Fisher' },
    { id: 4, name: 'Alan Walker', genre: 'Electro Pop', time: 'Day 3 • 9:30 PM', image: 'https://via.placeholder.com/200x200?text=Alan+Walker' }
  ];

  // Ticket Options Data
  const ticketTiers = [
    { id: 'ga_day', name: 'GA Single Day Pass', price: 2999, badge: 'General Access', features: ['Entry for 1 Day', 'Access to Main Stage', 'Food Court Access'] },
    { id: 'ga_pass', name: 'GA 3-Day Weekend Pass', price: 6999, badge: 'Popular ⭐', features: ['Full 3-Day Festival Access', 'Express Entry Lane', 'Official Festival Wristband'] },
    { id: 'vip_pass', name: 'VIP 3-Day Pass', price: 14999, badge: 'VIP Experience 👑', features: ['Elevated VIP Deck Access', 'Unlimited Free Beverages', 'Exclusive Merch Pack', 'VIP Parking'] }
  ];

  const handleSelectTicket = (tier) => {
    setSelectedTicket(tier);
    setCartCount(1);
  };

  return (
    <div style={styles.pageContainer}>
      
      {/* 1. Header Navigation Bar */}
      <nav style={styles.navbar}>
        <div style={styles.navBrand}>⚡ ELECTRA FEST</div>
        <div style={styles.navLinks}>
          <a href="#lineup" style={styles.navLink}>Lineup</a>
          <a href="#tickets" style={styles.navLink}>Tickets</a>
          <a href="#venue" style={styles.navLink}>Venue</a>
          <button style={styles.cartBtn}>
            🛒 Cart <span style={styles.cartBadge}>{cartCount}</span>
          </button>
        </div>
      </nav>

      {/* 2. TASK 5: Responsive Hero Section (CSS Grid / Flexbox) */}
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroContentGrid}>
          
          {/* Left Hero Content Column */}
          <div style={styles.heroTextCol}>
            <span style={styles.locationTag}>📍 July 12-14, 2026 • Mahalaxmi Racecourse, Mumbai</span>
            <h1 style={styles.heroHeadline}>{headline}</h1>
            <p style={styles.heroDescription}>{description}</p>
            
            <div style={styles.heroCtaRow}>
              <a href="#tickets" style={styles.primaryCta}>
                🎟️ Book Early Bird Tickets
              </a>
              <a href="#lineup" style={styles.secondaryCta}>
                Explore Lineup →
              </a>
            </div>
          </div>

          {/* Right Hero Live Countdown Box */}
          <div style={styles.heroCountdownCol}>
            <div style={styles.countdownCard}>
              <h3 style={{ color: '#00f2fe', margin: '0 0 12px 0' }}>🔥 Festival Starts In</h3>
              <div style={styles.timerGrid}>
                <div style={styles.timerBox}><span style={styles.timerNum}>42</span><span style={styles.timerLabel}>Days</span></div>
                <div style={styles.timerBox}><span style={styles.timerNum}>14</span><span style={styles.timerLabel}>Hours</span></div>
                <div style={styles.timerBox}><span style={styles.timerNum}>38</span><span style={styles.timerLabel}>Mins</span></div>
              </div>
              <p style={{ fontSize: '12px', color: '#a0a0a0', marginTop: '16px' }}>⚡ 85% Early Bird Tickets Sold Out!</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Artist Lineup Grid */}
      <section id="lineup" style={styles.sectionContainer}>
        <h2 style={styles.sectionHeading}>🌟 Phase 1 Lineup</h2>
        <div style={styles.lineupGrid}>
          {artists.map((artist) => (
            <div key={artist.id} style={styles.artistCard}>
              <img src={artist.image} alt={artist.name} style={styles.artistImg} />
              <div style={styles.artistInfo}>
                <h3 style={{ margin: '0 0 4px 0', fontSize: '18px' }}>{artist.name}</h3>
                <p style={{ color: '#4facfe', fontSize: '13px', margin: '0 0 8px 0' }}>{artist.genre}</p>
                <span style={{ fontSize: '12px', color: '#aaa', background: '#1c1e2e', padding: '4px 8px', borderRadius: '4px' }}>
                  🕒 {artist.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Ticket Tier Cards */}
      <section id="tickets" style={styles.sectionContainer}>
        <h2 style={styles.sectionHeading}>🎟️ Select Your Festival Tickets</h2>
        <div style={styles.ticketsGrid}>
          {ticketTiers.map((tier) => (
            <div key={tier.id} style={{ ...styles.ticketCard, border: selectedTicket?.id === tier.id ? '2px solid #00f2fe' : '1px solid #2a2d42' }}>
              <span style={styles.ticketBadge}>{tier.badge}</span>
              <h3 style={{ fontSize: '20px', margin: '12px 0 8px 0' }}>{tier.name}</h3>
              <p style={{ fontSize: '26px', fontWeight: '800', color: '#00f2fe', margin: '0 0 16px 0' }}>
                ₹{tier.price.toLocaleString()}
              </p>
              <ul style={styles.featuresList}>
                {tier.features.map((f, idx) => (
                  <li key={idx} style={{ marginBottom: '6px' }}>✓ {f}</li>
                ))}
              </ul>
              <button
                onClick={() => handleSelectTicket(tier)}
                style={{ ...styles.selectTicketBtn, backgroundColor: selectedTicket?.id === tier.id ? '#4facfe' : '#00f2fe' }}
              >
                {selectedTicket?.id === tier.id ? 'Selected ✓' : 'Add Ticket'}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Sticky Bottom Checkout Summary */}
      {selectedTicket && (
        <div style={styles.stickyBottomBar}>
          <div>
            <span style={{ fontSize: '14px', color: '#aaa' }}>Selected Pass:</span>
            <strong style={{ marginLeft: '8px', fontSize: '16px', color: '#fff' }}>{selectedTicket.name} (₹{selectedTicket.price.toLocaleString()})</strong>
          </div>
          <button style={styles.checkoutBtn}>
            Proceed to Checkout →
          </button>
        </div>
      )}

    </div>
  );
}

// Inline Styles for Electra Fest Layout
const styles = {
  pageContainer: {
    backgroundColor: '#0a0c16',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: "'Inter', system-ui, sans-serif",
    paddingBottom: '80px',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: 'rgba(10, 12, 22, 0.9)',
    backdropFilter: 'blur(10px)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    borderBottom: '1px solid #1c1e2e',
  },
  navBrand: {
    fontSize: '22px',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #00f2fe 0%, #4facfe 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  navLink: {
    color: '#a0a0a0',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  },
  cartBtn: {
    backgroundColor: '#1c1e2e',
    color: '#fff',
    border: '1px solid #00f2fe',
    padding: '6px 16px',
    borderRadius: '20px',
    fontWeight: '700',
    cursor: 'pointer',
  },
  cartBadge: {
    backgroundColor: '#00f2fe',
    color: '#000',
    padding: '2px 6px',
    borderRadius: '50%',
    fontSize: '12px',
    marginLeft: '4px',
  },

  /* Hero Section Grid Layout */
  heroSection: {
    position: 'relative',
    backgroundImage: `url(${heroImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '520px',
    display: 'flex',
    alignItems: 'center',
    padding: '60px 40px',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(to right, rgba(10,12,22,0.95) 0%, rgba(10,12,22,0.6) 60%, rgba(10,12,22,0.85) 100%)',
  },
  heroContentGrid: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '40px',
    alignItems: 'center',
  },
  heroTextCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  locationTag: {
    color: '#00f2fe',
    fontSize: '14px',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  heroHeadline: {
    fontSize: '2.8rem',
    fontWeight: '900',
    lineHeight: '1.15',
    background: 'linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  heroDescription: {
    fontSize: '1.1rem',
    color: '#b0b8c4',
    lineHeight: '1.6',
    maxWidth: '520px',
  },
  heroCtaRow: {
    display: 'flex',
    gap: '16px',
    marginTop: '12px',
  },
  primaryCta: {
    backgroundColor: '#00f2fe',
    color: '#000000',
    padding: '14px 28px',
    borderRadius: '8px',
    fontWeight: '800',
    textDecoration: 'none',
    fontSize: '15px',
  },
  secondaryCta: {
    backgroundColor: 'transparent',
    color: '#ffffff',
    border: '1px solid #4facfe',
    padding: '14px 24px',
    borderRadius: '8px',
    fontWeight: '700',
    textDecoration: 'none',
    fontSize: '15px',
  },

  /* Hero Countdown Card */
  heroCountdownCol: {
    display: 'flex',
    justifyContent: 'center',
  },
  countdownCard: {
    backgroundColor: 'rgba(28, 30, 46, 0.85)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 242, 254, 0.3)',
    borderRadius: '16px',
    padding: '28px',
    textAlign: 'center',
    width: '100%',
    maxWidth: '340px',
  },
  timerGrid: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
  },
  timerBox: {
    backgroundColor: '#0a0c16',
    padding: '12px',
    borderRadius: '8px',
    minWidth: '65px',
    display: 'flex',
    flexDirection: 'column',
  },
  timerNum: {
    fontSize: '24px',
    fontWeight: '800',
    color: '#ffffff',
  },
  timerLabel: {
    fontSize: '10px',
    color: '#888',
    textTransform: 'uppercase',
  },

  /* Sections Layout */
  sectionContainer: {
    maxWidth: '1200px',
    margin: '60px auto',
    padding: '0 24px',
  },
  sectionHeading: {
    fontSize: '24px',
    fontWeight: '800',
    marginBottom: '24px',
  },
  lineupGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
    gap: '20px',
  },
  artistCard: {
    backgroundColor: '#121526',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid #1c1e2e',
  },
  artistImg: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  artistInfo: {
    padding: '16px',
  },
  ticketsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '24px',
  },
  ticketCard: {
    backgroundColor: '#121526',
    borderRadius: '16px',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  ticketBadge: {
    fontSize: '11px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#00f2fe',
    backgroundColor: 'rgba(0,242,254,0.1)',
    padding: '4px 10px',
    borderRadius: '12px',
    width: 'fit-content',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 24px 0',
    fontSize: '13px',
    color: '#b0b8c4',
  },
  selectTicketBtn: {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '800',
    color: '#000',
    cursor: 'pointer',
  },
  stickyBottomBar: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#121526',
    borderTop: '1px solid #00f2fe',
    padding: '16px 40px',
    display: 'flex',
    justify': 'space-between',
    alignItems: 'center',
    zIndex: 1000,
  },
  checkoutBtn: {
    backgroundColor: '#00f2fe',
    color: '#000',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontWeight: '800',
    cursor: 'pointer',
  },
};
