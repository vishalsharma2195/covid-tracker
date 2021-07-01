import React, {useState, useEffect} from 'react';
import './content.scss';
import axios from 'axios';
import globe from './globe.png';


function Content() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .get('https://corona.lmao.ninja/v2/all')
        .then(response => {
            // console.log(response);
            setData(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [])

    // console.log(data);

    return (
        <div className='content' id='content'>
            <div className="img-container">
                <img src={globe} alt="" />
                <h2>Covid-19 Cases Worldwide</h2>
            </div>
            <div className="container"> 
                    <div className="item one">
                        <ul>
                            <h2>Total Cases: </h2>
                            <li>{data.cases}</li>
                            </ul>
                    </div>
                <div className="item two">
                    <ul>
                        <h2>Total Deaths:</h2>
                        <li>{data.deaths}</li>
                    </ul>
                </div>
                <div className="item three">
                    <ul>
                        <h2>Total Active Cases:</h2>
                        <li>{data.active}</li>
                    </ul>
                </div>
                <div className="item four">
                    <ul>
                        <h2>Total Recovered :</h2>
                        <li>{data.recovered}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Content
