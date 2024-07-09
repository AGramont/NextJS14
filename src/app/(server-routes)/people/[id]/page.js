"use client";
import SubTitle from "@/components/format/sub-title";
import ViewPerson from "@/components/people/people-view";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getPersonAction } from "@/lib/actions/people-actions";

export default function ViewPersonPage() {
    const {id} = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {

        getPersonAction(Number(id)).then(result => {
            console.log("getPersonAction: ", result.data);
            setPerson(result.data);
        })

    }, [])

    return <>
        <SubTitle subTitle="People - Viewer"/>
        {person ? <ViewPerson person={person} /> : <p>Loading...</p>}
    </>
}