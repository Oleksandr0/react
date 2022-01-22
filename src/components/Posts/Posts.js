import React, {useEffect, useState} from 'react';
import Post from "./Post";


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })
    },[])

    return (
        <div>
            <ul>
                {
                    posts.map(value => <li key={value.id}><Post item={value}/></li>)
                }
            </ul>
        </div>
    );
};

export default Posts;