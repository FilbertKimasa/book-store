import { Route, Routes } from 'react-router-dom';
import BooksLogic from './components/BooksLogic';
import Navigation from './components/Navigation';
import BookCategory from './components/BookCategory';
import './styles/App.css';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<BooksLogic />} />
        <Route path="/books" element={<BooksLogic />} />
        <Route path="/category" element={<BookCategory />} />
      </Routes>
    </>
  );
}

export default App;
