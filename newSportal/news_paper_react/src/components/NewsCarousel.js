import React from 'react';
import { Carousel } from 'react-bootstrap';

const NewsCarousel = ({ news }) => {
  return (
    <Carousel>
      {news.map((item) => {
        const imageUrl = item.image.startsWith('http') ? item.image : `http://127.0.0.1:8000${item.image}`;
        return (
          <Carousel.Item key={item.id}>
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url(${imageUrl})`,
                height: '500px',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.body.substring(0, 100)}...</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default NewsCarousel;
