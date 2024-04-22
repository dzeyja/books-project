import React, { FC } from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import Book from '../Book/Book'
import './BookList.css'
import { setDeleteBook, setToogleFavorite } from '../../redux/slices/bookSlice'

const BookList: FC = () => {
  const books = useAppSelector((state) => state.books.books)
  const titleFilter = useAppSelector((state) => state.filter.title)
  const authorFilter = useAppSelector((state) => state.filter.author)
  const onlyFavorite = useAppSelector((state) => state.filter.onlyFavorite)
  const dispatch = useAppDispatch()

  const handleDeleteBook = (id: string) => {
    dispatch(setDeleteBook(id))
  }

  const handleToogleBook = (id: string) => {
    dispatch(setToogleFavorite(id))
  }

  const filteredBooks = books.filter((book) => {
    const matchedTItle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    const mathcedAuthor = book.author
      .toLowerCase()
      .includes(authorFilter.toLowerCase())
    const mathedFavorite = onlyFavorite ? book.isFavorite : true

    return matchedTItle && mathcedAuthor && mathedFavorite
  })

  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      <ul>
        {filteredBooks.map((book, index) => (
          <li key={book.id}>
            <Book
              book={book}
              index={index}
              onDelete={handleDeleteBook}
              onToogleFavorite={handleToogleBook}
            />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BookList
