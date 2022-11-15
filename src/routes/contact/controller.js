const controller = require('./../controller');
const dbConn = require('./../../helper/db.config');

module.exports = new (class extends controller{

    async getAll(req, res) {
        await dbConn.query("SELECT * FROM contacts", function (err, result) {
            if (err) throw err;
            res.json({
                data : result,
                message: 'success'
            });
        });  
    }

    async create(req, res) {
        let sql = `INSERT INTO contacts (name, phone) VALUES ('${req.body.name}', '${req.body.phone}')`;
        await dbConn.query(sql, function (err, result) {
            if (err) throw err;
            console.log("1 record inserted");
            res.json({
                data:  result,
                message: 'success'
            });
        });
    }

    async update(req, res) {
        let sql = `UPDATE contacts SET name = '${req.body.name}', phone = '${req.body.phone}' WHERE id =  ${req.params.id}`;
        await dbConn.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result.affectedRows + " record(s) updated");
            if(result.affectedRows == 0) {
                return res.status(404).json({
                    data: null,
                    message: 'the contact with the given id was not found'
                });
            }
            res.json({
                data: result,
                message: result.affectedRows + " record(s) updated"
            });
        
        });
    }
})();