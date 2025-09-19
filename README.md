# Nest.js 

> Node.js Nest.js API with TypeScript, Supports MongoDB

## Description
This generator will help you to build your own Nest.js Mongodb API using TypeScript.

## Features
##### Authentication:
- passport local strategy
- jwt authentication
##### Session Storage:
- MongoDB
- Redis

## Requirements

- node >= 12
- npm >= 6
- mongodb >= 4.0
- typescript >= 3.0

## Installation

App Skeleton

```
├── src
│├── components
││├── app
│││   └── ...
││├── auth
│││   └── ...
││└── users
││    └── ...
│├── dto
││└── ...
│├── filters
││└── ...
│├── guards
││└── ...
│├── main.ts
│└── pipes
│    └── ...
├── index.js
├── nest-cli.json
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.build.json
└── tsconfig.json

```

## Running the API
### Development
To start the application in development mode, run:

```bash
npm start:dev
```

Start the application in production env:

Install ts pm2 and typescript compiler:
```
npm install -g pm2
pm2 install typescript
```

Express server listening on http://localhost:3000/, in development mode
The developer mode will watch your changes then will transpile the TypeScript code and re-run the node application automatically.

### Testing
To run integration tests:
```bash
npm test
```
  
## Set up environment
In root folder you can find `.env`. You can use this config or change it for your purposes.

## Swagger
Swagger documentation will be available on route:
```bash
http://localhost:3000/api
```
