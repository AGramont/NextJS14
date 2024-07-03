import 'server-only';
import sql from 'better-sqlite3';

const db = sql('people.db');

export async function getPeople() {
    await new Promise((r) => setTimeout(r, 1000));
    return db.prepare(`select * from people where active = 1`).all();
}

export async function deletePerson(personId) {
    await new Promise((r) => setTimeout(r, 1000));
    return db.prepare("update people set active = 0 where id = ?").run(personId);
}