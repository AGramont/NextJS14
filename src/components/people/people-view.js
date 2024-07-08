import Link from "next/link";
import DeletePersonAction from "@/components/action-buttons/delete-person";


export default function ViewPerson({person}) {
    return <>
        <div className="display-group">
            <label>First Name</label>
            <span>{person.firstname}</span>
        </div>
        <div className="display-group">
            <label>Last Name</label>
            <span>{person.lastname}</span>
        </div>
        <div className="display-group">
            <label>Age</label>
            <span>{person.age}</span>
        </div>
        <div className="display-group">
            <label>Email</label>
            <span>{person.email ?? "[EMPTY]"}</span>
        </div>
        <div className="display-group">
            <label>Phone Number</label>
            <span>{person.phone ?? "[EMPTY]"}</span>
        </div>
        <div className="button-ribbon-left">
            <DeletePersonAction personId={person.id} />
            <Link href={`/people/${person.id}/edit`} className="as-button">Edit</Link>
        </div>
    </>
}