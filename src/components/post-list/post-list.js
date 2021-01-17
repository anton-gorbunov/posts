import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts,onDelete, onToggleLiked, onToggleImportant}) => {

    const elements = posts.map(item => {
        const {id,...itemProps} = item;
        return (
            <li key={id} className="list-group-item">
                <PostListItem
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                  {...itemProps}
                />
            </li>
        )
    })

    return (
        <ul className="list-group app-list">
            {elements}
        </ul>
    )
}

export default PostList;