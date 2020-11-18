process.env.NODE_ENV = process.env.NODE_ENV || 'development' // production

const express = require('express')
const mongoose = require('mongoose')
const Sentry = require('@sentry/node')
const config = require('./config/environment/index')

const app = express()

if (config.env === 'production' || config.env === 'staging') {
  Sentry.init({
    dsn: 'https://6c7958e0570f455381d6f17122fbd117@o132281.ingest.sentry.io/292307',
    release: 'KiboDbLayer@1.0.0',
    environment: config.env,
    serverName: 'KiboDbLayer',
    sendDefaultPii: true
  })
}

mongoose.connect(config.mongo.uri, config.mongo.options)

require('./config/express')(app)
require('./config/setup')(app, config)
require(`./routes/${process.env.NODE_APP}.js`)(app)
// require('./api/v1/scripts/cpuProfiler')()
