"use client";
import React, { useState, useEffect } from "react";
import NewsElement from "./newselement";
import axios from "axios";
import './newselement.css';

const NewsCatalogue = () => {
    const [topic, setTopic] = useState("school");
    const [articles, setArticles] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const getArticles = async () => {
            try {
                const response = await axios.get(
                    `https://newsapi.org/v2/everything?q=${topic}&apiKey=322f3e7c5d3c4f13b93adf10d05b61df`
                );
                if (response.data.articles.length === 0) {
                    setErrorMessage("No articles found. Try another search term.");
                } else {
                    setArticles(response.data.articles);
                    setErrorMessage(""); // Clear any previous error message
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
                setErrorMessage("Failed to fetch articles. Please try again.");
            }
        };
        getArticles();
    }, [topic]);

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchTerm.trim() === "") {
            setErrorMessage("Please enter a search term.");
            return;
        }
        setTopic(searchTerm);
    };

    const handleNavClick = (newTopic) => {
        setTopic(newTopic);
        setIsDropdownOpen(false);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="main">
            <header className="news-header">
                <h1>NewsWeb</h1>
                <form onSubmit={handleSearch} className="search-form">
                    <input 
                        type="text" 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)} 
                        placeholder="Search news..." 
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
                <nav className="nav">
                    <a href="#" onClick={() => handleNavClick('top stories')}>Top Stories</a>
                    <a href="#" onClick={() => handleNavClick('local')}>Local</a>
                    <a href="#" onClick={() => handleNavClick('climate')}>Climate</a>
                    <a href="#" onClick={() => handleNavClick('world')}>World</a>
                    <a href="#" onClick={() => handleNavClick('canada')}>Canada</a>
                    <a href="#" onClick={() => handleNavClick('politics')}>Politics</a>
                    <a href="#" onClick={() => handleNavClick('indigenous')}>Indigenous</a>
                    <a href="#" onClick={() => handleNavClick('business')}>Business</a>
                    <a href="#" onClick={toggleDropdown} className="dropdown-toggle">More</a>
                    {isDropdownOpen && (
                        <div className="dropdown-menu">
                            <a href="#" onClick={() => handleNavClick('health')}>Health</a>
                            <a href="#" onClick={() => handleNavClick('entertainment')}>Entertainment</a>
                            <a href="#" onClick={() => handleNavClick('science')}>Science</a>
                            <a href="#" onClick={() => handleNavClick('cbc news investigates')}>CBC News Investigates</a>
                            <a href="#" onClick={() => handleNavClick('go public')}>Go Public</a>
                            <a href="#" onClick={() => handleNavClick('about cbc news')}>About CBC News</a>
                            <a href="#" onClick={() => handleNavClick('being black in canada')}>Being Black in Canada</a>
                        </div>
                    )}
                </nav>
            </header>
            <div className="news-grid">
                {articles.map((article) => (
                    <NewsElement
                        key={article.url}
                        title={article.title}
                        description={article.description}
                        url={article.url}
                        image={article.urlToImage}
                    />
                ))}
            </div>
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-logo">
                        <img src="/path/to/cbc-logo.png" alt="NewsWeb Logo" />
                    </div>
                    <div className="footer-text">
                        ©2024 NewsWeb. All rights reserved.
                    </div>
                    <div className="footer-link">
                        <a href="www.google.com">Visitez google</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default NewsCatalogue;
