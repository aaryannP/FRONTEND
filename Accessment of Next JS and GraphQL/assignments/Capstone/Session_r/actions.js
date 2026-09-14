/**
 * CAPSTONE SESSION_R REDUX ACTION CREATORS
 */

// ==============================================================================
// TASK 1 & 5: SPOTIFY PLAYLIST ACTION CREATORS
// ==============================================================================

/**
 * Task 1: Action creator representing adding a new song to playlist
 * @param {string} songName - Name of the song to add
 */
export const addSong = (songName) => ({
  type: 'ADD_SONG',
  payload: songName,
});

/**
 * Task 5: Action creator representing removing a song from playlist
 * @param {string} songName - Name of the song to remove
 */
export const removeSong = (songName) => ({
  type: 'REMOVE_SONG',
  payload: songName,
});


// ==============================================================================
// PART B: E-COMMERCE CART & WISHLIST ACTION CREATORS
// ==============================================================================

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});

export const addToWishlist = (product) => ({
  type: 'ADD_TO_WISHLIST',
  payload: product,
});

export const removeFromWishlist = (productId) => ({
  type: 'REMOVE_FROM_WISHLIST',
  payload: productId,
});

// ==============================================================================
// PART B TASK 4: REDUX THUNK ASYNC ACTION (SIMULATED API FETCH)
// ==============================================================================
export const fetchOffers = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_OFFERS_START' });

    // Simulate async API call with 1.5s setTimeout
    setTimeout(() => {
      const mockOffers = [
        { id: 'off_1', title: '50% OFF Festive Electronics Sale', code: 'FESTIVE50', discount: 50 },
        { id: 'off_2', title: 'Buy 1 Get 1 Free on Earbuds', code: 'BOGOEARBUDS', discount: 100 },
      ];
      dispatch({ type: 'FETCH_OFFERS_SUCCESS', payload: mockOffers });
    }, 1500);
  };
};
