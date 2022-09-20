import { MongoConnectionOptions } from 'typeorm/driver/mongodb/MongoConnectionOptions';

const config: MongoConnectionOptions = {
  username: 'appuser',
  password: 'pass',
  host: 'localhost',
  port: 27017,
  type: 'mongodb',
  ssl: false,
  synchronize: true,
  entities: ['dist/src/**/*.entity.js'],
};

export default config;
