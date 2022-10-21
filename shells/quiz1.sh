#!/bin/bash

echo -n "Input Woman Age : "
read woman

echo -n "Input Man Age : "
read man

if [ $man -lt $woman ]; then
	echo "old Woman"
elif [ $man -gt $woman ]; then
	echo "old Man"
else
	echo "same"
fi
