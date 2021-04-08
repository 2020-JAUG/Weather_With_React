import React, { useState } from 'react'

const Formulary = () => {

    //States
    const [lookFor, setLookFor] = useState ({
        ciudad: '',
        pais: ''
    });

    const [error, setError] = useState (false);

    //Destructuring
    const {ciudad, pais} = lookFor;

    //To put the elements in the state
    const handleChange = e => {
        setLookFor({
            ...lookFor,
            [e.target.name] : e.target.value
        });
    }

    const handleSubmit = e => {
        e.preventDefault();

        //To validate
        if(ciudad.trim() === '' || pais.trim === '') {
            setError(true);
            return;
        }

        setError(false);

        //Pass it to the main component


    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            { error ? <p className="red darken-4 error">All fields are required</p> : null }
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

            <div className="input-field col s12">
                <button
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-5 col s12"
                    >Look for Weather
                </button>
            </div>
        </form>
     );
}

export default Formulary;