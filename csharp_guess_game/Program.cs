using System;

class Program {
    static void Main() {
        Console.WriteLine("number guessing game");
        string again = "y";
        Random rnd = new Random();
        while (again == "y") {
            int target = rnd.Next(1, 101);
            int tries = 0;
            while (true) {
                Console.Write("pick a number 1-100: ");
                string line = Console.ReadLine();
                if (!int.TryParse(line, out int guess)) {
                    Console.WriteLine("use numbers");
                    continue;
                }
                tries++;
                if (guess < target) {
                    Console.WriteLine("higher");
                } else if (guess > target) {
                    Console.WriteLine("lower");
                } else {
                    Console.WriteLine("nice, you got it in " + tries + " tries");
                    break;
                }
            }
            Console.Write("play again? (y/n): ");
            again = Console.ReadLine().ToLower();
            if (again != "y") break;
        }
    }
}
