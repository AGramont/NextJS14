import { getPeople } from "@/lib/db/peopleDB";

export async function GET(request) {
    const people = await getPeople();
    return Response.json(people);
}