// const express = require('express');
// const app = express();
// // Run the app by serving the static files
// // in the dist directory
// app.use(express.static(__dirname + '/dist/index.html'));
// // Start the app by listening on the default
// // Heroku port
// app.listen(process.env.PORT || 8080);


const express = require('express');
const http = require('http')
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '/dist/angular-ci/')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/angular-ci/'));
}); 

const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log('running'));