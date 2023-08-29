const sentence = "hello";
let timeout = 0;

for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char)
  },timeout)
  timeout += 50;
};

setTimeout(()=> {
  process.stdout.write("\n")
}, timeout);