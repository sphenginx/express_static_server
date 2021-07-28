const express = require("express"); //导入express
const compression = require("compression"); //导入 zip  压缩 插件
const config = require('./config')
const wiki = require('./router/wiki.js')

// 创建 web 服务器
const app = express(); 

// 启用插件
app.use(compression()); //启用zip 压缩

//static
app.use(express.static(config.static));

// router
app.use('/wiki', wiki)

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(config.port, config.host, function(err) {
  if (err) {
    console.log('start server err:', err);
  } else {
    console.log(`web server running at http:${config.host}:${config.port}`);
  }
});

