//ESTE ARQUIVO NÃO SERVE PARA CRIAR UM SERVIDOR LOCAL
const http = require('http')
const port = 3000
const ip = 'localhost'
var fs = require('fs');

const server = http.createServer(function(req, res){
  fs.readFile('teams.json', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});
server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
