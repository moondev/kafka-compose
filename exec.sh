#!/bin/bash

#create topic

zk="--zookeeper zookeeper:2181"

kc="docker exec ktest_kafka-client_1"

#$kc ./kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic test

#list topics

$kc ./kafka-topics.sh --list $zk

