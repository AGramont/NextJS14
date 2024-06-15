const sql = require('better-sqlite3');
const db = sql('../people.db')

const args = process.argv.slice(2)

const data = {
    key: args[0],
    firstName: args[1],
    lastName: args[2],
    age: Number(args[3]),
    email: args[4],
    phoneNumber: args[5]
}

console.log("INSERTING: ", data);

async function insert() {
    const statement = db.prepare(`
        INSERT INTO people VALUES (
            null,
            @key,
            @firstName,
            @lastName,
            @age,
            @email,
            @phoneNumber
        )`)
    statement.run(data);
  }


insert();
