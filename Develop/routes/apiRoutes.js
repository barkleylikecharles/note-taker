// Add dependencies
const { v4: uuidv4 }= require('uuid')
const router = require('express').Router();

const saveDatabase = require('../db/db');

// GET request
router.get('/', (req, res) => res.json(saveDatabase));

router.post('/' , (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Please enter both a title and text description to complete.'})
    } else {
        const newJSON = {
            id: uuidv4(),
            title: newTitle,
            text: newText
        };
        saveDatabase.push(newJSON);
        res.json(data);
    };
    });

// POST request
// router.post('/notes', (req, res) => {
//     saveDatabase
//         .addNote(req.body)
//         .then((note) => res.json(note))
//         .catch(err => res.status(500).json(err));
// });

module.exports = router;