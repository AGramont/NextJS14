import SubTitle from "@/components/format/sub-title";
import PeopleList from "@/components/people/people-list";
import PeopleWait from "@/components/people/people-wait";
import Link from "next/link";
import { Suspense } from "react";

export const metadata = {
    title: "List of People",
    description: "A list of people using suspense",
  };

export default async function ListPage() { 

    return <>
        <SubTitle subTitle="People - Suspense"/>

        <Suspense fallback={<PeopleWait />}>
            <PeopleList />
        </Suspense>
        <div class="standard-divider"></div>
        <div>
            <Link href="/people" className="call-to-action">View Load Boundary Version</Link>
        </div>
    </>
}