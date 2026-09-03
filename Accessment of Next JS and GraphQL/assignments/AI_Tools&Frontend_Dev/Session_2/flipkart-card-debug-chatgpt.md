# Task 2: Debugging Flipkart Product Card Code & Terminal Warnings using ChatGPT

---

## 1. Original Problematic Code (`FlipkartProductGrid.jsx`)

Below is the initial React code written to display Flipkart product cards. It compiles with warnings and throws runtime console errors in the VS Code terminal:

```jsx
import React from 'react';

// Problematic component with missing key props and unhandled missing data
export function FlipkartProductGrid({ products }) {
  return (
    <div className="grid">
      {products.map((item) => (
        // WARNING / ERROR 1: Missing unique "key" prop in mapped array element
        <div className="card">
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          {/* WARNING / ERROR 2: Direct call to .toFixed() crashes if price is undefined or null */}
          <p>Price: ₹{item.price.toFixed(2)}</p>
          <button onClick={addToCart(item.id)}>Add to Cart</button> 
          {/* WARNING / ERROR 3: Event handler addToCart(item.id) executes immediately during render instead of passing a function */}
        </div>
      ))}
    </div>
  );
}
```

---

## 2. Terminal Error / Warning Messages in VS Code

```text
1. Warning: Each child in a list should have a unique "key" prop. 
   Check the render method of `FlipkartProductGrid`.

2. Uncaught TypeError: Cannot read properties of undefined (reading 'toFixed')
   at FlipkartProductGrid (FlipkartProductGrid.jsx:11:1)

3. Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, or when a component calls setState during render.
   (Caused by `onClick={addToCart(item.id)}` being invoked immediately on render).
```

---

## 3. Exact Prompt Given to ChatGPT

> **Prompt:**
> *"I am building a React component called `FlipkartProductGrid` that maps over an array of products to render Flipkart-style product cards. However, I am getting 3 errors/warnings in my VS Code terminal and browser console:*
> 1. `Warning: Each child in a list should have a unique "key" prop.`
> 2. `Uncaught TypeError: Cannot read properties of undefined (reading 'toFixed')`
> 3. `Warning: Maximum update depth exceeded` (Caused by my `onClick` handler).
> 
> *Here is my code:*
> [Pasted `FlipkartProductGrid.jsx` code]
> 
> *Please explain why each of these 3 errors happens and provide the refactored, corrected React code."*

---

## 4. ChatGPT's Explanation & Refactored Solution

### Explanation of Errors:

1. **Missing `key` Prop Warning:**
   * *Why it happens:* React uses the `key` attribute to efficiently track, re-order, and mutate items in dynamic lists during reconciliations. Without a unique key (e.g., `key={item.id}`), React re-renders all list elements indiscriminately, causing UI bugs and performance degradation.
2. **TypeError on `item.price.toFixed(2)`:**
   * *Why it happens:* If an API response object contains `null`, `undefined`, or a missing `price` field, calling `.toFixed()` on `undefined` causes a fatal JavaScript runtime crash. Safe access requires optional chaining or a fallback value (`item.price?.toFixed(2) ?? 'N/A'`).
3. **Immediate Function Execution in `onClick`:**
   * *Why it happens:* Writing `onClick={addToCart(item.id)}` immediately invokes `addToCart` during the component's render phase instead of passing an inline function reference. If `addToCart` updates state, it triggers an infinite re-render loop. It must be written as an arrow function: `onClick={() => addToCart(item.id)}`.

---

### Refactored & Corrected Code (`FlipkartProductGridFixed.jsx`)

```jsx
import React from 'react';
import PropTypes from 'prop-types';

export function FlipkartProductGridFixed({ products = [], onAddToCart }) {
  if (!products || products.length === 0) {
    return <p className="no-products">No Flipkart products available.</p>;
  }

  return (
    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
      {products.map((item) => (
        // FIX 1: Added unique "key" prop using item.id
        <div key={item.id} className="card" style={{ border: '1px solid #e0e0e0', padding: '16px', borderRadius: '4px' }}>
          <img 
            src={item.imageUrl || 'https://via.placeholder.com/200?text=No+Image'} 
            alt={item.title || 'Product Image'} 
            style={{ width: '100%', height: '160px', objectFit: 'contain' }}
          />
          <h3 style={{ fontSize: '14px', margin: '8px 0' }}>{item.title || 'Untitled Product'}</h3>
          
          {/* FIX 2: Safe handling of price using optional chaining & fallback value */}
          <p style={{ fontWeight: 'bold' }}>
            Price: ₹{typeof item.price === 'number' ? item.price.toFixed(2) : 'N/A'}
          </p>

          {/* FIX 3: Arrow function wrapper to prevent immediate execution */}
          <button 
            onClick={() => onAddToCart && onAddToCart(item.id)}
            style={{ backgroundColor: '#2874f0', color: '#fff', border: 'none', padding: '8px 16px', cursor: 'pointer', width: '100%' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

// Added PropTypes validation
FlipkartProductGridFixed.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string,
      price: PropTypes.number,
      imageUrl: PropTypes.string,
    })
  ),
  onAddToCart: PropTypes.func,
};

export default FlipkartProductGridFixed;
```
