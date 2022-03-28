const http = require('http');

// 1.
// http.createServer((req,res) => {
//     res.write('<h1>Hello Node!</h1>')
//     res.end('<p>Hello</p>')
// }).listen(8080, () => {
//     console.log('8080번 포트에서 서버 대기중입니다.')
// });

// 2.
const server = http.createServer((req,res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write('<h1>hello</h1>');
    res.write('<h1>hello</h1>');
    res.end('<p>hello</p>')
}).listen(8080);

server.on('listening', () => {
    console.log("8080번 포트에서 서버 대기 중입니다.");
});
server.on('error', (error) => {
    console.error(error);
})