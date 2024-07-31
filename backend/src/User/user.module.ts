import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { PrismaModule } from '../Prisma/prisma.module';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
