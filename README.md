# lit-ssr-demo

A repo for running and testing out use cases with the [**Lit+SSR** demos](https://github.com/lit/lit/tree/main/packages/labs/ssr/src/demo).

## Setup

1. Make sure you have [NodeJS >= 14.x](https://nodejs.org/) installed
1. After cloning this repo, run `npm install`

## Server

You can run both server demos as follows:
* `npm run serve:global` - use global NodeJS scope for shimming
* `npm run serve:vm` - uses expiremental NodeJS [vm modules]() for shimming

Run either command to kick off the server and then load it over `localhost:8080` in your browser.