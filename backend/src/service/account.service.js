import db from "../db/db.js"

const accountCollection = db.collection("account")

async function save({ name, email, password }) {
    const account = {
        name, email, password, availableBalance: 0
    }

    const existingAccount = await accountCollection.findOne({"email": email})

    if (!existingAccount) {
        await accountCollection.insertOne(account)

        return account
    }

    return existingAccount
}

async function login({email, password}) {
    const existingAccount = await accountCollection.findOne({"email": email})

    console.log(existingAccount, email, password)

    if (existingAccount && existingAccount.password === password) return true

    return false
}

async function getAccountByEmail(email) {
    const query = {"email": email}

    const account = await accountCollection.findOne(query)

    if (!account) throw new Error("can't find account");

    return account
}

async function update({id, updateBalanceAmount}) {
    const query = {
        $inc: {
            availableBalance: updateBalanceAmount
        }
    }

    return await accountCollection.updateOne({_id: id}, query)
}

export default {
    save, getAccountByEmail, update, login
}