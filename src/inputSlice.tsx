import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: string[]
}

const initialState: CounterState = {
  value: [],
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value =  action.payload ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setValue } = counterSlice.actions

export default counterSlice.reducer