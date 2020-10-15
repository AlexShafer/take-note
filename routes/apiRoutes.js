
let savedNotes = require("../db/db.json");
const fs = require("fs");

module.exports = function(app) {
  app.get("/api/notes", function(req, res) {
    res.json(savedNotes);
  });

  app.post("/api/notes", function(req, res) {
    storedNotes.push(req.body);
    res.json(savedNotes);
  });
  
  app.delete("/api/notes/:id", function(req, res) {
    const noteId = req.params.id;

    //Function to filter notes
    const filterById = (note) => {
      if(note.id !== noteId) {
        return true
      }
      return false;
    }

    //Invoke the filterById function to filter notes in the storedNotes array
    storedNotes = savedNotes.filter(filterById);

    res.json(savedNotes);
  });   
}
