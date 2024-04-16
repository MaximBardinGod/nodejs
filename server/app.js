// app.js или другой файл, где настраивается ваше Express приложение

const express = require('express');
const specificationController = require('./controllers/Specification');
const app = express();

app.get('/api/specifications', specificationController.getSpecifications);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
