import http from 'http';
import fs from 'fs';

function serveStaticFile(response, path, contentType, responseCode) {
  fs.readFile(path, function(err, data) {
    if(err) {
      // 인터넷 서버 에러를 뜻하는 500 코드
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.end('500 - Internal Error');
    }else {
      response.writeHead(responseCode, {'Content - Type' : contentType});
      response.end(data);
    }
  });
}
const server = http.createServer((request, response) => {
  const url = request.url.toLowerCase(); // 소문자로 변환

  switch (url) { // 조건문이 다양하거나 복잡할 때는 switch문을 사용
    case '/':
      serveStaticFile(response, './index.html', 'text/html', 200);
      break;
    case '/about':
      serveStaticFile(response, './about.html', 'text/html', 200);
      break;
    case '/contact':
      serveStaticFile(response, './contact.html', 'text/html', 200);
    case '/style.css':
      serveStaticFile(response, './style.css', 'text/html', 200);
      breakl
    default:
      serveStaticFile(response, './404.html', 'text/html', 404);
      break;
  }
});

server.listen(2080, () => {
  console.log('2080번 포트');
})