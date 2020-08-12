import { Connection, createConnection } from 'mysql';

const connectToDatabase = (): Connection | undefined => {
  const connection = createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: process.env.MYSQL_SSL,
  });

  try {
    connection.connect();
    return connection;
  } catch (ex) {
    return undefined;
  }
};

export default connectToDatabase;
