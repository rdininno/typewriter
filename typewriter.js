const sentence = "hello there from lighthouse labs";
let counter = 0;

for (let char in sentence) {
  setTimeout(() => {
    if (parseInt(char) === sentence.length - 1) {
      process.stdout.write(sentence[char] + '\n')
    }
    process.stdout.write(sentence[char])
  }, counter)

  counter += 50;
}


