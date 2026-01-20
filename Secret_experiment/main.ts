import Parser from "./frontend/parser.ts";
import readline from "node:readline";


repl()

async function repl() {
    const parser = new Parser();
    console.log("\nRepl ~ V.0.1")
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    
    const ask = () => {
        rl.question("> ", (input) => {
            if (!input || input.includes("exit")) {
                rl.close();
                process.exit(0);
            }

            try {
                const program = parser.produceAST(input);
                console.log(program);
            } catch (err) {
                console.error(err);
            }

            ask(); 
        });
    };

    ask();
}