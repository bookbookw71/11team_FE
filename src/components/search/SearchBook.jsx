import tw from "tailwind-styled-components";
import { useNavigate } from "react-router-dom";

const SearchBook = ({ title, author, imageUrl, content }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate("/post", { state: { title, imageUrl } });
  };

  return (
    <BookContainer onClick={goDetail}>
      <BookImage src={imageUrl} alt="BookCover" />
      <BookContent>
        <BookTitle>{title}</BookTitle>

        <BookAuthor>{author}</BookAuthor>

        <BookIntro>
          {content.length < 100 ? content : content.slice(0, 80) + "..."}
        </BookIntro>
      </BookContent>
    </BookContainer>
  );
};

const BookContainer = tw.div`
flex
flex-col
items-center
bg-white
rounded-lg
border
shadow-md
md:flex-row
md:max-w-2xl
hover:bg-gray-100
my-2
justify-center
`;

const BookImage = tw.img`
    object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg 
`;

const BookContent = tw.div`
flex flex-col justify-between p-4 leading-normal
    `;

const BookTitle = tw.h5`
mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white
`;

const BookAuthor = tw.h5`
mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white
`;

const BookIntro = tw.p`
mb-3 font-normal text-gray-700 dark:text-gray-400
`;

export default SearchBook;
