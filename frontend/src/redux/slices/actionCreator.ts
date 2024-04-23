import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { IBooks } from '../modules/redux'

export const fecthBooks = createAsyncThunk(
  'books/fetch',
  async (url: string, thunkAPI) => {
    try {
      const response = await axios.get<IBooks[]>(url)
      return response.data
    } catch (error) {
      console.log(error)
    }
  }
)
