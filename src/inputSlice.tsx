import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  bit: number,
  excludeWeekend: boolean
}

const initialState: CounterState = {
  bit: 1,
  excludeWeekend: true
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
    setBit: (state, action) => {
      state.bit =  action.payload ;
    },
    
    setExcludeWeekend: (state, action) => {
      state.excludeWeekend =  action.payload ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setBit, setExcludeWeekend } = appSlice.actions

export default appSlice.reducer