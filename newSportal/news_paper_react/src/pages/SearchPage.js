import React, { useState } from 'react';
import API from '../api';
import NewsItem from '../components/NewsItem';
import Header from '../components/Header';

const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        e.preventDefault();
        const response = await API.get(`/news/?search=${query}`);
        setResults(response.data);
    };

    return (
        <div>
            <Header />
            <h1>Search News</h1>
            <form onSubmit={handleSearch}>
                <input
                    type="text"
                    placeholder="Search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="news-list">
                {results.map((item) => (
                    <NewsItem key={item.id} news={item} />
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
