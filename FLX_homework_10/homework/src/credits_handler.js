const taxes = 0.005;
const cardsLimit = 3;
const fCard2 = 2;
let limitSet = 800;
let creditsPut = 500;
let creditsTake = 50;
let creditsTransfer = 300;


function userCard(index) {
    const cardInfo = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        keyF: index
    };

    const addHistoryLogs = function(operationType, credits) {
        const log = {
            operationType,
            credits,
            operationTime: new Date().toLocaleString('en-GB')
        };
        cardInfo.historyLogs.push(log);
    };

    const getCardOptions = function() {
        return cardInfo;
    };

    const takeCredits = function(amountOfFunds) {
        if (amountOfFunds <= cardInfo.balance && amountOfFunds <= cardInfo.transactionLimit) {
        cardInfo.balance = cardInfo.balance - amountOfFunds;
        addHistoryLogs('Withdrawal of credits', amountOfFunds);
        } else {
            console.error('Insufficent funds in your account or transaction limit is too small!');
        }
    };

    const putCredits = function(amountOfFunds) {
        cardInfo.balance = cardInfo.balance + amountOfFunds;
        addHistoryLogs('Received credits', amountOfFunds);
    };

    const setTransactionLimit = function(amountOfFunds) {
        cardInfo.transactionLimit = amountOfFunds;
        addHistoryLogs('Transaction limit change', amountOfFunds);
    };

    const transferCredits = function(amountOfFunds, recipientCard) {
        let amountWithTaxes = amountOfFunds + amountOfFunds * taxes;
        if (amountWithTaxes > cardInfo.balance && amountWithTaxes > cardInfo.transactionLimit) {
            console.error('Insufficent funds in your account or transaction limit is too small!');
        } else {
            this.takeCredits(amountWithTaxes);
            recipientCard.putCredits(amountOfFunds);
        }
    };

    return {
        getCardOptions,
        putCredits,
        takeCredits,
        setTransactionLimit,
        transferCredits
    };
}

class UserAccount {
    constructor(name) {
        this.name = name;
        this.cards = [];
    }
    addCard() {
        if (this.cards.length > cardsLimit) {
            console.error('Too many cards forbidden');
        } else {
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(keyF) {
        return this.cards[keyF - 1];
    }
}


let user = new UserAccount('Bob');
user.addCard();
user.addCard();

let card1 = user.getCardByKey(1);
let card2 = user.getCardByKey(fCard2);

card1.putCredits(creditsPut);
card1.setTransactionLimit(limitSet);
card1.transferCredits(creditsTransfer, card2);

card2.takeCredits(creditsTake);

console.log(card1.getCardOptions());