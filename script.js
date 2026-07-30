let n = 153;

let sum = 0;
for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("Sum of first " + n + " numbers = " + sum);

let prime = true;

if (n <= 1) {
    prime = false;
} else {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    console.log("\n" + n + " is a Prime Number");
} else {
    console.log("\n" + n + " is NOT a Prime Number");
}

console.log("\nFactors of " + n + ":");
for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
        console.log(i);
    }
}

let temp = n;
let digitSum = 0;

while (temp > 0) {
    digitSum += temp % 10;
    temp = Math.floor(temp / 10);
}

console.log("\nSum of digits = " + digitSum);

temp = n;
let armstrongSum = 0;

while (temp > 0) {
    let digit = temp % 10;
    armstrongSum += digit ** 3;
    temp = Math.floor(temp / 10);
}

if (armstrongSum === n) {
    console.log(n + " is an Armstrong Number");
} else {
    console.log(n + " is NOT an Armstrong Number");
}