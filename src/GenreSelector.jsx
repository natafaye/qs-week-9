export default function GenreSelector({ genreValue, setGenreValue }) {
    return (
        <div className="m-4">
            <label className="me-3 font-bold text-green-800">Genre:</label>
            <label className="me-3">
                <input
                    type="radio"
                    name="genre"
                    checked={genreValue === "Classic"}
                    onChange={() => setGenreValue("Classic")}
                    className="me-1" />
                Classic
            </label>
            <label className="me-3">
                <input
                    type="radio"
                    name="genre"
                    checked={genreValue === "Science Fiction"}
                    onChange={() => setGenreValue("Science Fiction")}
                    className="me-1" />
                Science Fiction
            </label>
            <label className="me-3">
                <input
                    type="radio"
                    name="genre"
                    checked={genreValue === "Fantasy"}
                    onChange={() => setGenreValue("Fantasy")}
                    className="me-1" />
                Fantasy
            </label>
            <label className="me-3">
                <input
                    type="radio"
                    name="genre"
                    checked={genreValue === "Fiction"}
                    onChange={() => setGenreValue("Fiction")}
                    className="me-1" />
                Fiction
            </label>
        </div>
    )
}