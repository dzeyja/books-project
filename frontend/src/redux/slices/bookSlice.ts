import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IBooks } from '../modules/redux'

interface IState {
  books: IBooks[]
  isLoading: boolean
}

const initialState: IState = {
  books: [],
  isLoading: false,
}

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setAddBook: (state, action: PayloadAction<IBooks>) => {
      state.books.push(action.payload)
    },
    setDeleteBook: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload),
      }
    },
  },
})

export default bookSlice.reducer

export const { setAddBook, setDeleteBook } = bookSlice.actions
