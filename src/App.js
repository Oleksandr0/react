import React, {useEffect, useState} from 'react';
import User from "./components/User";

const App = () => {
    let [userList, setUserList] = useState([]);

    useEffect(() =>{
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {
                    setUserList(users)
                })
        }

    )
    return (
        <div>
            {userList.map(value => <User id={value.id} name = {value.name} username={value.username}/>)}
        </div>
    );
};

export default App;