"use client"

import { getPersonAction } from "@/lib/actions/people-actions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EditPerson from "@/components/people/people-edit";
import SubTitle from "@/components/format/sub-title";

export default function EditPersonPage() {
    const {id} = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {

        getPersonAction(Number(id)).then(result => {
            console.log("RESULT: ", result.data);
            setPerson(result.data);
        })

    }, [])

    return <>
        <SubTitle subTitle="People - Viewer"/>
        {person ? <EditPerson person={person} /> : <p>Loading...</p>}
    </>
}