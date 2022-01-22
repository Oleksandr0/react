import React from 'react';

const Flight = ({item: value}) => {
    return (
        <div className='flightList'>
            <div className='mission'>
                <h1>{value.mission_name}</h1>
                <p>{value.launch_year}</p>
            </div>
             <img src={value.links.mission_patch} alt="mission_patch"/>
        </div>
    );
};

export default Flight;