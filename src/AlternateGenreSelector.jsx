export default function AlternateGenreSelector({ genreValue, setGenreValue }) {

    const flipChecked = (option) => {
        if(genreValue.includes(option)) {
            // If it is in the array (meaning it was checked)
            // remove it from the array
            setGenreValue(genreValue.filter(genre => genre !== option))

        } else {
            // If it's not in the array (meaning it was unchecked)
            // add it to the array
            setGenreValue([...genreValue, option])
        }
    }

    return (
        <div className="m-4">
            <label className="me-3 font-bold text-green-800">Genre:</label>
            <label className="me-3">
                <input
                    type="checkbox"
                    name="genre"
                    checked={genreValue.includes("Classic")}
                    onChange={() => flipChecked("Classic")}
                    className="me-1" />
                Classic
            </label>
            <label className="me-3">
                <input
                    type="checkbox"
                    name="genre"
                    checked={genreValue.includes("Science Fiction")}
                    onChange={() => flipChecked("Science Fiction")}
                    className="me-1" />
                Science Fiction
            </label>
            <label className="me-3">
                <input
                    type="checkbox"
                    name="genre"
                    checked={genreValue.includes("Fantasy")}
                    onChange={() => flipChecked("Fantasy")}
                    className="me-1" />
                Fantasy
            </label>
            <label className="me-3">
                <input
                    type="checkbox"
                    name="genre"
                    checked={genreValue.includes("Fiction")}
                    onChange={() => flipChecked("Fiction")}
                    className="me-1" />
                Fiction
            </label>
        </div>
    )
}