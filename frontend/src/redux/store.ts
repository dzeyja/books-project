import { configureStore, combineReducers } from '@reduxjs/toolkit'
import bookReducer from './slices/bookSlice'

const rootState = combineReducers({
  books: bookReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootState,
  })
}

export type RootState = ReturnType<typeof rootState>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispacth = AppStore['dispatch']
