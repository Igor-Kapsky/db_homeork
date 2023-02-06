const dbConnection = require('../utils/DbConnection.js');
const queryBuilder = require('../utils/queryBuilder.js');
const testData = require('../testData');
const tablePrinter = require('../utils/tablePrinter.js');

describe('2 уровень. Работа с БД', async () => {


    before(async function () {
        await dbConnection.connect();
    });

    it('Task 1', async () => {
        let rows;
        const query = queryBuilder.queryBuilder(testData.query1);
        [rows] = await dbConnection.query(query);
        tablePrinter.printTable(rows);

    });

    it('Task 2', async () => {
        let rows;
        const query = queryBuilder.queryBuilder(testData.query2);
        [rows] = await dbConnection.query(query);
        tablePrinter.printTable(rows);
    });

    it('Task 3', async () => {
        let rows;
        const query = queryBuilder.queryBuilder(testData.query3);
        [rows] = await dbConnection.query(query);
        tablePrinter.printTable(rows);
    });

    it('Task 4', async () => {
        let rows;
        const query = queryBuilder.queryBuilder(testData.query4);
        [rows] = await dbConnection.query(query);
        tablePrinter.printTable(rows);
    });

    after(async function () {
        await dbConnection.closeConnection();
    });
});
