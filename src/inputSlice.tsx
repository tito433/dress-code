import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {
  value: string,
  bit: number,
  startDate: number,
  excludeWeekend: boolean
}

const initialState: CounterState = {
  value: '',
  bit: 1,
  startDate: new Date().valueOf(),
  excludeWeekend: true
}

export const appSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setValue: (state, action) => {
      state.value =  action.payload ;
    },
    setBit: (state, action) => {
      state.bit =  action.payload ;
    },
    setStartDate: (state, action) => {
      state.startDate =  action.payload ;
    },
    setExcludeWeekend: (state, action) => {
      state.excludeWeekend =  action.payload ;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setValue, setStartDate, setBit, setExcludeWeekend } = appSlice.actions

export default appSlice.reducer