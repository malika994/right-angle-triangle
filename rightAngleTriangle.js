let n = 6;
let char = "\t*";
for (let i = 1; i <= n; i++) {
    for (let j = i; j >= i; j--) {
        console.log(char);
    }
    char += "\t*" + "\t*";
}
