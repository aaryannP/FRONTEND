import React from 'react';

/**
 * TASK 2: ProductDescription Component
 * Displays a 100-word ChatGPT-generated product description for trending Wireless Earbuds.
 *
 * ChatGPT Prompt used:
 * "Write a compelling, high-converting 100-word e-commerce product description 
 * for a trending pair of Wireless Active Noise-Canceling Earbuds."
 */
export default function ProductDescription() {
  // 100-Word ChatGPT Generated Product Description
  const descriptionText = `Experience acoustic perfection with the all-new SonicPro Wireless Active Noise-Canceling Earbuds. Engineered with custom 12mm dynamic drivers and advanced hybrid ANC technology, these premium earbuds block out up to 40dB of ambient noise, delivering crystal-clear highs and deep, immersive bass. Enjoy up to 36 hours of total playtime with the sleek wireless charging case, while quad-beamforming microphones ensure studio-quality voice calls even in noisy environments. Designed with IPX5 water resistance and ergonomic silicone tips for all-day comfort, the SonicPro earbuds seamlessly connect via Bluetooth 5.3 for ultra-low latency gaming and lossless music streaming anywhere you go.`;

  return (
    <div style={styles.cardContainer}>
      {/* Product Image & Badge */}
      <div style={styles.imageSection}>
        <span style={styles.trendingBadge}>🔥 Trending #1</span>
        <img
          src="https://via.placeholder.com/300x240?text=SonicPro+ANC+Earbuds"
          alt="SonicPro Wireless Active Noise-Canceling Earbuds"
          style={styles.productImg}
        />
      </div>

      {/* Product Details Section */}
      <div style={styles.detailsSection}>
        <h2 style={styles.productTitle}>SonicPro Wireless ANC Earbuds</h2>
        <div style={styles.ratingRow}>
          <span style={styles.starRating}>★ 4.8 / 5.0</span>
          <span style={styles.reviewsCount}>(1,420 Customer Reviews)</span>
        </div>

        <p style={styles.priceTag}>
          ₹4,999 <span style={styles.mrpText}>₹9,999</span> <span style={styles.discountText}>(50% OFF)</span>
        </p>

        {/* REQUIREMENT: ChatGPT 100-word Product Description inside a <div> */}
        <div style={styles.descriptionBox}>
          <h4 style={styles.descriptionHeader}>Product Description</h4>
          <p style={styles.descriptionParagraph}>
            {descriptionText}
          </p>
        </div>

        <button style={styles.buyBtn}>Add to Cart</button>
      </div>
    </div>
  );
}

const styles = {
  cardContainer: {
    maxWidth: '750px',
    margin: '30px auto',
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    display: 'flex',
    overflow: 'hidden',
    border: '1px solid #e0e0e0',
    fontFamily: "'Roboto', sans-serif",
  },
  imageSection: {
    flex: '1',
    backgroundColor: '#fafafa',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  trendingBadge: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    backgroundColor: '#ff3f6c',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '700',
    padding: '4px 10px',
    borderRadius: '20px',
  },
  productImg: {
    width: '100%',
    maxHeight: '220px',
    objectFit: 'contain',
  },
  detailsSection: {
    flex: '1.4',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productTitle: {
    fontSize: '22px',
    fontWeight: '800',
    color: '#212121',
    margin: '0 0 8px 0',
  },
  ratingRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '12px',
  },
  starRating: {
    backgroundColor: '#388e3c',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: '700',
    padding: '2px 6px',
    borderRadius: '4px',
  },
  reviewsCount: {
    fontSize: '13px',
    color: '#878787',
  },
  priceTag: {
    fontSize: '20px',
    fontWeight: '800',
    color: '#212121',
    margin: '0 0 16px 0',
  },
  mrpText: {
    fontSize: '14px',
    color: '#878787',
    textDecoration: 'line-through',
    fontWeight: '400',
    marginLeft: '6px',
  },
  discountText: {
    fontSize: '14px',
    color: '#388e3c',
    fontWeight: '700',
    marginLeft: '6px',
  },
  descriptionBox: {
    backgroundColor: '#f9f9f9',
    padding: '14px',
    borderRadius: '8px',
    borderLeft: '4px solid #2874f0',
    marginBottom: '20px',
  },
  descriptionHeader: {
    fontSize: '13px',
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#878787',
    margin: '0 0 6px 0',
  },
  descriptionParagraph: {
    fontSize: '13px',
    lineHeight: '1.6',
    color: '#424242',
    margin: 0,
  },
  buyBtn: {
    width: '100%',
    backgroundColor: '#ff9f00',
    color: '#ffffff',
    border: 'none',
    padding: '12px 0',
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '6px',
    cursor: 'pointer',
  },
};
