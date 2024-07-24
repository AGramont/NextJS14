"use client";

import { getPersonAction } from "@/lib/actions/people-actions";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import EditPerson from "@/components/people/people-edit";
import SubTitle from "@/components/format/sub-title";

export default function EditPersonPage() {
  const { id } = useParams();
  const [person, setPerson] = useState(null);

  useEffect(() => {
    getPersonAction(Number(id)).then((result) => {
      console.log("getPersonAction: ", result.data);
      setPerson(result.data);
    });
  }, [id]);

  return (
    <>
      <SubTitle subTitle="People - Edit" />
      {person ? <EditPerson person={person} /> : <p>Loading...</p>}
    </>
  );
}
