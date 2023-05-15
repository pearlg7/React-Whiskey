import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        style: 'style',
        age: "Age",
    },
    reducers: {
        // action is submitted elsewhere - written to state.name
        chooseName: (state, action) => { state.name = action.payload }, // All we're doing is setting the input to the state.name
        chooseStyle: (state, action) => { state.style = action.payload },
        chooseAge: (state, action) => { state.age = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseStyle, chooseAge } = rootSlice.actions