import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: string[],
  startDate: number
}

const initialState: CounterState = {
  value: [],
  startDate: new Date().valueOf()
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value =  action.payload ;
    },
    setStartDate: (state, action) => {
      state.startDate =  action.payload ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setValue, setStartDate } = appSlice.actions

export default appSlice.reducer