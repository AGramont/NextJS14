"use client";
import styles from "./delete-person.module.css";
import { deletePerson } from "@/lib/actions/people-actions";
import { useAction } from "next-safe-action/hooks";

export default function DeletePersonActionButton({personId}) {

    const { execute, result, isExecuting } = useAction(deletePerson);

    const deleteHandler = async () => {
        if(confirm("Are you sure you want to delete this person?")) {
            console.log("delete person ", personId);
            execute(personId);
        }
    }

    return (
        <button type="button" onClick={deleteHandler} className="danger">Delete</button>
    )
}