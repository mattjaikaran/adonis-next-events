# Adonis NextJS Events Application

NodeJS API built with AdonisJS <br>
React front end using NextJS  <br>
Ant Design UI Library <br>
MySQL DB


#### This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new events-api --api-only
```

or manually clone the repo and then run `npm install`.

Run the NextJS client in a new terminal window
```bash
cd client
npm install
npm run dev
```


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
