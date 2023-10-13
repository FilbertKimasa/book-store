import React from 'react';
import { useSelector } from 'react-redux';

function BookCategory() {
  const category = useSelector((state) => state.categories.categories);
  return <div>{category}</div>;
}

export default BookCategory;
