import { getPeople } from "@/lib/db/peopleDB";
import Link from "next/link";

export default async function PeopleList() {

    // This is still server-side
    const people = await getPeople();   

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                { people.map(p => (
                    <tr key={p.id}>
                        <td>{p.firstname}</td>
                        <td>{p.lastname}</td>
                        <td>
                            <Link href={`/people/${p.id}`} className="as-button">View</Link>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}