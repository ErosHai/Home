const port = 3000;
const ip = '127.0.0.1';
const fs = require('fs')

const sendResponse = (filename, statusCode, response) => {
  fs.readFile(`./html/${filename}`, (error, data) => {

    if (error) {
      response.statusCode = 500;
      response.end("Sorry internal error");
      response.setHeader('Content-Type', "text/plain")
    } else {
      response.statusCode = statusCode;
      response.setHeader('Content-Type', "text/html")
      response.end(data)
    }

  });
}
const http = require('http') //http 模块

const serve = http.createServer((request, response) => {

  const method = request.method;
  let url = request.url;

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain; charset-utf-8")


  if (method === "GET") {
    const requesUrl = new URL(url, `http:\\${ip}:${port}`)
    console.log(requesUrl);
    console.log(requesUrl.searchParams.get('lang'));

    if (url === '/') {
      sendResponse('index.html', 200, response)
    } else if (url === '/about.html') {
      sendResponse('about.html', 200, response)
    } else {
      sendResponse('404.html', 404, response)
    }
  } else {

  }
})

serve.listen(port, ip, () => {
  console.log(`Server is running at  http://${ip}:${port}`);
});
































// let http = require('http');
// // 创建一个server服务器
// let server = http.createServer((req, res)=>{
//   // 返回的状态码
//   res.statusCode = 200;
//   res.setHeader("Content-Type", "text/plain; charset=utf-8");
//   // 响应结束
//   res.end("Hello Node.js");
//   // 链式调用，监听之后回调
// }).listen(3000, "127.0.0.1", ()=>{
//   console.log("服务器已经运行，打开浏览器，输入http://127.0.0.1/3000/进行访问");
// });