if (totalPoints > bet.line) {
    balances[bet.over] += bet.amount * 2;
} else if (totalPoints < bet.line) {
    balances[bet.under] += bet.amount * 2;
} else {
    balances[bet.under] += bet.amount;
    balances[bet.over] += bet.amount;
}