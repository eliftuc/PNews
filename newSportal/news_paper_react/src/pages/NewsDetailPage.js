import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';
import Header from '../components/Header';

const NewsDetailPage = () => {
    const { id } = useParams();
    const [news, setNews] = useState(null);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            const response = await API.get(`/news/${id}/`);
            setNews(response.data);
        };

        fetchNewsDetail();
    }, [id]);

    if (!news) return <div>Loading...</div>;

    return (
        <div>
            <Header />
            <h1>{news.title}</h1>
            <img src={news.image} alt={news.title} />
            <p>{news.body}</p>
        </div>
    );
};

export default NewsDetailPage;
