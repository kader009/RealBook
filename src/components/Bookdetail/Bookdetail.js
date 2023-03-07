import React from 'react';
import { Link, useLoaderData } from 'react-router-dom'; 
import './Bookdetail.css'


const Bookdetail = () => {

  //todo: useloader for data

  const data = useLoaderData();
  const {title, authors, image_url, description, genre_list, rating, rating_count
  } = data;

  
  
  return (
    <div className='detail mb-4'>
      <div >
      <Link className='text-decoration-none btn btn-dark' size='sm'  to={'/'}>Go Back</Link>
      </div>
      <div className='img'><img src={image_url} alt="" /></div>
      <div className='width'>
        <h5 className='text-primary'>Book name : {title}</h5>
        <p className='text-success h6'>Author : {authors}</p>
        <p className='text-secondary fs-6'>Genre : {genre_list}</p>
        <p className='text-secondary'>Description : {description.slice(0,600) + '...'}</p>
        <p className=' fw-bold'>Rating : {rating}</p>
        <p className='fw-bold'>Count-sale : {rating_count}</p>
        </div>
    </div>
  );
};

export default Bookdetail;