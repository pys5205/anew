#!/bin/bash

if [ $# -eq 0 ]; then
	echo "Enter the country name"
else {
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
			echo $1" is not in the list."
	esac
}
fi
