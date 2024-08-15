import accountService from "../service/account.service.js"

export default async (ctx, next) => {
    const authHeader = ctx.request.headers.authorization || ""

    console.log("aqui", authHeader)

    const [email, password] = authHeader.split(";")

    const isValid = await accountService.login({ email, password })

    if (isValid) {
        ctx.header.user = { email }
    }

    await next()
}