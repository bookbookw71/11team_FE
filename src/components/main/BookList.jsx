import tw from "tailwind-styled-components";
import BookCard from "./BookCard";

const BookList = ({ books }) => {
  console.log(books);

  return (
    <BookListContainer>
      <BookCard />
      {books.map((book) => {
        return <BookCard book={book} />;
      })}
    </BookListContainer>
  );
};

export default BookList;

const BookListContainer = tw.div`
grid grid-cols-4 gap-4
`;
