import java.util.Scanner;
public class main {
public static void main(String[] args){



    // Scanner input = new Scanner(System.in);
    // byte age = input.nextByte();
    // System.out.println(age);

    // int term1 = 7;
    // int term2 = 5;


    //     if (term1 < term2) {
    //        double sum = term1 + term2;
    //         System.out.println(sum);
    //     } else
    //     {
    //         System.out.println("Addition not allowed");
    //     }

    // Scanner sc = new Scanner(System.in);

    // System.out.print("Enter Num1");
    //  int a = sc.nextInt();


    // System.out.print("Enter Num2");
    // int b = sc.nextInt();

    // System.out.print("Enter Num3");
    // int c =sc.nextInt();

    // int d = a+b+c;

    // System.out.println("Total=" +d);


    int month = 9; //April
    String season;

    if (month ==12 || month == 3 || month == 11)
        season = "winter";
    else if (month == 4 || month == 6 || month == 7)
        season = "Spring";
    else if (month == 5 || month == 8 || month == 9)
        season ="Summer";
    else
        season = "out of area";

    System.out.println("April is in " + season + "." );
}

}