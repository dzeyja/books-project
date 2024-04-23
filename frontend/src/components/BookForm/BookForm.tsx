import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { FaSpinner } from 'react-icons/fa'
import { v4 as uuidv4 } from 'uuid'
import { IBooks } from '../../redux/modules/redux'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAddBook } from '../../redux/slices/bookSlice'
import { fecthBooks } from '../../redux/slices/actionCreator'
import bookData from '../../data/books.json'
import './BookForm.css'

const BookForm: FC = () => {
  const [title, setTitle] = useState<string>()
  const [author, setAuthor] = useState<string>()
  const isLoading = useAppSelector((state) => state.books.isLoading)
  const dispatch = useAppDispatch()

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title && author) {
      const book: IBooks = {
        title,
        author,
        id: uuidv4(),
        isFavorite: false,
      }
      dispatch(setAddBook(book))
    }

    setTitle('')
    setAuthor('')
  }

  const handleRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * bookData.length)
    const randomBook = bookData[randomIndex]

    const book = {
      ...randomBook,
      id: uuidv4(),
      isFavorite: false,
    }
    console.log(book)
    dispatch(setAddBook(book))
  }

  const handleRandomBookViaApi = () => {
    dispatch(fecthBooks('http://localhost:4000/random-book-delayed'))
  }

  return (
    <div className="app-block book-form">
      <h2>Book Form</h2>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            value={title}
            type="text"
            id="title"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            value={author}
            type="text"
            id="author"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setAuthor(e.target.value)
            }
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleRandomBook}>
          Add Random Book
        </button>
        <button type="button" onClick={handleRandomBookViaApi}>
          {isLoading ? (
            <>
              <span>Loading Book...</span>
              <FaSpinner className="spinner" />
            </>
          ) : (
            <span>Add Random Book Via Api</span>
          )}
        </button>
      </form>
    </div>
  )
}

export default BookForm
