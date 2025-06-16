import React, { useState } from 'react'

function Form() {
    const [formData, setFormData] = useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            feedback: "",
            isVisible: false,
            mode: "",
            favCar: ""
        }
    )

    // console.log(formData); // isme formdata ek obj hai
    // console.log(setFormData);  // ye ek function hai 

    function changeHandler(e) {
        const { name, value, checked, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }))


    }
    function submitHandler(event){
        event.preventDefault();
        console.log(formData)
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input type="text" name='firstName' placeholder='enter first name' onChange={changeHandler} value={formData.firstName} />
                <br />
                <input type="text" name='lastName' placeholder='enter last name' onChange={changeHandler} value={formData.lastName} />
                <br />
                <input type="email" name='email' placeholder='enter email' onChange={changeHandler} value={formData.email} />
                <br />
                <textarea name="feedback" placeholder='give your feedback' onChange={changeHandler} value={formData.feedback}></textarea>
                <br />
                <input type="checkbox" name="isVisible" id="isVisible" onChange={changeHandler} checked={formData.isVisible} />
                <label htmlFor="isVisible">am i visible ?</label>
                <br />
                <br />
                <fieldset>
                    <legend>mode:</legend>
                    <input type="radio" name="mode" id='online-mode' value="online mode" checked={formData.mode === "online mode"} onChange={changeHandler} />
                    <label htmlFor="online-mode">online mode</label>
                    <br />
                    <input type="radio" name="mode" id='offline-mode' value="offline mode" checked={formData.mode === "offline mode"} onChange={changeHandler} />
                    <label htmlFor="offline-mode">offline mode</label>
                </fieldset>

                <br />
                <select name="favCar" onChange={changeHandler} id='favCar' value={formData.favCar}>
                    <option value="" disabled>----select your favourite car----</option>
                    <option value="scorpio">scorpio</option>
                    <option value="maruti">maruti</option>
                    <option value="lamburgini">lamburgini</option>
                    <option value="farari">farari</option>
                </select>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default Form
