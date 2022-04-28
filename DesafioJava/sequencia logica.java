import java.io.IOException;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int N = leitor.nextInt();
        for (int i =1; i <= N; i++) {
            //Vamos mostrar i iQuadrado iCubo
            System.out.println(i + " " + ((int) Math.pow(i,2)) + " " + (int) Math.pow(i,3));
            //Vamos mostrar i (iQuadrado + 1) (iCubo + 1)
            System.out.println(i + " " + (int) (Math.pow(i,2)+1) + " " + (int) (Math.pow(i,3)+1));
        }
    }
}