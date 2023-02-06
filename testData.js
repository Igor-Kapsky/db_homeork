module.exports = class TestData {
    static query1 = {
        select: ['project.name', 'test.name', 'MIN((test.end_time - test.start_time)) AS minDuration'],
        from: 'test',
        join: { table : 'project', column1: 'test.project_id', column2: 'project.id' },
        group: ['project.name', 'test.name'],
        order: ['project.name', 'test.name']
    };
    static query2 = {
        select: ['project.name', 'COUNT(DISTINCT test.name) AS "Number of test"'],
        from: 'test',
        join: { table : 'project', column1: 'test.project_id', column2: 'project.id' },
        group: ['project.name']
    };
    static query3 = {
        select: ['project.name', 'test.name', 'test.start_time'],
        from: 'test',
        join: { table : 'project', column1: 'test.project_id', column2: 'project.id' },
        where: 'test.start_time > "2015-11-07"',
        order: ['project.name', 'test.name']
    };
    static query4 = {
        select: ['count(name)'],
        from: 'test',
        where: 'browser = "chrome"',
        union: {
            select: ['count(name)'],
            from: 'test',
            where: 'browser = "firefox"'}
    };
  };