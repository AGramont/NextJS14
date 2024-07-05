import { getPeople } from "@/lib/db/peopleDB";
import Link from "next/link";
import DeletePersonAction from "@/components/action-buttons/delete-person"

export default async function PeopleList() {

    // This is still server-side
    const people = await getPeople();   

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { people.map(p => (
                    <tr key={p.id}>
                        <td>{p.firstname}</td>
                        <td>{p.lastname}</td>
                        <td>{p.age}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                        <td className="button-ribbon-left">
                            <DeletePersonAction personId={p.id} />
                            <Link href={`/people/${p.id}`} className="as-button">Edit</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}