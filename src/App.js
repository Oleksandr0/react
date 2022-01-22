import React, {useEffect, useState} from 'react';

import './App.css';
import Comments from "./components/Comments/Comments";
import Posts from "./components/Posts/Posts";
import Users from "./components/Users/Users";

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