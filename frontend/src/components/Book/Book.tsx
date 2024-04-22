import React, { FC } from 'react'
import { BsBookmarkStarFill, BsBookmarkStar } from 'react-icons/bs'
import { IBooks } from '../../redux/modules/redux'
import { useAppSelector } from '../../hooks/redux'

interface BookProps {
  book: IBooks
  index: number
  onDelete: (id: string) => void
  onToogleFavorite: (id: string) => void
}

const Book: FC<BookProps> = ({ book, index, onDelete, onToogleFavorite }) => {
  return (
    <>
      <div className="book-info">
        {++index}. {book.title} by <strong>{book.author}</strong>
      </div>
      <div className="book-actions">
        <span onClick={() => onToogleFavorite(book.id)}>
          {book.isFavorite ? (
            <BsBookmarkStarFill className="star-icon" />
          ) : (
            <BsBookmarkStar className="star-icon" />
          )}
        </span>
        <button onClick={() => onDelete(book.id)}>Delete</button>
      </div>
    </>
  )
}

export default Book
