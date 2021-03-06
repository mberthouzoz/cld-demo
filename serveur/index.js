var express = require('express');        // call express
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');

var connection = mysql.createConnection({
    host: '52.58.238.60',
    user: 'root',
    password: '12345',
    database: 'cld_demo'
});


var sqlCreateTable = "CREATE TABLE IF NOT EXISTS ";

var customer = "`customer` ( `id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(100) DEFAULT NULL, `city` varchar(100) DEFAULT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB DEFAULT CHARSET=latin1;";

var product = "`product` ( `id` int(11) NOT NULL AUTO_INCREMENT, `name` varchar(100) DEFAULT NULL, `price` float DEFAULT NULL, PRIMARY KEY (`id`) ) ENGINE=InnoDB DEFAULT CHARSET=latin1;";

var order = "`order` (`id` int(11) NOT NULL AUTO_INCREMENT, `customerId` int(11) DEFAULT NULL, `productId` int(11) DEFAULT NULL, `qty` int(11), `date` datetime DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY (`id`), KEY `productId_idx` (`productId`), KEY `customerId_idx` (`customerId`), CONSTRAINT `customerId` FOREIGN KEY (`customerId`) REFERENCES `customer` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION, CONSTRAINT `productId` FOREIGN KEY (`productId`) REFERENCES `product` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION) ENGINE=InnoDB DEFAULT CHARSET=latin1;";

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});

connection.query(sqlCreateTable + customer, function (err, res) {
    if (err) throw err;

    connection.query('INSERT INTO customer (name, city) VALUES ("John Doe", "Yverdon")');
    connection.query('INSERT INTO customer (name, city) VALUES ("Bob Contoso", "Lausanne")');
    connection.query('INSERT INTO customer (name, city) VALUES ("Alice Secret", "Zurich")');
});

connection.query(sqlCreateTable + product, function (err, res) {
    if (err) throw err;

    connection.query('INSERT INTO product (name, price) VALUES ("Intel Compute Stick", "429.00")');
    connection.query('INSERT INTO product (name, price) VALUES ("SONOS PLAY:1", "229.00")');
    connection.query('INSERT INTO product (name, price) VALUES ("Google Cardboard 3.0 POP! (Green)", "29.10")');
});

connection.query(sqlCreateTable + order, function (err, res) {
    if (err) throw err;
});

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// CORS
app.use(cors());

console.log("Enable CORS");

var port = 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/customers', function (req, res) {
    connection.query("SELECT id, name, city FROM customer", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.get('/products', function (req, res) {
    connection.query("SELECT id, name, price FROM product", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.get('/orders', function (req, res) {
    connection.query("SELECT c.name AS customer, c.id AS customerId, p.name AS product, p.price AS price, p.id as productId, o.qty, o.date FROM cld_demo.`order` AS o INNER JOIN cld_demo.`customer` AS c on o.customerId = c.id INNER JOIN cld_demo.`product` AS p on o.productId = p.id;", function (err, results) {
        if (err) throw err;
        res.json(results);
    });
});

router.post('/orders', function (req, res) {
    connection.query('INSERT INTO cld_demo.`order` (customerId, productId, qty) VALUES(' + req.body['customerId'] + ', ' + req.body['productId'] + ', ' + req.body['qty'] + ');', function (err, results) {
        if (err) throw err;
        console.log(results);
        res.json(results);
    });
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);