// 1. node 내장 모듈
const os = require('os');

os.uptime;

// 2. 파일 경로
const path = require('path');
path.join(__dirname,'var.js');
path.join(__dirname,'..','var.js');

path.resolve(__dirname,'..','./var.js');

// 3. url
