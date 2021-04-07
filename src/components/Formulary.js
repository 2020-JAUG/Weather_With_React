import React from 'react'

const Formulary = () => {
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
                </select>
                <label htmlFor="pais">Country: </label>
            </div>
        </form>
     );
}
 
export default Formulary;