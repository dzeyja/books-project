import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FilterState {
  author: string
  title: string
  onlyFavorite: boolean
}

const initialState: FilterState = {
  author: '',
  title: '',
  onlyFavorite: false,
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload
    },
    setAuthorFilter: (state, action: PayloadAction<string>) => {
      state.author = action.payload
    },
    setOnlyFavorite: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
  },
})

export default filterSlice.reducer

export const { setTitleFilter, setAuthorFilter, setOnlyFavorite } =
  filterSlice.actions
