import React, {useEffect, useState} from 'react'

export const FormEdit = (props) => {

    const {editUser, infoToEdit} = props;
    const [id, setId] = useState(null);
    const [fName, setFName] = useState(null);
    const [mName, setMName] = useState(null);
    const [lName, setLName] = useState(null);
    const [age, setAge] = useState(null);
    const [stAddress, setAddress] = useState(null);
    const [city, setCity] = useState(null);
    const [phoneNumber, setPhoneNumber] = useState(null);

    useEffect(() => {
        setId(infoToEdit._id);
        setFName(infoToEdit.firstName);
        setMName(infoToEdit.middleName);
        setLName(infoToEdit.lastName);
        setAge(infoToEdit.age);
        setAddress(infoToEdit.stAddress);
        setCity(infoToEdit.city);
        setPhoneNumber(infoToEdit.phoneNumber);
    }, [])
    
    const onSubmit = (e) => {
        e.preventDefault();
        editUser({id, fName, mName, lName, age, stAddress, city, phoneNumber});
    }

    return (
        <div>
           <form onSubmit={onSubmit}>
                 <div className="form-group">
                         <label htmlFor="text"> First Name: </label>
                         <input className="form-control" value={fName} onChange={(e) => setFName(e.target.value)} name="fName"></input>

                         <label htmlFor="text"> Middle Name: </label>
                         <input className="form-control" value={mName} onChange={(e) => setMName(e.target.value)} name="mName"></input>

                         <label htmlFor="text"> Last Name: </label>
                         <input className="form-control" value={lName} onChange={(e) => setLName(e.target.value)} name="lName"></input>

                         <label htmlFor="text"> Age: </label>
                         <input type= "number"className="form-control" value={age} onChange={(e) => setAge(e.target.value)} name="age"></input>

                         <label htmlFor="text"> Street Address: </label>
                         <input className="form-control" value={stAddress} onChange={(e) => setAddress(e.target.value)} name="stAdd"></input>

                         <label htmlFor="text"> City: </label>
                         <input className="form-control" value={city} onChange={(e) => setCity(e.target.value)} name="city"></input>

                         <label htmlFor="text"> Phone Number: </label>
                         <input className="form-control" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phoneNum" ></input>

                     </div>
                     <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Update user
                        </button>
                     </div>
                 </form>
        </div>
    )
}
