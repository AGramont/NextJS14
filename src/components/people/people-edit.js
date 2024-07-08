"use client";
import { useForm } from 'react-hook-form';
import Divider from '../format/divider';
import { createPersonAction } from '@/lib/actions/people-actions';
import { useRouter } from "next/navigation";

export default function PeopleEdit({id}) {

    const isNew = id === 'new';
    const { register, handleSubmit, formState: {errors} } = useForm();
    const router = useRouter();

    const onSubmit = async (data) => {
        const d = {...data, age: Number(data.age), active: 1}
        console.log("Submitting: ", d);
        if (isNew) {
            const response = await createPersonAction(d);
            router.push('/people');
        }
    }
    const errorMessage = (message) => {
        return <div className="text-danger">{message}</div>
    }

    return <>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
            <label className="required">First Name</label>
            <input {...register("firstname", {
                required: 'First Name is required'
            })} autoFocus={true} />
            {errors.firstname && errorMessage(errors.firstname.message)}
        </div>
        <div className="form-group">
            <label className="required">Last Name</label>
            <input {...register("lastname", {
                required: 'Last Name is required'
            })}  />
            {errors.lastname && errorMessage(errors.lastname.message)}
        </div>
        <div className="form-group">
            <label className="required">Age</label>
            <input {...register("age", {
                required: 'Age is required',
                min: {
                    value: 1,
                    message: 'Age must be between 1 and 120'
                },
                max: {
                    value: 120,
                    message: 'Age must be between 1 and 120'
                }
            })}  type="number" />
            {errors.age && errorMessage(errors.age.message)}
        </div>
        <div className="form-group">
            <label>Email</label>
            <input {...register("email", {
                pattern: { 
                    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                    message: 'Email must be in a valid format'
                }
            })}  />
            {errors.email && errorMessage(errors.email.message)}
        </div>
        <div className="form-group">
            <label>Phone Number</label>
            <input {...register("phone", {
                pattern: { 
                    value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    message: 'Phone Number must be valid'
                }
            })}  />
            {errors.phonenumber && errorMessage(errors.phonenumber.message)}
        </div>
        <Divider />
        <div>
            <button type="submit" className="call-to-action">{
                isNew ? "Create" : "Update"
                }</button>
        </div>
    </form>
    </>
}