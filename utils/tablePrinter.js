class TablePrinter {

    printTable(rows) {
        rows.map((row) => {
            for (const [key, value] of Object.entries(row)) {
                console.log(`${key}: ${value}`);
            }
        });
    }
}

module.exports = new TablePrinter;
