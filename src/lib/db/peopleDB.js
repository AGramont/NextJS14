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
    const value = {...person, active: 1}
    const result = db.prepare(`
        INSERT INTO people VALUES (
            null,
            @firstname,
            @lastname,
            @age,
            @email,
            @phone,
            @active
        )`).run(value);
    const inserted = await getPerson(result.lastInsertRowid);
    console.log("DB inserted: ", inserted);
    return inserted;
}

export async function updatePerson(person) {
    console.log("db updating: ", person);
    db.prepare(`
        UPDATE people SET 
        firstname = @firstname, 
        lastname = @lastname,
        age = @age,
        email = @email,
        phone = @phone,
        active = @active
        WHERE id =@id`).run(person);
    const result = await getPerson(person.id);
    console.log("DB updated: ", result);
    return result;
}
