"use client";
import { useForm } from 'react-hook-form';

export default function PeopleEdit({id}) {

    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log("Submitting: ", data);
    }

    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label>First Name</label>
            <input {...register("firstname")} />
        </div>
        <div className="form-group">
            <label>Last Name</label>
            <input {...register("lastname")}  />
        </div>
        <div className="form-group">
            <label>Age</label>
            <input {...register("age")}  type="number" min="1" max="120" />
        </div>
        <div className="form-group">
            <label>Email</label>
            <input {...register("email")}  />
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input {...register("phonenumber")}  />
        </div>
        <div>
            <button type="submit" className="call-to-action">{
                id === 'new' ? "Create" : "Update"
                }</button>
        </div>
    </form>
    </>
}