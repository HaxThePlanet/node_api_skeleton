### INSTALL
* `npm install`

### CONFIGURE
* `cp dotenv.dist .env`
  * edit values
* `touch config/$NODE_ENV.json`
  * edit values, overrides `config/default.json`

### TEST
* `npm test`

### RUN
* `npm start`
* `http://localhost:3000`

**GET**
`http://localhost:3000/v0/skeleton-get`

**POST**
`http://localhost:3000/v0/skeleton-post`
