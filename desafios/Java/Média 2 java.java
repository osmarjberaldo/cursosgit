import java.util.Scanner;

public class Main {

  
    public static void main(String[] args) {
        Scanner entrada = new Scanner(System.in);
        double nota1 = entrada.nextDouble();
        double nota2 = entrada.nextDouble();
        double nota3 = entrada.nextDouble();
        double MEDIA;
        MEDIA = (nota1*2 + nota2*3 + nota3*5)/10;
        System.out.printf("MEDIA = %.1f\n",MEDIA);
       
       
       
    }
   
}