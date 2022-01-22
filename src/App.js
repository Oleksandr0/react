import React, {useEffect, useState} from 'react';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";
import Comments from "./components/Comments/Comments";
import './App.css';

const App = () => {

    return (
        <div>
            <div className='usersPosts'>
                <Users/>
                <Posts/>
            </div>

            <hr/>
            <Comments/>
        </div>
    );
};

export default App;