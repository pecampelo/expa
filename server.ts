
import router from './router';
import routes from "./routes"
import http from "http";

router.use(routes);

const server = http.createServer((req: any, res: any) => {

  router.use(routes);
  const route = router.search(req.url, req.method);

  res.writeHead(200, {'Content-Type': "application/json "});
  res.end(JSON.stringify({ "message": "Hello World!"}));

})

server.listen(7070, () => {
  console.log('hello!');
})

