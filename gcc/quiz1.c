#include <stdio.h>
#include "libcheckeod.h"

void main(){
	int n;
	printf("Input num : ");
	scanf("%d", &n);

	if (checkeod(n) == 1){
		printf("%d is odd number\n", n);
	} else{
		printf("%d is even number\n", n);
	}
}
