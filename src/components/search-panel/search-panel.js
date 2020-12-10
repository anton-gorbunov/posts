import React from 'react';
import './search-panel.css';

const SerchPanel = () => {
    return (
        <input
            className="form-control search-input"
            type="text"
            placeholder="Поиск по записям"
        />
    )
}

export default SerchPanel;