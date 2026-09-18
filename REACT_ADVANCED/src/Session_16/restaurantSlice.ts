import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchRestaurants = createAsyncThunk(
  "restaurants/fetchRestaurants",
  async (city: string) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!res.ok) throw new Error("Failed to fetch data");
    const data = await res.json();

    if (city) {
      return data.filter((item: any) =>
        item.address.city.toLowerCase() === city.toLowerCase()
      );
    }

    return data;
  }
);

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    data: [],
    isLoading: false,
    error: null as string | null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRestaurants.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
        console.log("Async action test: Data fetched successfully!", action.payload);
      })
      .addCase(fetchRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || "Something went wrong";
      });
  }
});

export default restaurantSlice.reducer;
