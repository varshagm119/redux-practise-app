import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, showCounter: true},
    reducers: {
        increment: (state) => {
            state.counter += 1;
            state.showCounter = state.showCounter
        },
        decrement: (state) => {
            state.counter -= 1;
            state.showCounter = state.showCounter
            
        },
        toggle: (state) => {
            state.counter = state.counter;
            state.showCounter = !state.showCounter
        },
        increase: (state, action) => {
            state.counter += action.payload;
            state.showCounter = state.showCounter
        }
    }
});


const initialAuthStat = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthStat,
    reducers: {
        login: (state) => {
            state.isAuthenticated = true
        },
        logout: (state) => {
            state.isAuthenticated = false
        }
    }
})


//extracting actions and reducer from the slice
const {actions, reducer} = counterSlice;

//creating the redux store with the root reducer
const store = configureStore({
    reducer: {counter: counterSlice.reducer, auth: authSlice.reducer}
});

//exporting the actions used in the components
export const {increment, decrement, toggle, increase} = actions;

export const authActions = authSlice.actions;

export default store;