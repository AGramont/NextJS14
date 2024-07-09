"use client";
import { useForm } from 'react-hook-form';
import Divider from '../format/divider';
import { createPersonAction, editPersonAction } from '@/lib/actions/people-actions';
import { useRouter } from "next/navigation";
import { useMemo, useState } from 'react';

export default function PeopleEdit({person}) {

    const isNew = useMemo(() => !Boolean(person?.id), [person]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, formState: {errors} } = useForm({
        defaultValues: person
    });
    const router = useRouter();
    

    const onSubmit = async (data) => {
        setIsSubmitting(true);
        const d = {...data, age: Number(data.age), active: 1}
        if (isNew) {
            const result = await createPersonAction(d);
            console.log("Created person: ", result.data);
        } else {
            const result = await editPersonAction({...d, id: person.id});
            console.log("Edited  person: ", result.data);
        }
        router.push('/people');
        setIsSubmitting(false);
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
            {errors.phone && errorMessage(errors.phone.message)}
        </div>
        <Divider />
        <div>
            <button type="submit" className="call-to-action" disabled={isSubmitting}>{
                isNew ? "Create" : "Update"
                }</button>
        </div>
    </form>
    </>
}