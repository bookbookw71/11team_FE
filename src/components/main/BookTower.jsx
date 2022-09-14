import BookItem from "./BookItem";

const BookTower = ({ books }) => {
  return (
    <div className="flex flex-col-reverse min-h-[500px]">
      {books.map((book) => {
        return (
          <BookItem key={book.id} title={book.title} height={book.height} />
        );
      })}
    </div>
  );
};

export default BookTower;
