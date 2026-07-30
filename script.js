let n = -153;
let sum = 0;
let prime = true;
let temp = n;
let digitSum = 0;
let armstrongSum = 0;
let digit;

for (let i = 1; i <= n; i++) {
    sum += i;
}
console.log("1. Sum of first " + n + " numbers = " + sum);

if (n <= 1) {
    prime = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            prime = false;
            break;
        }
    }
}

if (prime) {
    console.log("\n3. " + n + " is a Prime Number");
} else {
    console.log("\n3. " + n + " is NOT a Prime Number");
}

console.log("\n4. Factors of " + n + ":");
for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
        console.log(i);
    }
}

temp = n;

while (temp > 0) {
    digit = temp % 10;
    digitSum += digit;
    temp = Math.floor(temp / 10);
}

console.log("\n5. Sum of digits = " + digitSum);


temp = n;

while (temp > 0) {
    digit = temp % 10;
    armstrongSum += digit * digit * digit;
    temp = Math.floor(temp / 10);
}

if (armstrongSum == n) {
    console.log("\n6. " + n + " is an Armstrong Number");
} else {
    console.log("\n6. " + n + " is NOT an Armstrong Number");
}