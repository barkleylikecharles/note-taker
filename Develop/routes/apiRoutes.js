// Add dependencies
const router = require('express').Router();

const saveDatabase = require('../db/db');

// GET request
router.get('/notes', function (req, res) {
    saveDatabase
        .retrieveNotes()
        .then(notes => res.json(notes))
        .catch(err => res.status(500).json(err));
});

// POST request
router.post('/notes', (req, res) => {
    saveDatabase
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

module.exports = router;