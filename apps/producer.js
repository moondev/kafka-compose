var kafka = require('kafka-node');
var sleep = require('sleep');

var Producer = kafka.Producer;
var KeyedMessage = kafka.KeyedMessage;
var Client = kafka.Client;
var client = new Client('zookeeper:2181');
var argv = require('optimist').argv;
var topic = argv.topic || 'cool';
var p = argv.p || 0;
var a = argv.a || 0;
var producer = new Producer(client, { requireAcks: 0 });



producer.on('ready', function () {

producer.createTopics([topic], false, function (err, data) {
    console.log(data);
});

  while (true) { 
      producer.send([
    { topic: topic, partition: p, messages: [Math.random().toString(36).substring(7), new KeyedMessage('keyed', 'a keyed message')], attributes: a }
  ], function (err, result) {
    console.log(err || result);
    console.log('sent?')
    //process.exit();
  });
    
    
    sleep.sleep(1)




}





});

producer.on('error', function (err) {
  console.log('error', err);
});

