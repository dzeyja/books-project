import React, { FC } from 'react'
import { IBooks } from '../../redux/modules/redux'

interface BookProps {
  book: IBooks
  index: number
  onDelete: (id: string) => void
}

const Book: FC<BookProps> = ({ book, index, onDelete }) => {
  return (
    <>
      <div className="book-info">
        {++index}. {book.title} by <strong>{book.author}</strong>
      </div>
      <div className="book-actions">
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    </>
  )
}

export default Book
