require('./global')

var app = require('../app')
var http =require('http');

// 端口
var port =normalizePort(process.env.PORT || '3000');
app.set('port',port);

// 创建服务器
var server = http.createServer(app);
//监听端口
server.listen(port);
server.on('listening', onListening);


//端口判断
function normalizePort(val) {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  }

// 端口监听事件
function onListening(){
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    // debug('Listening on ' + bind);
    console.log('server is runing... Listening on ' + bind)
    if (bind.indexOf("port") > -1) {
        var uri = 'http://localhost:' + addr.port;
        console.log('> Listening at ' + uri + '\n')
  }
}  