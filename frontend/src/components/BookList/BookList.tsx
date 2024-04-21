import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Book from '../Book/Book'
import './BookList.css'
import { setDeleteBook } from '../../redux/slices/bookSlice'

const BookList: FC = () => {
  const books = useAppSelector((state) => state.books.books)
  const dispatch = useAppDispatch()

  const handleDeleteBook = (id: string) => {
    dispatch(setDeleteBook(id))
  }

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      <ul>
        {books.map((book, index) => (
          <li key={book.id}>
            <Book book={book} index={index} onDelete={handleDeleteBook} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
