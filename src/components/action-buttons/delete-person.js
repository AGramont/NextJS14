"use client";
import { deletePersonAction } from "@/lib/actions/people-actions";
import { useRouter } from "next/navigation";

export default function DeletePersonActionButton({personId}) {

    const router = useRouter();

    const deleteHandler = async () => {
        if(confirm("Are you sure you want to delete this person?")) {
            try {
            const result = await deletePersonAction(Number(personId))
            console.log("delete complete");
            router.push("/people");
            } catch (e) {
                console.error(e);
            }
            
        }
    }

    return (
        <button type="button" onClick={deleteHandler} className="danger">Delete</button>
    )
}