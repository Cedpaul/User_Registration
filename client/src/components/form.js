import { useForm } from "react-hook-form";

const Form = (props) => {

    const {insertToDB} = props;

    const {register, handleSubmit} = useForm();

    const onSubmit = handleSubmit((data) => {
        insertToDB(data);
    })

    return (
        <div>
           <form onSubmit={onSubmit}>
                 <div className="form-group">
                         <label htmlFor="text"> First Name: </label>
                         <input className="form-control" {...register('fName', { required: true })} name="fName"></input>

                         <label htmlFor="text"> Middle Name: </label>
                         <input className="form-control" {...register('mName', { required: true })} name="mName"></input>

                         <label htmlFor="text"> Last Name: </label>
                         <input className="form-control" {...register('lName', { required: true })} name="lName"></input>

                         <label htmlFor="text"> Age: </label>
                         <input type= "number"className="form-control" {...register('age', { required: true })} name="age"></input>

                         <label htmlFor="text"> Street Address: </label>
                         <input className="form-control" {...register('stAdd', { required: true })} name="stAdd"></input>

                         <label htmlFor="text"> City: </label>
                         <input className="form-control" {...register('city', { required: true })} name="city"></input>

                         <label htmlFor="text"> Phone Number: </label>
                         <input className="form-control" {...register('phoneNum', { required: true })} name="phoneNum" ></input>

                     </div>
                     <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Save user
                        </button>
                     </div>
                 </form>
        </div>
    )
}

export default Form