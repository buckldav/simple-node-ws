# WebSocket Chat Simple

An example WebSocket chat server and client written in JavaScript for educational purposes. Minimal on purpose.

## WebSocket Learning Resource

Most code is adapted from the [README in the `ws` Node package](https://www.npmjs.com/package/ws).

## Features

- Allows for user to specify their username (no auth).
- Differentiation between self and others in the chat window.

## Install and Run

```bash
# server
cd server
pnpm i
pnpm start
```

```bash
# client
cd app
pnpm dlx serve
```

Visit the client at http://localhost:3000.
