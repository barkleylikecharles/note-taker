// Add dependencies
const { v4: uuidv4 }= require('uuid')
const router = require('express').Router();
const fs = require('fs');
const saveDatabase = require('../db/db.json');
const { append } = require('express/lib/response');
// const saveDatabase = JSON.parse(db);


// GET request
router.get('/notes', (req, res) => res.json(saveDatabase));
// POST request
router.post('/notes' , (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    // console.log(newTitle);
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Please enter both a title and text description to complete.'})
    } else {
        const newJSON = {
            id: uuidv4(),
            title: newTitle,
            text: newText
        };
        saveDatabase.push(newJSON);
        console.log(saveDatabase);
        console.log(id)

// Write to db file
fs.writeFile('db/db.json', JSON.stringify(saveDatabase), function(err) {
    if (err) throw err;
    console.log("Saved to the database");
})
        res.json(saveDatabase);
    };
    });

// Delete button
app.delete('/api/notes/:id', (req, res) => {
}
// Export router
module.exports = router;