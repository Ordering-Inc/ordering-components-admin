import React from 'react'
import ReactDOM from 'react-dom'
import * as Sentry from '@sentry/react'
import { Integrations } from '@sentry/tracing'
import App from './example/App'
import { OrderingProvider } from './src/contexts/OrderingContext'

const configFile = {
  app_id: 'ordering-react',
  project: 'luisv4',
  api: {
    url: 'https://apiv4.ordering.co',
    language: 'en',
    version: 'v400'
  },
  socket: {
    url: 'https://socket-v3.ordering.co'
  }
}

Sentry.init({
  environment: process.env.NODE_ENV,
  dsn: 'https://c75f5b39a050458a920ce16a2878352a@o460529.ingest.sentry.io/5681465',
  release: 'ordering-components-admin@' + process.env.npm_package_version,
  // We recommend adjusting this value in production, or using tracesSampler
  // for finer control
  tracesSampleRate: 0.2,
  // Release health
  autoSessionTracking: true,
  integrations: [new Integrations.BrowserTracing()]
})

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App />
  </OrderingProvider>, wrapper)
