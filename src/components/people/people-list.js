import { getPeople } from "@/lib/peopleDB";
import Link from "next/link";

export default async function PeopleList() {

    // This is still server-side
    const people = await getPeople();   

    return (
        <table>
            <thead>
                <tr>
                    <td>Key</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Age</td>
                    <td>Email</td>
                    <td>Phone</td>
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
                    </tr>
                ))}
            </tbody>
        </table>
    )
}