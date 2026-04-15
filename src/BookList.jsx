export default function BookList({ books }) {
    return (
        <div>
            { books.map(book => (
                <div className="p-3 m-3 border-b border-gray-400">
                    <h3 className="text-xl">{book.title}</h3>
                    <h4 className="text-lg italic">{book.author}</h4>
                    <h4>{book.genre}</h4>
                    <p className="pt-1">{book.description}</p>
                </div>
            ))}
        </div>
    )
}