// ���̹� �����ռ� Open API ����
var express = require('express');
var app = express();
var client_id = 'vqipsxwgmf';
var client_secret = 'rxj0tJnnv9tgRrbr82IjUGDssiMOykunS5SNW8j9';
var fs = require('fs');
app.get('/tts', function(req, res) {
  var api_url = 'https://naveropenapi.apigw.ntruss.com/voice/v1/tts';
  var request = require('request');
  var options = {
    url: api_url,
    form: { speaker: 'mijin', speed: '0', text: '�߿� �� ���� ���?' },
    headers: { 'X-NCP-APIGW-API-KEY-ID': client_id, 'X-NCP-APIGW-API-KEY': client_secret },
  };
  var writeStream = fs.createWriteStream('./tts1.mp3');
  var _req = request.post(options).on('response', function(response) {
    console.log(response.statusCode); // 200
    console.log(response.headers['content-type']);
  });
  _req.pipe(writeStream); // file�� ���
  _req.pipe(res); // �������� ���
});
app.listen(3000, function() {
  console.log('http://127.0.0.1:3000/tts app listening on port 3000!');
});
