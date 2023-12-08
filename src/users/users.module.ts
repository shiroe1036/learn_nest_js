import { Module } from '@nestjs/common';
import { UserService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  providers: [UserService, PrismaService],
  controllers: [UsersController],
})
export class UsersModule {}
