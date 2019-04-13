const connect = require('../connect');

const adminLogin = (req, res) => {
    const user = req.body.user;
    const pwd = req.body.pwd;
  console.log(user)
    connect(`SELECT * FROM admins WHERE user_name="${user}" AND password="${pwd}";`, function (err, results, fileds) {
        if (err) throw err;
        console.log(results)
        if(results.length === 1) {
                    res.send(results[0])
        }
        else {
            res.send(false)
        }
    })

}

module.exports = adminLogin;
