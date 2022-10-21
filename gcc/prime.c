#include <stdio.h>
#include "libprimeod.h"

int main(){
  int n;
  while(1) {
  	printf("Input integer => ");
  	scanf("%d", &n);
    if (n==0){
      return 0;
    } else{
    	if (primeod(n) == 1){
    		printf("%d is prime number\n", n);
    	} else{
    		printf("%d is not prime number\n", n);
    	}
    }
  }

}
