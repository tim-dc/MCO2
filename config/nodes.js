const env = process.env;

//  NODE 2
const config = {
  db1: {
    host: env.DB_HOST || '',
    user: env.DB_USER || '',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || '',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 3,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
    
  },

  db2: {
    host: env.DB_HOST || 'node-2.cvxzrzpy1aj2.ap-southeast-1.rds.amazonaws.com',
    user: env.DB_USER || 'admin',
    password: env.DB_PASSWORD || '12345678',
    database: env.DB_NAME || 'db_node2',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 3,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
    
  },

  db3: {
    host: env.DB_HOST || '',
    user: env.DB_USER || '',
    password: env.DB_PASSWORD || '',
    database: env.DB_NAME || '',
    waitForConnections: true,
    connectionLimit: env.DB_CONN_LIMIT || 3,
    queueLimit: 0,
    debug: env.DB_DEBUG || false
    
  },
};
  
module.exports = config;