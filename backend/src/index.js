// index.js
import Koa from 'koa';
import { createHandler } from 'graphql-http/lib/use/koa';
import schema from './graphql/schemas.js';
import mount from 'koa-mount';
import authMiddleware from './middleware/auth.middleware.js';
import db from './db/db.js';
import cors from '@koa/cors';

await db.connect()

const app = new Koa();

app.use(cors())
app.use(authMiddleware)

app.use(mount('/graphql', createHandler({ schema, context: (ctx) => ({ user: ctx.headers.user }) })));

app.listen(4000)
console.log("listening")