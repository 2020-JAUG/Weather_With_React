import React from 'react';
import PropTypes from 'prop-types';


const Clime = ({result}) => {

    //Extract the values
    const { name, main, coord } = result;

    if(!name) return null;

    const kelvin = 273.15;

    return (
        <div className='card-panel white col s12'>
            <div className='black-text'>
                <h2>The climate of {name} is: </h2>
                <p className='temperatura'>
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
                </p>
                 <p>Maximum temperature:
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>Minimum temperature:
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(2) } <span> &#x2103; </span>
                </p>
                <p>Humidity:
                    { ( main.humidity ) } <span> &#37; </span>
                </p>
                <p>Pressure:
                    { ( main.pressure ) } <span> &#104;&#80;&#97; </span>
                </p>
                <p>Lat:
                    { parseFloat( coord.lat ).toFixed(2) } <span> &#176;&#78; </span>
                </p>
                <p>Lon:
                    { parseFloat( coord.lon ).toFixed(2) } <span> &#176;&#69; </span>
                </p>
            </div>
        </div>
     );
}

Clime.prototype = {
    result: PropTypes.object.isRequired
}

export default Clime;