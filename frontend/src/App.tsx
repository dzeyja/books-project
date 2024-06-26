import React from 'react'
import './App.css'
import BookList from './components/BookList/BookList'
import BookForm from './components/BookForm/BookForm'
import Filter from './components/Filters/Filter'

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Book App Library</h1>
      </div>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  )
}

export default App
