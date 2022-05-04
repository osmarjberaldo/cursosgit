import java.util.Scanner;

public class Main {
  public static void main(String[] args) {
    Scanner scan = new Scanner(System.in);
    String T = scan.nextLine();
    String respostasCompetidores = scan.nextLine();
    String respostasCertas;

    String[] respostasCompetidoresSplit = respostasCompetidores.split(" ");
//TODO: Complete o código com uma possível solução para o problema.    
    int count = 0;
    for ( int i = 0 ; i < respostasCompetidoresSplit.length ; i++                           ) {
      if (  respostasCompetidoresSplit[i].equals(T)                         ) 
        count++;
    }
    
    System.out.println(   count        );
  }
}

