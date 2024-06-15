import { getPeople } from "@/lib/peopleDB"

export const metadata = {
    title: "List of People",
    description: "A list of people using the scoped loading page",
  };

export default async function ListPage() {

    const people = await getPeople();    

    return <main>
        <h1>People</h1>
        <hr />

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
                        <td>{p.key}</td>
                        <td>{p.firstname}</td>
                        <td>{p.lastname}</td>
                        <td>{p.age}</td>
                        <td>{p.email}</td>
                        <td>{p.phone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </main>
}