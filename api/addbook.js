const connect = require('../connect');

const addbooks =async(req, res) => {
    // const user = req.body.user;
    // const pwd = req.body.pwd;
  console.log(user)
    connect(`CREATE TABLE booktest(id int,bookName varchar(255),title varchar(255),content mediumtext)`, function (err, results) {
        if (err) throw err;
      
        else{
           console.log('创建成功')
        }
    })

}

module.exports = addbooks;
