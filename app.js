const express = require('express');
const specificationController = require('./server/controllers/Specification');
const app = express();

app.use('/specifications', specificationController.getSpecifications);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
