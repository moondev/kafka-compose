var kafka = require('kafka-node');
var HighLevelProducer = kafka.HighLevelProducer;
var Client = kafka.Client;
var client = new Client('zookeeper:2181');
var argv = require('optimist').argv;
var topic = argv.topic || 'coolio';
var count = 1000;
var rets = 0;
var producer = new HighLevelProducer(client);

producer.on('ready', function () {
  setInterval(send, 100);
});

producer.on('error', function (err) {
  console.log('error', err);
});

function send () {
  var message = Math.random().toString(36).substring(7);
  producer.send([
    {topic: topic, messages: [message]}
  ], function (err, data) {
    if (err) console.log(err);
    else console.log('send %d messages', ++rets);
    if (rets === count) process.exit();
  });
}