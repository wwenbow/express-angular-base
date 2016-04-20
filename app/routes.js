var jsondb = require("./models/jsondb.js");
var numrecs = 0;

module.exports = function(app) {
    app.post('/api/jsondb/:table', function(req, res) {
        var tablename = req.params.table;
        jsondb.createTable(tablename, function(err, records) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.send("Table create successfully");
            }
        });
    });
    app.delete('/api/jsondb/:table', function(req, res) {
        console.log(req.params);
        var tablename = req.params.table;
        jsondb.deleteTable(tablename, function(err, records) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                res.send("Table deleted successfully");
            }
        });
    });
    app.get('/api/jsondb/:table', function(req, res) {
        var tablename = req.params.table;
        console.log(tablename);
        var table = jsondb.getTableSync(tablename);
        console.log(table);
        table.getAll(function(err, records) {
            if (err) {
                res.status(500).send(err);
            } else {
                var recordsIt = records.iteratorSync();
                var recordsArr = [];
                while (recordsIt.hasNextSync()) {
                    var record = recordsIt.nextSync();
                    var recordJson = record.getStringSync("record");
                    console.log(record.toStringSync());
                    recordsArr.push(recordJson);
                }
                console.log(recordsArr);
                table.closeSync();
                res.send(recordsArr);
            }
        });
    });

    app.post('/api/jsondb/:table/:recordid', function(req, res) {
        var tablename = req.body.name;
        var table = jsondb.getTableSync(tablename);
        var rec = jsondb.newRecordSync();
        rec.setIdSync(req.body.id);
        rec.setSync("record", req.body.document);

        console.log(rec.toString());
        table.insertOrReplace(rec, function(err) {
            if (err) {
                res.status(500).send(err);
            } else {
                table.flushSync();
                numrecs++;
                res.send("record creation success");
            }
        });
    });
    // frontend routes =========================================================
    // route to handle all angular requests
    app.get('*', function(req, res) {
        res.sendfile('./public/views/index.html'); // load our public/index.html file
    });

};
