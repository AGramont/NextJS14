const Database = require('better-sqlite3');
const db = new Database('../people.db', { verbose: console.log });
//const db = sql('../../people.db')

const people = [
    {
      firstName: "John",
      lastName: "Doe",
      age: 30,
      email: "john.doe@example.com",
      phoneNumber: "234567890",
      active: 1
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      age: 25,
      email: "jane.smith@example.com",
      phoneNumber: "987654321",
      active: 1
    },
    {
      firstName: "Michael",
      lastName: "Johnson",
      age: 35,
      email: "michael.johnson@example.com",
      phoneNumber: "122334455",
      active: 1
    },
    {
      firstName: "Emily",
      lastName: "Brown",
      age: 28,
      email: "emily.brown@example.com",
      phoneNumber: "654321897",
      active: 1
    },
    {
      firstName: "William",
      lastName: "Davis",
      age: 32,
      email: "william.davis@example.com",
      phoneNumber: "765432987",
      active: 1
    },
    {
      firstName: "Sophia",
      lastName: "Martinez",
      age: 27,
      email: "sophia.martinez@example.com",
      phoneNumber: "876543210",
      active: 1
    },
    {
      firstName: "James",
      lastName: "Garcia",
      age: 29,
      email: "james.garcia@example.com",
      phoneNumber: "987654321",
      active: 1
    },
    {
      firstName: "Olivia",
      lastName: "Wilson",
      age: 31,
      email: "olivia.wilson@example.com",
      phoneNumber: "543219876",
      active: 1
    },
    {
      firstName: "Benjamin",
      lastName: "Rodriguez",
      age: 26,
      email: "benjamin.rodriguez@example.com",
      phoneNumber: "324567890",
      active: 1
    },
    {
      firstName: "Ava",
      lastName: "Lopez",
      age: 33,
      email: "ava.lopez@example.com",
      phoneNumber: "987612345",
      active: 1
    },
    {
      firstName: "Jacob",
      lastName: "Hernandez",
      age: 24,
      email: "jacob.hernandez@example.com",
      phoneNumber: "654987321",
      active: 1
    },
    {
      firstName: "Mia",
      lastName: "Gonzalez",
      age: 30,
      email: "mia.gonzalez@example.com",
      phoneNumber: "890765432",
      active: 1
    }
  ];
  
  db.prepare(`
    CREATE TABLE IF NOT EXISTS people (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        firstname TEXT NOT NULL,
        lastname TEXT NOT NULL,
        age INTEGER NOT NULL,
        email TEXT,
        phone TEXT,
        active INTEGER NOT NULL
    )
    `).run();


  async function initData() {
    const statement = db.prepare(`
        INSERT INTO people VALUES (
            null,
            @firstName,
            @lastName,
            @age,
            @email,
            @phoneNumber,
            @active
        )`)
    for (const person of people) {
        statement.run(person);
    }
  }

  initData();
  