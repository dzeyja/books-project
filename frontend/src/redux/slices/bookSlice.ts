import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { IBooks } from '../modules/redux'
import { fecthBooks } from './actionCreator'

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
    setToogleFavorite: (state, action: PayloadAction<string>) => {
      return state.books.forEach((book) => {
        if (book.id === action.payload) {
          book.isFavorite = !book.isFavorite
        }
      })
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fecthBooks.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fecthBooks.fulfilled, (state, action: any) => {
      state.isLoading = false
      state.books.push(action.payload)
    })
  },
})

export default bookSlice.reducer

export const { setAddBook, setDeleteBook, setToogleFavorite } =
  bookSlice.actions
