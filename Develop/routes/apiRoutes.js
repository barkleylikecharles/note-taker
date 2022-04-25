// Add dependencies
const { v4: uuidv4 }= require('uuid')
const router = require('express').Router();
const fs = require('fs');
const saveDatabase = require('../db/db.json');
const { append } = require('express/lib/response');
const { randomFillSync } = require('crypto');
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
        console.log(newJSON)

// Write to db file
fs.writeFile('db/db.json', JSON.stringify(saveDatabase), function(err) {
    if (err) throw err;
    console.log("Saved to the database");
})
        res.json(saveDatabase);
    };
    });

// Delete button
// router.delete('notes/:id', (req, res) => {
//     let id = req.params.id;

//     fs.readFile("./db/db.json", JSON.stringify(saveDatabase), function(err, data) {
//         if (err) throw err;

//         let jsonData = JSON.parse(data);
// // Loop to look for unique id to delete
// for (let i=0; i<jsonData.length; i++) {
//     if (id== jsonData[i].id) {
//         jsonData.splice(i,1);
//         fs.writeFile("./db/db.json", JSON.stringify(jsonData), function(err) {
//             if (err) throw err;
//             console.log("Your note was deleted");
//         });
// };
// };
//     });
// });



    // };
    // const findNote = findById(req.params.id, saveDatabase);
// app.delete('/api/notes/:id', (req, res) => {
// }
// Export router
module.exports = router;