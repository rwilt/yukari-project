import React, {useState, useEffect} from 'react';
import Cloud1 from './cloud1.png'
import Cloud2 from './cloud2.png'
// import Cloud3 from './cloud3.png'

let Cloud = (props) => {
    let [cloudList, setCloudList] = useState([Cloud1])
console.log(props, "props from cloud")


    let randomCloud = () => {
          let randNum = Math.random()
          
          return cloudList[Math.floor(randNum * cloudList.length)]
    }

    let randomClass = () => {
        let classNames = ['cloud-div1', 'cloud-div2','cloud-div1', 'cloud-div2','cloud-div1', 'cloud-div2']
        let randNum = Math.random()

        return classNames[Math.floor(randNum * classNames.length)]
    }
return (
    <div className={randomClass()}>
        <img className="cloud-img" src={randomCloud()} alt="cloud"/>
        <h1 className="brand-name">{props.name}</h1>
    </div>
)
}

export default Cloud;