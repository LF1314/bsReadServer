const connect = require('../connect');

const addbaseBook = (req, res) => {
    
    const name = req.body.name,
     author = req.body.author,
     images = req.body.images,
     ratings = parseFloat(req.body.ratings),
     wordcount=parseFloat(req.body.wordcount),
     type=req.body.type,
     serialize=req.body.serialize,
     like =req.body.like,
     intro=req.body.intro
     
    //  console.log(req.body)

    connect(`SELECT * FROM booklist WHERE name="${name}";`, function (err, results, fileds) {
      
        if (err) throw err;
        if (results.length >= 1) {
            res.send({
                code: 400,
                msg:"书籍已存在"
            })
        } else {
            let sql = `INSERT INTO \`books\`.\`booklist\`( \`name\`, \`author\`, \`images\`, \`ratings\`, \`wordcount\`, \`type\`, \`serialize\`, \`like\`, \`intro\`) 
                       VALUES ('${name}', '${author}', '${images}', '${ratings}','${wordcount}','${type}','${serialize}','${like}','${intro}');`
            connect(sql, function (err, results, fileds) {
                // console.log(err)
                if (err) throw err;
                if (results.affectedRows === 1) {
                     res.send({
                         code:200,
                         msg:"添加书籍成功"
                     })
                } else {
                    res.send({
                        insertStatus: 0
                    })
                }
            })
        }
    })
}

module.exports = addbaseBook;
