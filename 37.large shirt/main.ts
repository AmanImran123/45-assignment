function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`A ${size} shirt will be printed with the message: "${message}".`);
}

// Making a large shirt with default message
make_shirt();

// Making a medium shirt with default message
make_shirt("medium");

// Making a shirt of any size with a different message
make_shirt("small", "Hello, GPT-3.5!");
