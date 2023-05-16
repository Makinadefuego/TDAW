function option(req, res) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM task', (err, rows) => {
            if (err) {
                res.json(err);
            }
            console.log(rows);
            res.render('tasks/option', {rows});
        });
    } );
}

function create(req, res) {
    res.render('tasks/create');
}

function store(req, res) {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO task set ?', [data], (err, rows) => {
            console.log(rows);
            res.redirect('/tasks');
        });
    });
}

function destroy(req, res) {
    const id = req.body.id;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM task WHERE id = ?', [id], (err, rows) => {
            res.redirect('/tasks');
        });
    });
}


function edit (req, res) {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM task WHERE id = ?', [id], (err, rows) => {
            if (err) {
                res.json(err);
            }
            console.log(rows);
            res.render('tasks/edit', {rows});
        });
    });
}

function update(req, res) {
    const id = req.params.id;
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE task set ? WHERE id = ?', [data, id], (err, rows) => {
            res.redirect('/tasks');
        });
    });
}

module.exports = {
    option: option,
    create: create,
    store: store,
    destroy: destroy,
    edit: edit,
    update: update
}

