"use client";
import styles from "./delete-person.module.css";

export default function DeleteUserActionButton() {

    const deleteHandler = () => {
        console.log("delete");
    }

    return (
        <button type="button" onClick={deleteHandler} className={styles.deleteButton}>Delete</button>
    )
}