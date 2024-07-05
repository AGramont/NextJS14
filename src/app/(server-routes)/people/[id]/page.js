"use client";
import SubTitle from "@/components/format/sub-title";
import PeopleEdit from "@/components/people/people-edit";
import ViewPerson from "@/components/people/people-view";
import { getPerson } from "@/lib/db/peopleDB";
import { useParams } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

export default function ViewPersonPage() {
    const {id} = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {

        const load = async () => {
            const person = await getPerson(id);
            setPerson(person);
            console.log("person: ", person);
        }

        load();

    }, [])

    return <>
        <SubTitle subTitle="People - Viewer"/>
        {person && <ViewPerson person={person} />}
    </>
}