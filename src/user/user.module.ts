import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}