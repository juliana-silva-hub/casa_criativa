const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('./potencia_tech_and_rocketseat.db')

db.serialize(function() {

    //criar a tabela
    db.run(`
    CREATE TABLE IF NOT EXISTS ideas(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        image TEXT,
        title TEXT,
        category TEXT,
        description TEXT,
        link TEXT
    );
    `)
    //inserir dados na tabela
    const query = `
    INSERT INTO ideas(
        image,
        title,
        category,
        description,
        link
    ) VALUES (?, ?, ?, ?, ?); 
    `
    db.run(query, [
        
    ])
    //consultar dados na tabela

    //deletar um dado da tabela
})