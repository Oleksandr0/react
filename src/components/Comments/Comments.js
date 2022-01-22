import React, {useEffect, useState} from 'react';

import Comment from "./Comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value);
            })
    },[])

    return (
        <div>
            <ul>
                {
                    comments.map(value => <li key={value.id}><Comment item={value}/></li>)
                }
            </ul>
        </div>
    );
};

export default Comments;


