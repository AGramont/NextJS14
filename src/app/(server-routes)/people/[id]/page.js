"use client";

import SubTitle from "@/components/format/sub-title";
import PeopleEdit from "@/components/people/people-edit";
import { useParams } from "next/navigation";
import { useMemo } from "react";

export default function EditPersonPage() {
    const {id} = useParams();
    
    const subTitle = useMemo(() => {
        const title = id === 'new' ? "People - Add New Person" : "People - Edit Person";
        return (<SubTitle subTitle={title}/>)
    }, [id])

    return <>
        {subTitle}
        <PeopleEdit id={id}/>
    </>
}