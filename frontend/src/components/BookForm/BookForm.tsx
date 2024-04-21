import React, { ChangeEvent, FC, FormEvent, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './BookForm.css'
import { IBooks } from '../../redux/modules/redux'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { setAddBook } from '../../redux/slices/bookSlice'

const BookForm: FC = () => {
  const [title, setTitle] = useState<string>()
  const [author, setAuthor] = useState<string>()
  const dispatch = useAppDispatch()

  const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (title && author) {
      const book: IBooks = {
        title,
        author,
        id: uuidv4(),
      }
      dispatch(setAddBook(book))
    }
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
      </form>
    </div>
  )
}

export default BookForm
