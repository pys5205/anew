#!/bin/bash

echo -n "Input Woman Age : "
read woman

echo -n "Input Man Age : "
read man

if [ $man -lt $woman ]; then
	echo "old Woman"
elif [ $man -eq $woman ]; then
	echo "same"
else
	echo "old Man"
fi
