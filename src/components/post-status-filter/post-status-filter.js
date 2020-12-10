import React from 'react';
import './post-status-filter.css';

const PostStatusFilter = () => {
    return (
        <div className="btn-group">
            <button className="btn btn-outline-secondary">Все</button>
            <button className="btn btn-outline-secondary">Понравилось</button>
        </div>
    )
}

export default PostStatusFilter;