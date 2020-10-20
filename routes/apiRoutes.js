const savedNotes = require("../db/db.json");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    savedNotes.forEach((note, index) => {
      note.id = index +1
    }); 
    res.json(savedNotes);
  });

  app.post("/api/notes", function(req, res) {
    savedNotes.push(req.body);
    savedNotes[savedNotes.length -1].id = savedNotes.length
    res.send(savedNotes);
  });
  
  app.delete("/api/notes/:id", function(req, res) {
    const noteId = req.params.id;

    savedNotes.splice(noteId-1,1);
    res.send(savedNotes);
  });   
}
