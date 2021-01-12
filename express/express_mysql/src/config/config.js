let env = {
    development: {
        //Change process.env variable to correct manifest
        username: express,
        password: express,
        database: express,
        host: 127.0.0.1,
        port: 8001,
        dialect: mysql
    },
    test: {
        //Change process.env variable to correct manifest
        username: process.env./**/_USER,
        password: process.env.APP_DB_ADMIN_PASSWORD,
        database: process.env./**/_DATABASE,
        host: process.env./**/HOST,
        port: process.env./**/PORT,
      dialect: "mysql"
    },
    production: {
        //Change process.env variable to correct manifest
        username: process.env./**/_USER,
        password: process.env.APP_DB_ADMIN_PASSWORD,
        database: process.env./**/_DATABASE,
        host: process.env./**/HOST,
        port: process.env./**/PORT,
      dialect: "mysql"
    }
  }

  
  
  