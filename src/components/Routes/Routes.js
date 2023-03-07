import { createBrowserRouter } from "react-router-dom";
import Bookdetail from "../Bookdetail/Bookdetail";
import BookList from "../Booklist/BookList";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>
  },
  {
    path: '/books',
    element: <BookList></BookList>
  },
  {
    path: '/detail/:Id',
    element: <Bookdetail></Bookdetail>,
    loader: ({params}) => { return fetch(`https://example-data.draftbit.com/books/${params.Id}`)}
  },
])