function skillsMember*() {
  return this.skills;
}
// Create web server
var server = http.createServer(function (req, res) {
  if (req.url === '/skills') {
    res.end(JSON.stringify(skillsMember()));
  } else {
    res.end('Not found');
  }
}
server.listen(3000);
