import React, {useState, useEffect} from 'react';
import Cloud1 from './cloud1.png'
import Cloud2 from './cloud2.png'
import Cloud3 from './cloud3.png'

let Cloud = (props) => {
    let [cloudList, setCloudList] = useState([Cloud1, Cloud2, Cloud3])

    let randomCloud = () => {
        let randNum = Math.random()

        return cloudList[Math.floor(randNum * cloudList.length)]
  
    }
return (
    <div className="cloud-div">
        <img className="cloud-img" src={randomCloud()} alt="cloud"/>
        <h1 className="brand-name">Brand Name</h1>
    </div>
)
}

export default Cloud;