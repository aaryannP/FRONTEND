import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

/**
 * Async Thunk for applying a discount promo code via server validation
 */
export const applyDiscountThunk = createAsyncThunk(
  'cart/applyDiscount',
  async (promoCode, { rejectWithValue }) => {
    // Simulate server API network call
    await new Promise((resolve) => setTimeout(resolve, 800));

    const validPromos = {
      'FEAST20': 0.20, // 20% off
      'SAVE10': 0.10,  // 10% off
      'TOPS50': 0.50   // 50% off
    };

    const codeUpper = promoCode.trim().toUpperCase();
    if (validPromos[codeUpper]) {
      return { code: codeUpper, discountPercentage: validPromos[codeUpper] };
    } else {
      return rejectWithValue('Invalid promo code. Try FEAST20 or SAVE10!');
    }
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array of { id, name, price, category, quantity }
    discountPercentage: 0,
    appliedPromoCode: null,
    discountLoading: false,
    discountError: null,
  },
  reducers: {
    // Requirement: Add item to cart
    addItem: (state, action) => {
      const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Requirement: Remove item from cart
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    // Requirement: Quantity-update action
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        if (quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== id);
        } else {
          item.quantity = quantity;
        }
      }
    },
    // Clear entire cart after order checkout
    clearCart: (state) => {
      state.items = [];
      state.discountPercentage = 0;
      state.appliedPromoCode = null;
      state.discountError = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(applyDiscountThunk.pending, (state) => {
        state.discountLoading = true;
        state.discountError = null;
      })
      .addCase(applyDiscountThunk.fulfilled, (state, action) => {
        state.discountLoading = false;
        state.discountPercentage = action.payload.discountPercentage;
        state.appliedPromoCode = action.payload.code;
      })
      .addCase(applyDiscountThunk.rejected, (state, action) => {
        state.discountLoading = false;
        state.discountError = action.payload;
      });
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
