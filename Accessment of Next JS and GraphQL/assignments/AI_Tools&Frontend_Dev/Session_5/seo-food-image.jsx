import React from 'react';
import pizzaImg from './food-item-pizza.jpg';

/**
 * TASK 3: SEO-Optimized Food Image Component
 *
 * ChatGPT Prompt used:
 * "Generate an SEO-optimized alt text for a food photo of artisan pepperoni pizza for a Zomato-style app."
 *
 * ChatGPT Generated Alt Text:
 * "Freshly baked artisan pepperoni pizza topped with melted mozzarella cheese, savory pepperoni slices, and aromatic fresh basil leaves served on a rustic wooden table - Order online on Zomato."
 */
export default function SeoFoodImage() {
  const seoAltText = "Freshly baked artisan pepperoni pizza topped with melted mozzarella cheese, savory pepperoni slices, and aromatic fresh basil leaves served on a rustic wooden table - Order online on Zomato";

  return (
    <div style={{ maxWidth: '450px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h3>Task 3: SEO-Optimized Food Image</h3>
      
      {/* REQUIREMENT: <img> tag with ChatGPT-generated descriptive SEO alt text */}
      <img
        src={pizzaImg}
        alt={seoAltText}
        title="Artisan Pepperoni Pizza - Order on Zomato"
        style={{ width: '100%', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
      />

      <div style={{ backgroundColor: '#f0f4f8', padding: '12px', borderRadius: '8px', marginTop: '12px' }}>
        <strong>Generated SEO Alt Text:</strong>
        <p style={{ fontSize: '13px', color: '#333', marginTop: '4px' }}>
          "{seoAltText}"
        </p>
      </div>
    </div>
  );
}
