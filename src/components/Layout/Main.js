import React from 'react';
import { Outlet } from 'react-router-dom';
import BookList from '../Booklist/BookList';
import Header from '../Header/Header';


const Main = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <BookList></BookList>
    </div>
  );
};

export default Main;