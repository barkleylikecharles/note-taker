// Add dependencies
// const { v4: uuidv4 }= require('uuid')
const router = require('express').Router();

const saveDatabase = require('../db/db.json');
// const saveDatabase = JSON.parse(db);


// GET request
router.get('/notes', (req, res) => res.json(saveDatabase));

router.post('/notes' , (req, res) => {
    const newTitle = req.body.title;
    const newText = req.body.text;
    console.log(newTitle);
    if (!newTitle || !newText) {
        res.status(400).json({msg: 'Please enter both a title and text description to complete.'})
    } else {
        const newJSON = {
            // id: uuidv4(),
            title: newTitle,
            text: newText
        };
        saveDatabase.push(newJSON);
        res.json(data);
    };
    });


module.exports = router;