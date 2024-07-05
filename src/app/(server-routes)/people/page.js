import SubTitle from "@/components/format/sub-title";
import PeopleList from "@/components/people/people-list";
import { getPeople } from "@/lib/db/peopleDB"
import Link from "next/link";

export const metadata = {
    title: "People",
    description: "A list of people using the scoped loading page",
  };

export default async function ListPage() {

    // This is server-side
    const people = await getPeople();    

    return <>
        <SubTitle subTitle="People - Loading Boundary"/>

        <PeopleList />
        <div className="standard-divider"></div>
        <div>
            <Link href="/people-suspense" className="call-to-action">View Suspense Version</Link>
        </div>
    </>
}