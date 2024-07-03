"use client";
import styles from "./delete-person.module.css";
import { deletePerson } from "@/lib/actions/people-actions";
import { useAction } from "next-safe-action/hooks";

export default function DeleteUserActionButton({personId}) {

    const { execute, result, isExecuting } = useAction(deletePerson);

    const deleteHandler = async () => {
        console.log("delete person ", personId);
        execute(personId);
    }

    return (
        <button type="button" onClick={deleteHandler} className={styles.deleteButton}>Delete</button>
    )
}