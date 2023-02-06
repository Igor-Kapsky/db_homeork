class QueryBuilder {

    queryBuilder(query) {
        let queryFinal = '';
        if (query.select) {
            queryFinal = queryFinal.concat(this.selectPart(query.select));
        }

        if (query.from) {
            queryFinal = queryFinal.concat(this.fromPart(query.from));
        }

        if (query.join) {
            queryFinal = queryFinal.concat(this.joinPart(query.join));
        }

        if (query.group) {
            queryFinal = queryFinal.concat(this.groupPart(query.group));
        }

        if (query.where) {
            queryFinal = queryFinal.concat(this.wherePart(query.where));
        }

        if (query.order) {
            queryFinal = queryFinal.concat(this.orderPart(query.order));
        }

        if (query.union) {
            queryFinal = queryFinal.concat('UNION ' + this.queryBuilder(query.union) + ' ');
        }
        return queryFinal.slice(0, -1);
    }

    selectPart(columns) {
        let query = 'SELECT ';
        for ( let i = 0; i < columns.length; i++) {
            query = query.concat(columns[i] + ', ');
        }
        return query.slice(0, -2).concat(' ');
    }

    fromPart(table) {
        let query = 'FROM ';
        return query.concat(table + ' ');
    }

    joinPart(join) {
        let query = 'INNER JOIN ';
        return query.concat(join.table + ' ON ' + join.column1 + '=' + join.column2 + ' ');
    }

    groupPart(columns) {
        let query = 'GROUP BY ';
        for ( let i = 0; i < columns.length; i++) {
            query = query.concat(columns[i] + ', ');
        }
        return query.slice(0, -2).concat(' ');
    }

    orderPart(columns) {
        let query = 'ORDER BY ';
        for ( let i = 0; i < columns.length; i++) {
            query = query.concat(columns[i] + ', ');
        }
        return query.slice(0, -2).concat(' ');
    }

    wherePart(where) {
        let query = 'WHERE ';
        return query.concat(where + ' ');
    }
}

module.exports = new QueryBuilder;
