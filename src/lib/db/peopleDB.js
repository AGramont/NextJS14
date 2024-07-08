import 'server-only';
import sql from 'better-sqlite3';

const db = sql('people.db');

const delay = () => new Promise((r) => setTimeout(r, 1000));

export async function getPeople() {
    await delay();
    return db.prepare(`select * from people where active = 1`).all();
}

export async function getPerson(id) {
    await delay();
    return db.prepare("select * from people where id = ?").get(id);
}

export async function deletePerson(personId) {
    await delay();
    return db.prepare("update people set active = 0 where id = ?").run(personId);
}

export async function createPerson(person) {
    await delay();
    const value = {...person, active: 1}
    db.prepare(`
        INSERT INTO people VALUES (
            null,
            @firstname,
            @lastname,
            @age,
            @email,
            @phone,
            @active
        )`).run(person);
}
