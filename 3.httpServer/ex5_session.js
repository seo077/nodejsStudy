const http = require('http');
const fs = require('fs').promises;
const url = require('url');
const qs = require('querystring');
const { rmSync } = require('fs');

const parseCookies = (cookie = '') =>
cookie.split(';')
.map(v => v.split('='))
.reduce((acc, [k,v]) => {
    acc[k.trim()] = decodeURIComponent(v);
    return acc;
}, {});

const session = {};

http.createServer(async (req,res) => {
    const cookies = parseCookies(req.headers.cookie);
    if(req.url.startsWith('/login')){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes() + 5);
        const uniqueInt = Date.now();

        // 서버에 사용자의 정보를 저장
        // 클라이언트와는 세션아이디로만 소통
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302, {
            Location:'/',
            'Set-Cookie':`session=${uniqueInt}; Expires=${expires.toGMTString()}; HttpOnly; Path=/`,
        });
        res.end();
    }else if(cookies.session && session[cookies.session].expires > new Date()){
        // 세션에 쿠키가 존재하고,
        // 만료기간이 지나지 않았다면
        res.writeHead(200, {'Content-Type' : 'text/plain; charset=utf-8'});
        res.end(`${session[cookies.session].name}님 안녕하세요`);
    }else{
        try{
            const data = await fs.readFile('./ex4_cookie2.html');
            res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
            res.end(data);
        }catch(err){
            res.writeHead(500, {'Content-Type':'text/plain; charset=utf-8'});
            res.end(err.message);

        }
    }
}).listen(8085, () => {
    console.log('8085번 포트에서 서버 대기 중입니다.');
})