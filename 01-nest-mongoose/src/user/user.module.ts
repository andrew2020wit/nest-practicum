import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserController } from './controller/user.controller';
import { User, UserSchema } from './schemas/user.schema';
import { UserService } from './service/user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
