import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../api';

export const fetchCategories = createAsyncThunk('categories/fetchCategories', async () => {
    const response = await API.get('/categories/');
    return response.data;
});

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.error = action.error.message;
            });
    },
});

export default categorySlice.reducer;
