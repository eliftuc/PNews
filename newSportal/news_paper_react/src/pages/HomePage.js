import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../redux/slices/newsSlice';
import NewsCard from '../components/NewsCard';
import NewsCarousel from '../components/NewsCarousel';
import AppNavbar from '../components/Navbar';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

const HomePage = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.news.items);
  const status = useSelector((state) => state.news.status);

  useEffect(() => {
    dispatch(fetchNews());
  }, [dispatch]);

  return (
    <div>
      <AppNavbar />
      {status === 'loading' ? (
        <Spinner animation="border" role="status">
          <span className="sr-only">Loading...</span>
        </Spinner>
      ) : (
        <>
          <NewsCarousel news={news.slice(0, 5)} />
          <Container>
            <Row>
              {news.map((item) => (
                <Col key={item.id} md={4}>
                  <NewsCard news={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </div>
  );
};

export default HomePage;
