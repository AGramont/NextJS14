"use server";
/**
 * This is a server action that is run on the server as a function call
 */

import { createSafeActionClient } from "next-safe-action";
import { deletePerson as deletePersonDB, getPerson as getPersonDB, createPerson as createPersonDB } from "@/lib/db/peopleDB";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const actionClient = createSafeActionClient();

const deleteSchema = z.number();
export const deletePersonAction = actionClient.schema(deleteSchema).action(async ({parsedInput}) => {
    console.log(`deactivating person ${parsedInput} on server`);
    await deletePersonDB(parsedInput);
    revalidatePath('/people');
})

const newPersonSchema = z.object({
    firstname: z.string(),
    lastname: z.string(),
    age: z.number(),
    email: z.string(),
    phone: z.string(),
    active: z.number()
})
export const createPersonAction = actionClient.schema(newPersonSchema).action(async ({parsedInput}) => {
    console.log("new person: ", parsedInput);
    await createPersonDB(parsedInput);
    revalidatePath('/people');
})

const getSchema = z.number();
export const getPersonAction = actionClient.schema(getSchema).action(async ({parsedInput}) => {
    console.log(`getting person ${parsedInput} on server`);
    const result = await getPersonDB(parsedInput);
    return result;
})