import React, { ChangeEvent, FC, FormEvent } from 'react'
import './Filter.css'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import {
  setAuthorFilter,
  setOnlyFavorite,
  setTitleFilter,
} from '../../redux/slices/filterSlice'

const Filter: FC = () => {
  const { title, author, onlyFavorite } = useAppSelector(
    (state) => state.filter
  )
  const dispatch = useAppDispatch()

  const handleTitleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setTitleFilter(e.target.value))
  }

  const handleAuthorFilter = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setAuthorFilter(e.target.value))
  }

  const handleOnlyFAvoriteFilter = () => {
    dispatch(setOnlyFavorite())
  }

  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            value={title}
            type="text"
            placeholder="Filter by title..."
            onChange={handleTitleFilter}
          />
        </div>
        <div className="filter-group">
          <input
            value={author}
            type="text"
            placeholder="Filter by author..."
            onChange={handleAuthorFilter}
          />
        </div>
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavorite}
              onChange={handleOnlyFAvoriteFilter}
            />
            Only Favorite
          </label>
        </div>
      </div>
    </div>
  )
}

export default Filter
