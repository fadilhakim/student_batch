var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./database/database.db');
 
db.serialize(function() {
  db.run(`CREATE TABLE Students(id integer PRIMARY KEY AUTOINCREMENT,name varchar(40),
           background varchar(100))`);
 
  db.run(`INSERT INTO Students(name,background) VALUES ('kevin','mandor')`);
  db.run(`INSERT INTO Students(name,background) VALUES ('autian','NBA')`);
  db.run(`INSERT INTO Students(name,background) VALUES ('fuad','PRO PLAYER DOTO')`);
  db.run(`INSERT INTO Students(name,background) VALUES ('devdots','GAMING VLOGER')`);

  db.run(`CREATE TABLE Batches(id integer PRIMARY KEY AUTOINCREMENT,batch_name varchar(30))`);
  db.run(`INSERT INTO Batches(batch_name) VALUES ('Artic Fox')`);
  db.run(`INSERT INTO Batches(batch_name) VALUES ('bule Fox')`);
  db.run(`INSERT INTO Batches(batch_name) VALUES ('Charlie Fox')`);
  db.run(`INSERT INTO Batches(batch_name) VALUES ('Dev Fox')`);
  db.run(`INSERT INTO Batches(batch_name) VALUES ('Erwin Fox')`);
  db.run(`INSERT INTO Batches(batch_name) VALUES ('Fuaaaad Fox')`);
    db.run(`ALTER TABLE Students ADD COLUMN batch_id integer`);
   db.run(`UPDATE Students SET batch_id = 2 WHERE id IN(1,2,3)`)
   db.run(`CREATE VIEW bule_foxs AS SELECT * FROM Students WHERE batch_id = 2`);
    db.run(`UPDATE Students SET batch_id = 2 WHERE id IN(5)`)
   

});



 
db.close();