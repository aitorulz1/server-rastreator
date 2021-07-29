const Koa = require('koa')
const logger = require('./inc/logger')
const koaLogger = require('koa-logger')
const cors = require('@koa/cors');

const loansRoter = require('./routes/loans.router')
const insurancesRoter = require('./routes/insurances.router')

const app = new Koa()
app.use(koaLogger())
app.use(cors());

app.use(loansRoter.routes())
app.use(insurancesRoter.routes())

logger.info('Init server - http://localhost:4000')
app.listen(4000)
