
import Router from './router';
import http from 'http';

const router = new Router();

const expa = () => {
  const app = http.createServer((req: any, res: any) => {
    
    const route = router.search(req.url, req.method);
    
    res.writeHead(200, {'Content-Type': "application/json "});
    res.end(JSON.stringify({ 
      "message": "Hello World!"
    }));
    
    
  })
  // Discover why property does not exist is not valid.
  // app.use = {};
  return app;
};



export default expa;