#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var Totalbalance = 10000;
console.log("Your current balance is" + " " + Totalbalance);
console.log("My pin code is 1234 ");
var mypin = 1234;
console.log(" My pin code is ".concat(mypin));
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin number:"
    },
]);
//console.log(pinAnswer.pin)
var accountAnswer = await inquirer_1.default.prompt([
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
    var cashWithdrawlAmount = await inquirer_1.default.prompt([
        {
            name: "Withdrawl",
            type: "number",
            message: "Enter your amount you want to withdraw:"
        },
    ]);
    // greater than or equal to operator.
    if (Totalbalance >= cashWithdrawlAmount.Withdrawl) {
        Totalbalance -= cashWithdrawlAmount.Withdrawl; //totalbalance = totalbalnce - cashwithdrawlAmount
        console.log("Your total balnce is :".concat(Totalbalance));
    }
    else {
        console.log("Insufficient balnce");
    }
}
else {
    var FastcashAmount = await inquirer_1.default.prompt([
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
        console.log("Your total balnce is :".concat(Totalbalance));
    }
    else {
        console.log("Insufficient balnce");
    }
}
