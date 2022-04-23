const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');
const express = require('express');
// const { saveDatabase } = require('./db/db');
//Set Port
const PORT = process.env.PORT || 3000;
//Express App
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api", apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });