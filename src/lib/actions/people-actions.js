"use server";
/**
 * This is a server action that is run on the server as a function call
 */

import { createSafeActionClient } from "next-safe-action";
import { deletePerson as deletePersonDB } from "@/lib/db/peopleDB";
import { z } from "zod";
import { revalidatePath } from "next/cache";

// creating a schema for strings
const mySchema = z.number();

const actionClient = createSafeActionClient();

export const deletePerson = actionClient.schema(mySchema).action(async ({parsedInput}) => {
    console.log(`deactivating person ${parsedInput} on server`);
    await deletePersonDB(parsedInput);
    revalidatePath('/people');
})