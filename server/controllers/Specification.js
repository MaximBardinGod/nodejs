// controllers/specificationController.js
const { connectToDatabase } = require('../db/dbConfig');

exports.getSpecifications = async (req, res) => {
    let conn;
    try {
        conn = await connectToDatabase();
        const query = 'SELECT Id, ParentId, Description, QuantityPerParent, Measure FROM Specification';
        conn.query(query, (err, results) => {
            if (err) {
                console.error('Error executing query:', err);
                return res.status(500).send('Error retrieving data from the database');
            }
            res.json(results);
        });
    } catch (error) {
        console.error('Failed to connect to database:', error);
        res.status(500).send('Database connection error');
    } finally {
        if (conn) {
            conn.close(); // Закрываем соединение в блоке finally
        }
    }
};
