const sql = require('better-sqlite3');
const db = sql('../people.db')

console.log("Activating person");
const args = process.argv.slice(2)

async function reactivate() {
    const statement = db.prepare(`
        UPDATE people SET active = 1 WHERE id = ?`)
    statement.run(args[0]);
    console.log(`Person ${args[0]} as been reactivated}`);
  }


  reactivate();
