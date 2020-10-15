let savedNotes = require("../db/db.json");
const fs = require("fs");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(savedNotes);
  });

  // Saving a note
  app.post("/api/notes", function (req, res) {
    storedNotes.push(req.body);
    res.json(storedNotes);
  });

  // Deleting a note
  app.delete("/api/notes/:id", function (req, res) {
    const noteId = req.params.id;

    //Function to filter notes
    const filterById = (note) => {
      if (note.id !== noteId) {
        return true;
      }
      return false;
    };

    savedNotes = savedNotes.filter(filterById);

    res.json(savedNotes);
  });
};
