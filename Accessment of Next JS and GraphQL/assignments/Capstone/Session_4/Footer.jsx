import React from 'react';

/**
 * TASK 3: Flipkart-Style Footer Component
 * @param {Array<{id: string, name: string, icon: string, url: string}>} socialLinks - Social links passed as props
 */
export default function Footer({ socialLinks = [] }) {
  const defaultSocialLinks = [
    { id: 'fb', name: 'Facebook', icon: '🌐', url: 'https://facebook.com/flipkart' },
    { id: 'tw', name: 'Twitter', icon: '🐦', url: 'https://twitter.com/flipkart' },
    { id: 'yt', name: 'YouTube', icon: '▶️', url: 'https://youtube.com/flipkart' },
    { id: 'ig', name: 'Instagram', icon: '📸', url: 'https://instagram.com/flipkart' },
  ];

  const linksToRender = socialLinks.length > 0 ? socialLinks : defaultSocialLinks;

  return (
    <footer style={styles.footerContainer}>
      <div style={styles.contentGrid}>
        
        {/* About Section */}
        <div style={styles.col}>
          <h4 style={styles.colHeader}>ABOUT FLIPKART</h4>
          <ul style={styles.list}>
            <li>Contact Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Flipkart Stories</li>
          </ul>
        </div>

        {/* HELP Section */}
        <div style={styles.col}>
          <h4 style={styles.colHeader}>HELP & POLICIES</h4>
          <ul style={styles.list}>
            <li>Payments</li>
            <li>Shipping</li>
            <li>Cancellation & Returns</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Dynamic Social Links Section (Passed via Props) */}
        <div style={styles.col}>
          <h4 style={styles.colHeader}>CONNECT WITH US (PROPS)</h4>
          <div style={styles.socialRow}>
            {linksToRender.map((social) => (
              <a
                key={social.id || social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialIconLink}
                title={social.name}
              >
                <span style={styles.iconSymbol}>{social.icon}</span>
                <span style={styles.iconName}>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      <div style={styles.bottomBar}>
        <p>© 2026 Flipkart Clone Inc. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footerContainer: {
    backgroundColor: '#172337',
    color: '#878787',
    fontSize: '12px',
    fontFamily: "'Roboto', sans-serif",
    paddingTop: '32px',
    borderTop: '1px solid #28354a',
  },
  contentGrid: {
    maxWidth: '1100px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    padding: '0 24px 32px 24px',
    gap: '32px',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  colHeader: {
    color: '#878787',
    fontSize: '12px',
    fontWeight: '700',
    marginBottom: '8px',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    color: '#ffffff',
  },
  socialRow: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',
  },
  socialIconLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#28354a',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    fontSize: '12px',
    transition: 'background-color 0.2s',
  },
  iconSymbol: {
    fontSize: '14px',
  },
  iconName: {
    fontWeight: '600',
  },
  bottomBar: {
    borderTop: '1px solid #28354a',
    textAlign: 'center',
    padding: '16px',
    color: '#ffffff',
  },
};
