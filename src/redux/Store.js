import { configureStore } from '@reduxjs/toolkit'
import { appSlice } from './AppSlice'
export const store = configureStore({
    reducer: {
      appSlice:appSlice.reducer
    },
  })