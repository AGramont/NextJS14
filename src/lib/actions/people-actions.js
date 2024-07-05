"use server";
/**
 * This is a server action that is run on the server as a function call
 */

import { createSafeActionClient } from "next-safe-action";
import { deletePerson as deletePersonDB, getPerson as getPersonDB } from "@/lib/db/peopleDB";
import { z } from "zod";
import { revalidatePath } from "next/cache";

const actionClient = createSafeActionClient();

const deleteSchema = z.number();
export const deletePerson = actionClient.schema(deleteSchema).action(async ({parsedInput}) => {
    console.log(`deactivating person ${parsedInput} on server`);
    await deletePersonDB(parsedInput);
    revalidatePath('/people');
})

const getSchema = z.number();
export const getPerson = actionClient.schema(getSchema).action(async ({parsedInput}) => {
    console.log(`getting person ${parsedInput} on server`);
    const result = await getPersonDB(parsedInput);
    revalidatePath('/people');
    return result;
})