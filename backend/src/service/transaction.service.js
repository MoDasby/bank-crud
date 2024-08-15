import db from "../db/db.js";
import accountService from "./account.service.js";

const transactionCollection = db.collection("transaction")

async function newTransaction({ amount, sender_email, receiver_email }) {
    const sender = await accountService.getAccountByEmail(sender_email)
    const receiver = await accountService.getAccountByEmail(receiver_email)

    if (sender.availableBalance - amount < 0) throw new Error("dont have available money");

    sender.availableBalance -= amount
    receiver.availableBalance += amount

    const transaction = {
        amount, sender, receiver
    }

    await transactionCollection.insertOne(transaction)
    await accountService.update({ id: sender._id, updateBalanceAmount: -amount })
    await accountService.update({ id: receiver._id, updateBalanceAmount: amount })

    return transaction
}

async function updateBalance({ amount, email }) {
    const account = await accountService.getAccountByEmail(email)

    const transaction = {
        amount, sender: account, receiver: account
    }

    await transactionCollection.insertOne(transaction)
    await accountService.update({ id: account._id, updateBalanceAmount: amount })

    return transaction
}

async function listTransactions(email) {
    return transactionCollection.find({
        $or: [
            { "sender.email": email },
            { "receiver.email": email }
        ]
    }).toArray()
}

export default {
    newTransaction, listTransactions, updateBalance
}