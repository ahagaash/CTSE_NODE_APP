var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('{ "response": "Hello From Ahagaash.s IT19135076" }');
});

app.get('/group', function (req, res) {
    res.send('{ "response": "REG-2022-070" }');
});
app.get('/test', function (req, res) {
    res.send('{ "response": " Great!, It works!" }');
});
app.listen(process.env.PORT || 3000);
module.exports = app;
