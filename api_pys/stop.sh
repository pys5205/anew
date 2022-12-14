#!/bin/bash


kill -9 $(ps -ef | grep start.sh | awk '{print $2}')
kill -9 $(ps -ef | grep disk_network.py | awk '{print $2}')
