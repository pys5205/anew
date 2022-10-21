#!/bin/bash

case "$1" in
	ko)
		echo "Seoul" ;;
	cn)
		echo "Beijing" ;;
	us)
		echo "Washington" ;;
	jp)
		echo "Tokyo" ;;
	*)
		echo "Enter the country name~!!"
esac
