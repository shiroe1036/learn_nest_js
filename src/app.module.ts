import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
// import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { ConfigModule } from '@nestjs/config';
// import { PrismaService } from './prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    // TypeOrmModule.forRootAsync({
    //   useFactory: () => ({
    //     type: 'mariadb',
    //     host: process.env.DB_HOST,
    //     port: parseInt(process.env.DB_PORT) || 3306,
    //     username: process.env.DB_USER,
    //     password: process.env.DB_PASSWORD,
    //     database: process.env.DB_NAME,
    //     entities: [__dirname + '/**/*.entity.{ts,js}'],
    //     synchronize: false,
    //   }),
    // }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
