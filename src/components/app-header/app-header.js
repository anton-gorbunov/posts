import React from 'react';
import './app-header.css';

const AppHeader = ({allPosts,likes}) => {
    return (
        <div className="app-header d-flex">
            <h1>Alex Smith</h1>
            <h2>{allPosts} записей, из них {likes} понравилось</h2>
        </div>
    )
}

export default AppHeader;