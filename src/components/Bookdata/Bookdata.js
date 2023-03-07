import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Bookdata.css'

const Bookdata = ({data}) => {

  //todo: data destructure and show here...

  const {title, authors, image_url, id} = data;

  return (
    <div className='mb-4'>
      <Card style={{ width: '22rem', height:'32rem' }}>
      <Card.Img variant="top" src={image_url} className='img-fluid' id='img' sizes="(max-width: 600px) 480px,
        800px"/>
      <Card.Body>
        <Card.Title> <h6>Book: {title}</h6></Card.Title>
        <Card.Text>
          <small className=' fw-semibold'>Author: {authors}</small>
        </Card.Text>
        <Link to={`/detail/${id}`}>
        <Button variant="outline-dark">Book Detail</Button>
        </Link>
      </Card.Body>
    </Card>

    </div>
  );
};

export default Bookdata;