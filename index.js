#! /usr/bin/env node
import inquirer from "inquirer";
let Totalbalance = 10000;
console.log("Your current balance is" + " " + Totalbalance);
const mypin = 1234;
console.log(`yourpin code is ${mypin}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number:"
    },
]);
//console.log(pinAnswer.pin)
let accountAnswer = await inquirer.prompt([
    {
        name: "accountType",
        type: "list",
        message: "Please select your account type",
        choices: ["Current Account", "Saving Account"]
    },
    {
        name: "transactionMethod",
        type: "list",
        choices: ["cash Withdrawl", "fast Cash"],
        message: "Please select your transaction method"
    },
]);
if (accountAnswer.transactionMethod == "cash Withdrawl") {
    let cashWithdrawlAmount = await inquirer.prompt([
        {
            name: "Withdrawl",
            type: "number",
            message: "Enter your amount you want to withdraw:"
        },
    ]);
    // greater than or equal to operator.
    if (Totalbalance >= cashWithdrawlAmount.Withdrawl) {
        Totalbalance -= cashWithdrawlAmount.Withdrawl; //totalbalance = totalbalnce - cashwithdrawlAmount
        console.log(`Your total balnce is :${Totalbalance}`);
    }
    else {
        console.log("Insufficient balnce");
    }
}
else {
    let FastcashAmount = await inquirer.prompt([
        {
            name: "fastCash",
            type: "list",
            choices: ["1000",
                "5000",
                "8000"],
            message: "Select your amount you want to withdraw:"
        },
    ]);
    if (Totalbalance >= FastcashAmount.fastCash) {
        Totalbalance -= FastcashAmount.fastCash; //totalbalance = totalbalnce - cashwithdrawlAmount
        console.log(`Your total balnce is :${Totalbalance}`);
    }
    else {
        console.log("Insufficient balnce");
    }
}
