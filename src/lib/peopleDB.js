import sql from 'better-sqlite3';

const db = sql('people.db');

export async function getPeople() {
    await new Promise((r) => setTimeout(r, 2000));
    return db.prepare(`select * from people`).all();
}