import React, {useEffect, useState} from 'react';

import Flight from "./Flight";

const Flights = () => {

    let [flightList, setFlightList] = useState([])
    useEffect(()=>{
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(flights => {
                let filter = flights.filter(flight => flight.launch_year !== '2020')
                setFlightList(filter);
            });
    },[])
    return (
        <div>
            {
                flightList.map(value => <Flight key={value.flight_number} item={value}/>)
            }
        </div>
    );
};

export default Flights;