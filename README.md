# kafka-compose

Run zookeeper, kafka broker, producer and consumer with docker-compose

start zookeeper
```
docker-compose up zookeeper
```

start kafka broker
```
docker-compose up kafka-broker-0
```

start producer
```
docker-compose up producer
```

When the producer starts, you should see random data start to stream in the terminal. In another terminal start the consumer

```
docker-compose up consumer
```

You should see the data from the consumer start to be recieved in the terminal output.