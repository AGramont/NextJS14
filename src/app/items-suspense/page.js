import PeopleList from "@/components/people/people-list";
import PeopleWait from "@/components/people/people-wait";
import { Suspense } from "react";

export const metadata = {
    title: "List of People",
    description: "A list of people using suspense",
  };

export default async function ListPage() { 

    return <main>
        <h1>People - Suspense</h1>
        <hr />

        <Suspense fallback={<PeopleWait />}>
            <PeopleList />
        </Suspense>
    </main>
}