const mysql = require('mysql2/promise');
const mysqlConfig = require('../config/mysql-config');

class DbConnection {

    async getInstance() {
        if (!this.connection) {
            await this.connect();
        }
        return this.connection;
    }

    async connect() {
        try {
            this.connection = mysql.createConnection(mysqlConfig);
            console.log('intialize complete - createConnection successful');
        }
        catch (err) {
            console.log('initialize failed: ' + err);
        }
    }

    async query(query) {
        return (await this.getInstance()).query(query);
    }

    async closeConnection() {
        return (await this.getInstance()).end();
    }
}

module.exports = new DbConnection();
