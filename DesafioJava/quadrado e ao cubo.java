import java.io.IOException;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);        
        int N = leitor.nextInt();
        for (int i = 1; i <= N; i++) {
            int iAoQuadrado = (int) Math.pow(i,2);
            int iAoCubo = (int) Math.pow(i,3);
            System.out.println(i + " " +  iAoQuadrado + " " + iAoCubo);
        }
    }
}