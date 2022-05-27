/*
 * @Author: 伍智辉
 * @Date: 2022-05-26 17:09:22
 * @LastEditors: 伍智辉
 * @LastEditTime: 2022-05-27 12:43:07
 * @FilePath: \4.7表单c:\Users\IPC\Documents\WeChat Files\wxid_fylhu1t1i7ny22\FileStorage\File\2022-05\expressapi\expressapi\webapi.js
 * @Description: MVC作业编辑
 * 
 * Copyright (c) 2022 by 伍智辉, All Rights Reserved. 
 * 
 * https://blog.csdn.net/qq_19286785/article/details/122036516
 */
const express = require('express')
const app = express()
const port = 3000

const mysql = require('mysql')

let dbconfig={
    user:'root',
    password:'123456',
    database:'api',
    host:'127.0.0.1'
}

const connection = mysql.createConnection(dbconfig);

connection.connect();

var bodyParser = require('body-parser');

// create application/json parser
var jsonParser = bodyParser.json();

//var formData = bodyParser.formData({ extended: false });

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


//跨域解决方案
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// webapi 返回目录数据
//        api 的数据格式
//                 {
//                    msg:'请求成功'，
//                    code:200 
//                    data:[]
//}

app.get('/getCatalogs', (req, res) => {
    //参数的获取
    let query= req.query;
    console.log(query.id);
    //数据库的操作
    //err 错误信息
    //rows 数据
    // fields
    let catalogId = query.id;
    let sql='select * from catalog';
    if(catalogId){
        sql+=' where catalog_id='+catalogId
    }
    connection.query(sql, (err, rows, fields) => {
        if (err) throw err
        //console.log(rows[0].name);
        //console.log(fields)
        let data={
            msg:'请求成功',
            data:rows,
            code:200,// 如果是0 就代表错误，200 代码请求成功
        }
        //connection.end();
        res.send(JSON.stringify(data));
      })    
    //res.send('Hello World!')
  })


    //参数的获取
app.post('/addCatalog',urlencodedParser,function(req,res){
    console.log(req.body);
    res.send('ok');
})  
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})