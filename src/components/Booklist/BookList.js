import React from 'react';
import axios from 'axios'
import { useState } from 'react';
import Bookdata from '../Bookdata/Bookdata';
import './Booklist.css'



const BookList = () => {
  const [datas, setdata] = useState([]); 

  //todo:  data fetching here
  
  axios.get(`https://example-data.draftbit.com/books?_limit=20`) 
  .then(res => setdata(res.data))
  .catch(error => console.error(error))

  return (
    <div className='container'>
      {
        datas.map(data => <Bookdata data={data} key={data.id}></Bookdata>)
      }
    </div>
  );
};

export default BookList;