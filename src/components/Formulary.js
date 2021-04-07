import React, { useState } from 'react'

const Formulary = () => {

    const [lookFor, setLookFor] = useState ({
        ciudad: '',
        pais: ''
    });

    //Destructuring
    const {ciudad, pais} = lookFor;

    //To put the elements in the state
    const handleChange = e => {
        setLookFor({
            ...lookFor,
            [e.target.name] : e.target.value
        });
    }

    return ( 
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={handleChange}
                />
                <label htmlFor="ciudad">City: </label>
            </div>

            <div className="input-field col s12">
                <select 
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={handleChange}
                    >
                        
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