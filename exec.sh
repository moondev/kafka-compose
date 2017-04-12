#!/bin/bash



zk="--zookeeper zookeeper:2181"
kc="docker exec -it ktest_kafka-client_1"
bl="--broker-list kafka-broker-1:9092"

#create topic
#$kc ./kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic test

#list topics

#docker exec ktest_kafka-client_1 ./kafka-topics.sh --list --zookeeper zookeeper:2181

#docker exec -it ktest_kafka-client_1 ./kafka-console-producer.sh --broker-list kafka-broker-1:9092 --topic test

#docker exec -it ktest_kafka-client_1 ./kafka-console-consumer.sh --bootstrap-server kafka-broker-1:9092 --topic test --from-beginning

#docker exec -it ktest_kafka-client_1 ./kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 3 --partitions 1 --topic my-replicated-topic

#docker exec -it ktest_kafka-client_1 ./kafka-topics.sh --describe --zookeeper zookeeper:2181 --topic my-replicated-topic

#$kc ./kafka-console-producer.sh $bl --topic my-replicated-topic

#$kc ./kafka-console-consumer.sh --bootstrap-server localhost:9092 --from-beginning --topic my-replicated-topic