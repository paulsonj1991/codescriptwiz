// Create a class named CodeScriptWiz
class CodeScriptWiz {
    constructor() {
        this.codes = [];
    }

    // Method: learn a new code
    learnCode(code) {
        this.codes.push(code);
        console.log(`Learned ${code} as a new code snippet.`);
    }

    // Method: forget a code
    forgetCode(code) {
        const index = this.codes.indexOf(code);
        if (index !== -1) {
            this.codes.splice(index, 1);
            console.log(`Forgot ${code} as a code snippet.`);
        } else {
            console.log(`${code} is not found in the learned code snippets.`);
        }
    }

    // Method: list all learned code snippets
    listCodes() {
        console.log("Learned code snippets:");
        this.codes.forEach(code => {
            console.log(code);
        });
    }
}

// Create an instance of CodeScriptWiz named myCodeScriptWiz
const myCodeScriptWiz = new CodeScriptWiz();

// Learn code snippets
myCodeScriptWiz.learnCode("function add(a, b) { return a + b; }");
myCodeScriptWiz.learnCode("const greet = (name) => `Hello, ${name}!`;");
myCodeScriptWiz.learnCode("const double = (x) => x * 2;");

// List all learned code snippets
myCodeScriptWiz.listCodes();

// Forget a code snippet
myCodeScriptWiz.forgetCode("const greet = (name) => `Hello, ${name}!`;");

// List all learned code snippets after forgetting
myCodeScriptWiz.listCodes();
