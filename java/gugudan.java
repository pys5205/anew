import java.util.*;

public class gugudan {
	public static void main(String[] agrs) {

    while(true){
      Scanner scan = new Scanner(System.in);
  		System.out.print("Insert number(0:Exit) : ");
  		int num = scan.nextInt();

      if(num==0){
        break;
      }else if(num>0 && num<10){
        for(int i=1; i<=9; i++){
          System.out.println(num+"*"+i+"="+num*i);
        }
      }else{
        System.out.println("Insert number 2~9. Retype Again ");
      }
    }

	}
}
