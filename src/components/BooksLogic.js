import BookList from './BookList';
import ImputBook from './ImputBook';

function BooksLogic() {
  const books = [
    {
      id: 1,
      title: 'Things Fall Apart',
    },
    {
      id: 2,
      title: 'Think Like a Man',
    },
    {
      id: 3,
      title: 'C++ Primer 5th Edition',
    },
  ];
  return (
    <div>
      <BookList booksProps={books} />
      <ImputBook />
    </div>
  );
}

export default BooksLogic;
