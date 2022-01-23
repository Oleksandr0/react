import React from 'react';

const Post = ({post: {id, userId, title, body}}) => {
    return (
        <div style={{paddingLeft: '20px'}}>
            <div><b>id:</b> {id}</div>
            <div><b>user id:</b> {userId}</div>
            <div><b>title:</b> {title}</div>
            <div><b>body:</b> {body}</div>
        </div>
    );
};

export default Post;