import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  error: false
};

export const sidebarReducer = createSlice({
  name: "sidebarReducer",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.data = action.payload;
      state.loading = false; 
    },
    addError: (state) => {
      state.error = true;
      state.loading = false;
    },
  },
});

export function getData() {
    return function(dispatch) {
        fetch("./data_sidebar.json")
            .then(response => {
                if (!response.ok) {
                    console.error('Response not OK', response.status, response.statusText);
                    throw new Error("Failed to fetch data");
                }
                return response.json();
            })
            .then(data => {
                dispatch(addData(data));
            })
            .catch((error) => {
                console.error('Fetch error:', error);
                dispatch(addError());
            });
    };
}

export const { addData, addError } = sidebarReducer.actions;
export default sidebarReducer.reducer;
