import React, {useState, useEffect} from 'react';
import Cloud from './Clouds';
import Cloud1 from './cloud1.png'
import Cloud2 from './cloud2.png'
import Cloud3 from './cloud3.png'


let Clients = (props) => {
    

    return (
        // this is the clients page which will render all of the cloud divs
        <div className="client-page">
            <h1>Hello!!!!!!!</h1>
         <Cloud/>
        </div>
    )
};

export default Clients;