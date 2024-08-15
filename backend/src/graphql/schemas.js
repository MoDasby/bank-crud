import {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLFloat,
    GraphQLList
} from 'graphql';
import accountService from '../service/account.service.js';
import transactionService from '../service/transaction.service.js';

const accountType = new GraphQLObjectType({
    name: 'Account',
    fields: {
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        },
        availableBalance: {
            type: GraphQLFloat
        },
    },
});

const transactionAccountType = new GraphQLObjectType({
    name: 'TransactionAccount',
    fields: {
        name: {
            type: GraphQLString
        },
        email: {
            type: GraphQLString
        }
    },
})

const transactionType = new GraphQLObjectType({
    name: "Transaction",
    fields: {
        amount: { type: GraphQLFloat },
        sender: { type: accountType },
        receiver: { type: transactionAccountType }
    }
})

const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'Query',
        fields: {
            account: {
                type: accountType,
                resolve: async (_, __, { user }) => {

                    if (!user) throw new Error("unauthorized")

                    const account = await accountService.getAccountByEmail(user.email)

                    return account
                }
            },
            transactions: {
                type: new GraphQLList(transactionType),
                resolve: async (_, __, { user }) => {
                    if (!user) throw new Error("unauthorized")

                    const t = await transactionService.listTransactions(user.email);

                    return t
                }
            }
        },
    }),
    mutation: new GraphQLObjectType({
        name: "mutation",
        fields: {
            account: {
                type: accountType,
                args: { email: { type: GraphQLString }, name: { type: GraphQLString }, password: { type: GraphQLString } },
                resolve: async (_, { email, name, password }) => {
                    const newAccount = await accountService.save({ name, email, password })

                    return newAccount
                }
            },
            transaction: {
                type: transactionType,
                args: { amount: { type: GraphQLFloat }, receiver_email: { type: GraphQLString } },
                resolve: async (_, { amount, receiver_email }, { user }) => {
                    if (!user) throw new Error("unauthorized");

                    return await transactionService.newTransaction({ amount, sender_email: user.email, receiver_email })
                }
            },
            updateBalance: {
                type: transactionType,
                args: { amount: { type: GraphQLFloat } },
                resolve: async (_, { amount }, { user }) => {
                    if (!user) throw new Error("unauthorized");

                    const updatedBalance = await transactionService.updateBalance({ amount, email: user.email })

                    return updatedBalance
                }
            }
        }
    })
});

export default schema;