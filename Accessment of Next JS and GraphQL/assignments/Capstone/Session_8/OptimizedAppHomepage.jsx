import React, { useState, Suspense, lazy } from 'react';
import './styles-reset.css';

// Lazy loading below-the-fold component to reduce initial bundle footprint
const DeferredFooter = lazy(() => import('../Session_4/Footer'));

/**
 * TASK 1-5: Fully Optimized & Responsive React Homepage Component
 */
export default function OptimizedAppHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(2);

  return (
    <div style={styles.appWrapper}>
      
      {/* 1. TASK 1: Responsive Navigation Bar (Zero Horizontal Scroll on Mobile) */}
      <header style={styles.navbar}>
        <div style={styles.navBrand}>⚡ FoodDash AI</div>

        {/* Desktop Links Bar */}
        <nav style={styles.desktopNavLinks} aria-label="Main Navigation">
          <a href="#home" style={styles.navLink}>Home</a>
          <a href="#menu" style={styles.navLink}>Menu</a>
          <a href="#orders" style={styles.navLink}>Orders</a>
          <button
            style={styles.cartBtn}
            aria-label={`Shopping cart with ${cartCount} items`}
          >
            🛒 Cart <span style={styles.cartBadge}>{cartCount}</span>
          </button>
        </nav>

        {/* TASK 1 & 3: Mobile Hamburger Button with Accessible aria-label */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={styles.mobileHamburgerBtn}
          aria-label="Toggle mobile navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          ☰
        </button>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      {mobileMenuOpen && (
        <div style={styles.mobileDrawer}>
          <a href="#home" style={styles.drawerLink} onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#menu" style={styles.drawerLink} onClick={() => setMobileMenuOpen(false)}>Menu</a>
          <a href="#orders" style={styles.drawerLink} onClick={() => setMobileMenuOpen(false)}>Orders</a>
          <button style={styles.mobileDrawerCartBtn}>
            🛒 Cart ({cartCount})
          </button>
        </div>
      )}

      {/* 2. TASK 4: Fluid Responsive Hero Section (320px to 1200px) */}
      <main style={styles.mainContainer}>
        <section style={styles.heroGrid}>
          
          <div style={styles.heroTextCol}>
            <span style={styles.heroTag}>🔥 Fast 20-Min Delivery</span>
            <h1 style={styles.heroHeading}>
              Delicious Gourmet Meals Delivered To Your Doorstep
            </h1>
            <p style={styles.heroSubText}>
              Order from top-rated local restaurants with real-time tracking & zero delivery fee on your first order.
            </p>
            <div style={styles.heroCtaGroup}>
              <button style={styles.primaryCtaBtn} aria-label="Order food now">
                Order Food Now →
              </button>
              <button style={styles.secondaryCtaBtn} aria-label="Explore restaurant menu">
                Explore Menu
              </button>
            </div>
          </div>

          {/* TASK 3: Explicit Image Width/Height & Aspect Ratio preventing CLS */}
          <div style={styles.heroImageCol}>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop&q=80"
              alt="Freshly baked pepperoni pizza on wooden board"
              width={800}
              height={500}
              style={styles.heroImg}
              loading="eager"
            />
          </div>

        </section>

        {/* Featured Items Grid */}
        <section style={{ marginTop: '40px' }}>
          <h2 style={styles.sectionTitle}>Featured Dishes</h2>
          <div style={styles.dishesGrid}>
            {[
              { id: 1, title: 'Artisan Pepperoni Pizza', price: '₹499', rating: '4.8 ★' },
              { id: 2, title: 'Smokey Bacon Cheeseburger', price: '₹299', rating: '4.6 ★' },
              { id: 3, title: 'Fresh Salmon Sushi Roll', price: '₹599', rating: '4.9 ★' },
            ].map((dish) => (
              <div key={dish.id} style={styles.dishCard}>
                <h3 style={{ margin: '0 0 6px 0', fontSize: '18px' }}>{dish.title}</h3>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
                  <span style={{ fontWeight: '800', color: '#e23744', fontSize: '16px' }}>{dish.price}</span>
                  <span style={{ fontSize: '12px', backgroundColor: '#e8f5e9', color: '#2e7d32', padding: '2px 8px', borderRadius: '10px', fontWeight: '700' }}>{dish.rating}</span>
                </div>
                <button
                  style={styles.addCartCardBtn}
                  aria-label={`Add ${dish.title} to cart`}
                  onClick={() => setCartCount(cartCount + 1)}
                >
                  + Add To Cart
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* 3. TASK 5: Defer Below-The-Fold Components via React.lazy & Suspense */}
      <Suspense fallback={<div style={{ padding: '20px', textAlign: 'center' }}>⚡ Loading footer...</div>}>
        <DeferredFooter />
      </Suspense>

    </div>
  );
}

const styles = {
  appWrapper: {
    backgroundColor: '#f4f6f8',
    minHeight: '100vh',
    fontFamily: "'Inter', sans-serif",
    color: '#212121',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 24px',
    backgroundColor: '#ffffff',
    boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navBrand: {
    fontSize: '22px',
    fontWeight: '900',
    color: '#e23744',
  },
  desktopNavLinks: {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  },
  navLink: {
    color: '#424242',
    textDecoration: 'none',
    fontWeight: '600',
    fontSize: '14px',
  },
  cartBtn: {
    backgroundColor: '#e23744',
    color: '#ffffff',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '20px',
    fontWeight: '700',
    cursor: 'pointer',
    fontSize: '13px',
  },
  cartBadge: {
    backgroundColor: '#ffffff',
    color: '#e23744',
    padding: '2px 6px',
    borderRadius: '50%',
    fontSize: '11px',
    marginLeft: '4px',
  },
  mobileHamburgerBtn: {
    fontSize: '24px',
    color: '#212121',
    cursor: 'pointer',
  },
  mobileDrawer: {
    backgroundColor: '#ffffff',
    padding: '16px 24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    borderBottom: '1px solid #e0e0e0',
  },
  drawerLink: {
    color: '#212121',
    textDecoration: 'none',
    fontWeight: '700',
    fontSize: '16px',
  },
  mobileDrawerCartBtn: {
    backgroundColor: '#e23744',
    color: '#ffffff',
    padding: '10px',
    borderRadius: '8px',
    fontWeight: '700',
  },
  mainContainer: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '32px 20px',
  },
  heroGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '32px',
    alignItems: 'center',
  },
  heroTextCol: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
  },
  heroTag: {
    color: '#e23744',
    fontSize: '12px',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
  },
  heroHeading: {
    fontSize: '2.5rem',
    fontWeight: '900',
    lineHeight: '1.2',
    color: '#111111',
    margin: 0,
  },
  heroSubText: {
    fontSize: '1.05rem',
    color: '#616161',
    lineHeight: '1.6',
    margin: 0,
  },
  heroCtaGroup: {
    display: 'flex',
    gap: '12px',
    marginTop: '8px',
    flexWrap: 'wrap',
  },
  primaryCtaBtn: {
    backgroundColor: '#e23744',
    color: '#ffffff',
    padding: '14px 24px',
    borderRadius: '8px',
    fontWeight: '800',
    fontSize: '15px',
  },
  secondaryCtaBtn: {
    backgroundColor: '#ffffff',
    color: '#212121',
    border: '1px solid #ccc',
    padding: '14px 20px',
    borderRadius: '8px',
    fontWeight: '700',
    fontSize: '15px',
  },
  heroImageCol: {
    width: '100%',
  },
  heroImg: {
    width: '100%',
    height: 'auto',
    aspectRatio: '16/9',
    objectFit: 'cover',
    borderRadius: '16px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
  },
  sectionTitle: {
    fontSize: '22px',
    fontWeight: '800',
    marginBottom: '16px',
  },
  dishesGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '20px',
  },
  dishCard: {
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
  },
  addCartCardBtn: {
    width: '100%',
    marginTop: '14px',
    backgroundColor: '#212121',
    color: '#ffffff',
    padding: '10px',
    borderRadius: '6px',
    fontWeight: '700',
    fontSize: '13px',
  },
};
