const env = process.env;

//  NODE 2
const config = {
  db: { /* do not put password or any sensitive info here, done only for demo */
    host: env.DB_HOST || 'node-2.cvxzrzpy1aj2.ap-southeast-1.rds.amazonaws.com',
    user: env.DB_USER || 'admin',
    password: env.DB_PASSWORD || '12345678',
    database: env.DB_NAME || 'node2',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 5,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
  },
};
  
module.exports = config;