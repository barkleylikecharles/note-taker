// Add dependencies
const fs = require('fs');
const path = require('path');
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
router.get('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get('*', (req, res) => {
res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;

// // GET request
// router.get('/', (req, res) => res.json(saveDatabase));

// router.post('/' , (req, res) => {
//     const newTitle = req.body.title;
//     const newText = req.body.text;
//     if (!newTitle || !newText) {
//         res.status(400).json({msg: 'Please enter both a title and text description to complete.'})
//     } else {
//         const newJSON = {
//             id: uuidv4(),
//             title: newTitle,
//             text: newText
//         };
//         saveDatabase.push(newJSON);
//         res.json(data);
//     };
//     });

//     module.exports = router;