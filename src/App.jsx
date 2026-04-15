import { useState } from "react"
import BookList from "./BookList"
import { ALL_BOOKS } from "./books-data"
import GenreSelector from "./GenreSelector"
import AlternateGenreSelector from "./AlternateGenreSelector"

export default function App() {
  const [searchValue, setSearchValue] = useState("")
  //const [genreValue, setGenreValue] = useState("Science Fiction")
  const [genreValue, setGenreValue] = useState(["Fiction", "Science Fiction"])

  // Give me the books that match the search term in the textbox
  // Genre matches and either title or author or description
  const matchingBooks = ALL_BOOKS.filter(book =>
    genreValue.includes(book.genre) && 
    (
      book.title.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.author.toLowerCase().includes(searchValue.toLowerCase()) ||
      book.description.toLowerCase().includes(searchValue.toLowerCase())
    )
  )

  return (
    <div>
      <h2 className="bg-green-800 ps-4 text-white text-4xl p-3 mb-3">Book Place</h2>
      <input
        type="text"
        onChange={event => setSearchValue(event.target.value)}
        value={searchValue}
        className="ms-4 border border-green-900 p-2 rounded-2xl rounded-e-none border-e-0"
      />
      <button
        className="bg-green-800 text-white rounded-2xl p-2 border-green-900 border rounded-s-none hover:bg-green-700"
      >
        Search
      </button>
      <AlternateGenreSelector genreValue={genreValue} setGenreValue={setGenreValue}/>
      <BookList books={matchingBooks} />
    </div>
  )
}

// PRACTICE
// Theme Picker
// <select> with different background color options
// Checkbox with white text
// A spot to preview what it would look like