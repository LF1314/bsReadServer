const express = require('express');
const bodyParse = require('body-parser');
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());
app.use(bodyParse.json()); //数据JSON类型
app.use(bodyParse.urlencoded({
    extended: false
})); //解析post请求数据

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "X-Requested-With")
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8")
    next()
});
// get
app.get('/book', require('./api/book'));
app.get('/booklist', require('./api/booklist'));
app.get('/booktitles', require('./api/booktitles'));
app.get('/type', require('./api/type'));
app.get('/shelf', require('./api/shelf'));
app.get('/checkShelf', require('./api/checkShelf'));
app.get('/late', require('./api/lately'));
app.get('/search', require('./api/search'));

// post
app.post('/login', require('./api/login'));
app.post('/register', require('./api/register'));
app.post('/inShelf', require('./api/insert-shelf'));
app.post('/lately', require('./api/lastread'));
// 管理员
app.post('/adminLogin',require('./api/adminLogin'))
// 新增一本书
app.post('/addbooks',require('./api/addbook'))

// 添加书籍基本信息
app.post('/addbookbasemess',require('./api/addbookbase'))
// 获取用户列表
app.get('/userlist',require('./api/userlist'))

app.listen(7123, () => {
    console.log('接口运行在7123');
})
