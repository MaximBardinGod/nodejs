const express = require('express');
const sql = require('msnodesqlv8');

const connectionString = "server=DESKTOP-DA7Q1OV;Database=KIS;trusted_connection=yes;driver={SQL Server Native Client 11.0}";

function connectToDatabase() {
    return new Promise((resolve, reject) => {
        sql.open(connectionString, (err, conn) => {
            if (err) {
                console.error('Database Connection Failed! Error:', err);
                return reject(err);
            }
            console.log('Connected to MSSQL');
            resolve(conn);
        });
    });
}

module.exports = {
    connectToDatabase
};
