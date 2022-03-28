const http = require('http');
const fs = require('fs').promises;

// 데이터 저장용
const users = {};

http.createServer(async (req, res) => {
    try {
        console.log(req.method, req.url);
        if(req.method === 'GET'){
            if(req.url === '/'){
                const data = await fs.readFile('./ex3_restFront.html');
                res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                return res.end(data);
            }else if(req.url === '/about'){
                const data = await fs.readFile('./ex3_about.html');
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                return res.end(data);
            }
            // 주소가 /도 /about도 아니면
            try {
                const data = await fs.readFile(`.${req.url}`);
                return res.end(data);
            } catch (error) {
                // 주소에 해당하는 라우터를 못 찾음 404
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    } catch (error) {
        console.error(error);
        res.writeHead(500, {'Content-Type': 'text/plain; charset-utf-8'});
        res.end(error.message);
    }
}).listen(8082, () => {
    console.log('8082번 포트에서 서버가 대기 중입니다.')
});