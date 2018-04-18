const express = require('express')
///中间件 传参所用
const bodyParser = require('body-parser')
//密钥Token
var jwt = require('jsonwebtoken');

let app = express();
const fs = require('fs')
let multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {   //destination存到服务器某个地方
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })


//中间件 传过来post请求的参数解析json
app.use(bodyParser.json())
//后台别的服务器 测试
app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // 3000只支持这一端口隽语  "*" 任意路径请求都能跨域
    res.header("Access-Control-Allow-Headers", "Content-Type,plantform,browser");//响应头  //Token是一个秘钥 加密逻辑 MD5
    res.header("Content-Type", "application/json;charset=utf-8"); //设置响应数据 一定是json格式的
    next()      //进入接口阶段
})


//登录链接
app.post('/user/login', function (req, res) {
    
    // console.log(req.body)   //客户端输入的账号密码  req客户端
    //获取账号密码数据
    let user = JSON.parse(fs.readFileSync('user.json', { encoding: "utf-8" }));
    //只有parse转化才能push  和 遍历判断

    let resInfo = {
        data:"login",
        status:0,
        msg:"登录信息有误"
    }

    user.map((item, index) => {
        //账号密码正确
        if (item.username == req.body.username && item.password == req.body.password) {
            resInfo.status = 1
            resInfo.msg = '登录成功',
            resInfo.username = req.body.username                  //设置我的页面 账号信息
        }
    })
    if (resInfo.status == 1) {  
        //账号密码正确设置token加密
        resInfo.token = jwt.sign(req.body, '1511', { //req.body 是客户端发送过来的账号秘钥  
            expiresIn: 60 * 60 * 24           // 24小时过期
        })
    }

    res.end(JSON.stringify(resInfo))
})


//upload 上传接口
app.post('/dsp-creative/creative/upload',upload.single('file'),function(req,res){
    res.send({
        "data": {
                "size":req.file.size,
                "value":req.file.path,
                "key":"2A36B67C6"
            },
        "status":0
        }
    )
})


app.listen(9000, function () {
    console.log('node server 9000 ')
})




