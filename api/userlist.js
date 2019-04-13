const connect = require('../connect');

const userlist = (req, res) => {
    console.log('..')
    connect(`SELECT * FROM users;`, function (err, results, fileds) {
        if (err) throw err;
        res.send(results);
    })
}

module.exports = userlist;
