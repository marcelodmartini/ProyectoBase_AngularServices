var express = require('express')
, app = express()
, bodyParser = require('body-parser')
, port = process.env.PORT || 4000;

app.set('views', __dirname + '/views')
app.engine('jade', require('jade').__express)
app.set('view engine', 'jade')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(require('./controllers'))

app.get('/', function (req, res) {

    var sql = require("mssql");
    
    // config for your database
    var config = {
        server: '192.0.2.240',
        driver: 'msnodesqlv8',
        user:'gchervet',
        domain:'KENNEDY',
        database:'prod_uni',
        password:'741852852',
        connectionString: 'Driver=msnodesqlv8;Server=192.0.2.240;Database=prod_uni;Trusted_Connection=yes;Integrated_Security=yes',
        port: 1433
    };
});

var server = app.listen(port, function () {
    console.log('Server is running in port ' + port);
});