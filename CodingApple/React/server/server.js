const express = require('express');
const path = require('path');
const app = express();

app.listen(8080, function () {
  console.log('listening on 8080')
}); 

app.use(express.json());
var cors = require('cors');
app.use(cors());

app.use(express.static((path.join(__dirname, 'build'))));

app.get('/', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'build/index.html'));
})

app.get('/product', function(요청, 응답) {
    응답.json({name : 'black shoes'});
})

app.get('*', function(요청, 응답) {
    응답.sendFile(path.join(__dirname, 'build/index.html'));
})