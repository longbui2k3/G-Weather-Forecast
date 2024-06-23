import { DynamicModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

export class MongoModule {
  constructor() {}
  static forRootAsync(): DynamicModule {
    return MongooseModule.forRootAsync({
      useFactory: () => {
        return {
          connectionFactory: (connection) => {
            if (connection.readyState === 1) {
              console.log('Database Connected successfully');
            }
            connection.on('disconnected', () => {
              console.log('Database disconnected');
            });
            connection.on('error', (error) => {
              console.log('Database connection failed!');
            });
            return connection;
          },
          uri: `mongodb+srv://buiduclong911:aElajH4GnBrPmE4L@cluster0.tfnjmj7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
          maxPoolSize: 50,
        };
      },
    });
  }
}
