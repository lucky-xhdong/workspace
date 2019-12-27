var ws = require("nodejs-websocket");//引入websocket模块
console.log("开始建立连接...");//后台打印状态信息
//创建一个新连接
var server = ws.createServer(function (conn) {
    //接收触发事件:客户端发送消息时，服务端触发该事件
    conn.on('text', function (str) {
        // boardcast(str) // 简单通信
        var data = JSON.parse(str);
        switch (data.type) {
            case 'setName':
                conn.nickname = data.name
                // boardcast(data.name + '加入了房间')
                boardcast(JSON.stringify({
                    type: 'Server',
                    text: data.name + '加入了房间'
                }))
                break
            case 'chat':
                // boardcast(data.text)
                boardcast(JSON.stringify({
                    name: conn.nickname,
                    text: data.text,
                    type: 'chat'
                }))
                break
            default:
                break
        }
    })
    conn.on('close', function () {
        console.log()
    })
    //错误处理事件
    conn.on('error', function (str) {
        console.log(str)
        boardcast(conn.nickname + '离开了房间')
    })
    //自动给客户端推送消息
    // setTimeout(function () {
    //     conn.sendText('来自服务端的消息')
    // }, 5000)
}).listen(8000)

function boardcast(str) {
    console.log(str+'-----')
    server.connections.forEach((conn) => {
        conn.sendText(str)
    })
}
console.log('服务器运行于8000');
