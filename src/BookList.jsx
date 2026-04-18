export default function BookList({ books }) {
    return (
        <div>
            { books.map(book => (
                <div className="p-3 m-3 border-b border-gray-400">
                    <h3 className="text-xl">{book.volumeInfo.title}</h3>
                    <h4 className="text-lg italic">{book.volumeInfo.authors}</h4>
                    <h4>{book.volumeInfo.categories}</h4>
                </div>
            ))}
        </div>
    )
}