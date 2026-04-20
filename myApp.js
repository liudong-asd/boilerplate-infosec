const express = require('express');
const helmet = require('helmet');
const app = express();

// 开启Helmet安全防护
app.use(helmet());

// 加一个根路由，不然访问会404
app.get('/', (req, res) => {
  res.send('Hello Helmet! 服务运行正常');
});

// 监听3000端口
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`服务器已启动，访问 http://localhost:${PORT}`);
});































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));
app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
