import java.io.IOException;
import java.util.*;
public class Main {
    public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        String T = leitor.nextLine();
        //Está é a resposta que passa no desafio
        System.out.println(T.length() > 140 ? "MUTE" : "TWEET");
    }
}