import React, {useState, useEffect} from 'react';
import './country.scss';

function Country() {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        fetch('https://corona.lmao.ninja/v2/countries?sort=country')
        .then(response => response.json())
        .then(data => {
        console.log(data);
        setInfo(data);
        })
       .catch(error => {
           console.log(error);
       })
    }, [])
    return (
        <div className='country'>
            <h2>Countries</h2>
            
           <div className="container">
             {info.map((item, id) => (
                <div className="item-container" key={id}>
                    <div className="img-container">
                        <img src={item.countryInfo.flag} alt="Country Flag" />
                    </div>
                    <ul>
                        <li>Country: {item.country}</li>
                        <li>Cases: {item.cases}</li>
                        <li>Deaths: {item.deaths}</li>
                        <li>Active: {item.active}</li>
                        <li>Recovered: {item.recovered}</li>
                    </ul>
                    </div>          
            ))}
            </div>
                    
            
        </div>
    )
}

export default Country
