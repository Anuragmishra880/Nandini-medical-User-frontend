import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    featuredMedicines: {
        heartMedicine: [],
        bonesMedicine: [],
        dermaMedicine: []
    },
    loading: false,
    error: null
}
const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

        setFeaturedMedicines: (state, action) => {
            state.featuredMedicines = action.payload
        },

        // setOffers: (state, action) => {
        //     state.offers = action.payload

        // },
        setLoading: (state, action) => {
            state.loading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload;
        },

    }
})
export const { setFeaturedMedicines, setLoading, setError } = productSlice.actions
export default productSlice.reducer