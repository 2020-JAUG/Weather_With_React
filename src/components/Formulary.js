import React, { useState } from 'react'

const Formulary = () => {

    const [lokkFor, setLookFor] = useState ({
        ciudad: '',
        pais: ''
    });

    return ( 
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                />
                <label htmlFor="ciudad">City: </label>
            </div>

            <div className="input-field col s12">
                <select name="pais">
                    <option value="">-- Select a Country --</option>
                        <option value="VE">Venezuela</option>
                        <option value="PH">Philippines</option>
                        <option value="US">United States of America</option>
                        <option value="ES">Spain</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CR">Costa Rica</option>
                        <option value="JP">Japan</option>
                </select>
                <label htmlFor="pais">Country: </label>
            </div>
        </form>
     );
}
 
export default Formulary;