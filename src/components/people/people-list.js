import { getPeople } from "@/lib/peopleDB";
import Link from "next/link";
import DeletePersonAction from "@/components/action-buttons/delete-person"

export default async function PeopleList() {

    // This is still server-side
    const people = await getPeople();   

    return (
        <table>
            <thead>
                <tr>
                    <th>Key</th>
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
                    <tr key={p.key}>
                        <td>
                            <Link href={`/items-suspense/${p.key}`}>
                                {p.key}
                            </Link>
                            </td>
                        <td>{p.firstname}</td>
                        <td>{p.lastname}</td>
                        <td>{p.age}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                        <td>
                            <DeletePersonAction />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}