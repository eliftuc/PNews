import React from 'react';
import { Card, Button } from 'react-bootstrap';

const NewsCard = ({ news }) => {
  const imageUrl = news.image.startsWith('http') ? news.image : `http://127.0.0.1:8000${news.image}`;
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{news.title}</Card.Title>
        <Card.Text>{news.body.substring(0, 100)}...</Card.Text>
        <Button variant="primary">Read More</Button>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
